const { app, BrowserWindow, screen, ipcMain } = require("electron");
const { exec } = require("child_process");
const path = require("path");
const fs = require("fs");
const { default: axios } = require("axios");

let mainWindow;

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  mainWindow = new BrowserWindow({
    width: width,
    height: height,
    resizable: false, // Desactiva la capacidad de redimensionamiento
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadURL("http://localhost:3000/");
  mainWindow.webContents.openDevTools();
  mainWindow.on("closed", () => (mainWindow = null));
}

app.whenReady().then(() => {
  createWindow();
  ipcMain.handle("open-exe", async (event, codigoEstudiante,sede) => {
    return new Promise((resolve, reject) => {
      const exePath = "C:\\InfinityChess\\RegistrarHuella\\HyuellaDigital.exe";
      const comando = `"${exePath}" "${codigoEstudiante}" 2>&1`;
      exec(comando, (error, stdout, stderr) => {
        if (error) {
          reject("Error al ejecutar el archivo .exe: " + error.message);
        }
        const rutaArchivo = path.join(
          "C:\\InfinityChess\\RegistrarHuella\\Huellas",
          `${codigoEstudiante}.txt`
        );
        try {
          fs.accessSync(rutaArchivo, fs.constants.F_OK);
          // El archivo existe
          const contenidoArchivo = fs.readFileSync(rutaArchivo, null);
          axios
            .post("http://173.249.2.36:8000/subirArchivo", {
              CODESTUDIANTE: codigoEstudiante,
              HUELLA: contenidoArchivo.toString('base64'),
              SEDE:sede
            })
            .then((response) => {
              if (response.data === "Subido") {
                resolve("Existe");
              }
            });
        } catch (error) {
          // El archivo no existe
          resolve("No existe");
        }
      });
    });
  });
  ipcMain.handle("open-exeVerificar", async (event,sede) => {
    const exePath = "C:\\InfinityChess\\VerificarHuella\\VerificarHuella.exe";
    const comando = `"${exePath}" "${sede}" 2>&1`;

    exec(comando, (error, stdout, stderr) => {
      if (error) {
        reject("Error al ejecutar el archivo .exe: " + error.message);
      }
    })
  });
  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
