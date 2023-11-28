import { faCalendarDay, faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import {
  BotonCerrar,
  ContainerTabla,
  ContainerTexto,
  ContenedorModal,
  DetalleUsuario,
  EncabezadoModal,
  InputDate,
  Overlay,
  Text,
  Titulo,
} from "./DiseñoFiltro";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
export default function Filtro({
  estado,
  cambiarEstado,
  genero,
  setGenero,
  colegio,
  setColegio,
  tipo,
  fechaIni,
  setFechaIni,
  fechaFin,
  setFechaFin,
  relacion,
  setRelacion,
  iniInt,
  finInt,
  datosFecha,
  setDatosFecha
}) {
  function handleSelect(ranges) {
    setDatosFecha(ranges.selection);
    iniInt(ranges.selection.startDate);
    finInt(ranges.selection.endDate);
  }

  const [cumpleaño, setCumpleaño] = useState(false);
  return (
    <>
      {estado && (
        <Overlay
          tipo={tipo === "Tutor" ? "true" : cumpleaño ? "false" : "nada"}
        >
          <ContenedorModal
            tipo={tipo === "Tutor" ? "true" : cumpleaño ? "false" : "nada"}
          >
            <EncabezadoModal>
              <Titulo>Filtros</Titulo>
            </EncabezadoModal>
            {!cumpleaño && (
              <BotonCerrar
                title="Cumpleaños"
                alado={"true"}
                onClick={() => {
                  setCumpleaño(true);
                }}
              >
                <FontAwesomeIcon icon={faCalendarDay} />
              </BotonCerrar>
            )}
            <BotonCerrar
              onClick={() => {
                cumpleaño ? setCumpleaño(false) : cambiarEstado(false);
              }}
            >
              <FontAwesomeIcon icon={faXmark} />
            </BotonCerrar>
            {tipo === "Tutor" && (
              <DetalleUsuario>
                <ContainerTabla>
                  <ContainerTexto>
                    <Text titulo={"true"}>Fecha de nacimiento</Text>
                    <Text titulo={"true"}>Genero</Text>
                    <Text titulo={"true"}>Relacion</Text>
                  </ContainerTexto>
                  <ContainerTexto>
                    <Text>Fecha inicio</Text>
                    <Text
                      seleccionado={genero === "Hombre" ? "true" : "false"}
                      onClick={() => {
                        genero !== "Hombre"
                          ? setGenero((prevGenero) => {
                              return "Hombre";
                            })
                          : setGenero((prevGenero) => {
                              return "";
                            });
                      }}
                    >
                      Hombre
                    </Text>
                    <Text
                      seleccionado={relacion === "Padre" ? "true" : "false"}
                      onClick={() => {
                        relacion !== "Padre"
                          ? setRelacion((prev) => {
                              return "Padre";
                            })
                          : setRelacion((prev) => {
                              return "";
                            });
                      }}
                    >
                      Padre
                    </Text>
                  </ContainerTexto>
                  <ContainerTexto>
                    <Text>
                      <InputDate
                        type="date"
                        value={fechaIni}
                        onChange={(e) => {
                          setFechaIni(e.target.value);
                        }}
                      />
                    </Text>
                    <Text
                      seleccionado={genero === "Mujer" ? "true" : "false"}
                      onClick={() => {
                        genero !== "Mujer"
                          ? setGenero((prevGenero) => {
                              return "Mujer";
                            })
                          : setGenero((prevGenero) => {
                              return "";
                            });
                      }}
                    >
                      Mujer
                    </Text>
                    <Text
                      seleccionado={relacion === "Madre" ? "true" : "false"}
                      onClick={() => {
                        relacion !== "Madre"
                          ? setRelacion((prev) => {
                              return "Madre";
                            })
                          : setRelacion((prev) => {
                              return "";
                            });
                      }}
                    >
                      Madre
                    </Text>
                  </ContainerTexto>
                  <ContainerTexto>
                    <Text>Fecha fin</Text>
                    <Text></Text>
                    <Text
                      seleccionado={relacion === "Tio" ? "true" : "false"}
                      onClick={() => {
                        relacion !== "Tio"
                          ? setRelacion((prev) => {
                              return "Tio";
                            })
                          : setRelacion((prev) => {
                              return "";
                            });
                      }}
                    >
                      Tio
                    </Text>
                  </ContainerTexto>
                  <ContainerTexto>
                    <Text>
                      <InputDate
                        type="date"
                        value={fechaFin}
                        onChange={(e) => {
                          setFechaFin(e.target.value);
                        }}
                      />
                    </Text>
                    <Text></Text>
                    <Text
                      seleccionado={relacion === "Tia" ? "true" : "false"}
                      onClick={() => {
                        relacion !== "Tia"
                          ? setRelacion((prev) => {
                              return "Tia";
                            })
                          : setRelacion((prev) => {
                              return "";
                            });
                      }}
                    >
                      Tia
                    </Text>
                  </ContainerTexto>
                  <ContainerTexto>
                    <Text></Text>
                    <Text></Text>
                    <Text
                      seleccionado={relacion === "Abuelo" ? "true" : "false"}
                      onClick={() => {
                        relacion !== "Abuelo"
                          ? setRelacion((prev) => {
                              return "Abuelo";
                            })
                          : setRelacion((prev) => {
                              return "";
                            });
                      }}
                    >
                      Abuelo
                    </Text>
                  </ContainerTexto>
                  <ContainerTexto>
                    <Text></Text>
                    <Text></Text>
                    <Text
                      seleccionado={relacion === "Abuela" ? "true" : "false"}
                      onClick={() => {
                        relacion !== "Abuela"
                          ? setRelacion((prev) => {
                              return "Abuela";
                            })
                          : setRelacion((prev) => {
                              return "";
                            });
                      }}
                    >
                      Abuela
                    </Text>
                  </ContainerTexto>
                  <ContainerTexto>
                    <Text></Text>
                    <Text></Text>
                    <Text
                      seleccionado={
                        relacion === "Tutor legal" ? "true" : "false"
                      }
                      onClick={() => {
                        relacion !== "Tutor legal"
                          ? setRelacion((prev) => {
                              return "Tutor legal";
                            })
                          : setRelacion((prev) => {
                              return "";
                            });
                      }}
                    >
                      Tutor legal
                    </Text>
                  </ContainerTexto>
                  <ContainerTexto>
                    <Text></Text>
                    <Text></Text>
                    <Text
                      seleccionado={relacion === "No tiene" ? "true" : "false"}
                      onClick={() => {
                        relacion !== "No tiene"
                          ? setRelacion((prev) => {
                              return "No tiene";
                            })
                          : setRelacion((prev) => {
                              return "";
                            });
                      }}
                    >
                      No tiene
                    </Text>
                  </ContainerTexto>
                </ContainerTabla>
              </DetalleUsuario>
            )}
            {!cumpleaño && (
              <>
                {tipo === "Estudiante" && (
                  <DetalleUsuario>
                    <ContainerTabla>
                      <ContainerTexto>
                        <Text titulo={"true"}>Fecha de nacimiento</Text>
                        <Text titulo={"true"}>Genero</Text>
                        <Text titulo={"true"}>Colegio</Text>
                      </ContainerTexto>
                      <ContainerTexto>
                        <Text>Fecha inicio</Text>
                        <Text
                          seleccionado={genero === "Hombre" ? "true" : "false"}
                          onClick={() => {
                            genero !== "Hombre"
                              ? setGenero((prevGenero) => {
                                  return "Hombre";
                                })
                              : setGenero((prevGenero) => {
                                  return "";
                                });
                          }}
                        >
                          Hombre
                        </Text>
                        <Text
                          seleccionado={colegio === "Fiscal" ? "true" : "false"}
                          onClick={() => {
                            colegio !== "Fiscal"
                              ? setColegio((prev) => {
                                  return "Fiscal";
                                })
                              : setColegio((prev) => {
                                  return "";
                                });
                          }}
                        >
                          Fiscal
                        </Text>
                      </ContainerTexto>
                      <ContainerTexto>
                        <Text>
                          <InputDate
                            type="date"
                            value={fechaIni}
                            onChange={(e) => {
                              setFechaIni(e.target.value);
                            }}
                          />
                        </Text>
                        <Text
                          seleccionado={genero === "Mujer" ? "true" : "false"}
                          onClick={() => {
                            genero !== "Mujer"
                              ? setGenero((prevGenero) => {
                                  return "Mujer";
                                })
                              : setGenero((prevGenero) => {
                                  return "";
                                });
                          }}
                        >
                          Mujer
                        </Text>
                        <Text
                          seleccionado={
                            colegio === "Particular" ? "true" : "false"
                          }
                          onClick={() => {
                            colegio !== "Particular"
                              ? setColegio((prev) => {
                                  return "Particular";
                                })
                              : setColegio((prev) => {
                                  return "";
                                });
                          }}
                        >
                          Particular
                        </Text>
                      </ContainerTexto>
                      <ContainerTexto>
                        <Text>Fecha fin</Text>
                        <Text></Text>
                        <Text
                          seleccionado={
                            colegio === "Convenio" ? "true" : "false"
                          }
                          onClick={() => {
                            colegio !== "Convenio"
                              ? setColegio((prev) => {
                                  return "Convenio";
                                })
                              : setColegio((prev) => {
                                  return "";
                                });
                          }}
                        >
                          Convenio
                        </Text>
                      </ContainerTexto>
                      <ContainerTexto>
                        <Text>
                          <InputDate
                            type="date"
                            value={fechaFin}
                            onChange={(e) => {
                              setFechaFin(e.target.value);
                            }}
                          />
                        </Text>
                        <Text></Text>
                        <Text></Text>
                      </ContainerTexto>
                    </ContainerTabla>
                  </DetalleUsuario>
                )}
              </>
            )}
            {cumpleaño && (
              <DetalleUsuario>
                <DateRangePicker
                  ranges={[datosFecha]}
                  onChange={handleSelect}
                />
              </DetalleUsuario>
            )}
          </ContenedorModal>
        </Overlay>
      )}
    </>
  );
}
