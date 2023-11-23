const { app, BrowserWindow, ipcMain } = require("electron");
const { exec } = require("child_process");
const path = require("path");
const isDev = require("electron-is-dev");
const fs = require('fs').promises;

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  mainWindow.loadURL(
    "http://173.249.2.36"
  );
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    mainWindow.webContents.openDevTools();
  }
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", () => {
  createWindow();

  ipcMain.handle("open-exe", async (event, codigoEstudiante) => {
    return new Promise((resolve, reject) => {
      const exePath = "C:\\InfinityChess\\RegistrarHuella\\HyuellaDigital.exe";
      const comando = `"${exePath}" "${codigoEstudiante}" 2>&1`;
  
      exec(comando, (error, stdout, stderr) => {
        if (error) {
          reject("Error al ejecutar el archivo .exe: " + error.message);
        }
  
        const rutaArchivo = path.join('C:\\InfinityChess\\RegistrarHuella\\Huellas', `${codigoEstudiante}.txt`);
  
        try {
          fs.accessSync(rutaArchivo, fs.constants.F_OK);
          // El archivo existe
          resolve('Existe');
        } catch (error) {
          // El archivo no existe
          resolve('No existe');
        }
      });
    });
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