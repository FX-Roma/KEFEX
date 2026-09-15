import mongoose from "mongoose";

mongoose
  .connect(process.env.KEFEX)
  .then((dato) => {
    console.log("Esta conectado a la base de datos de kefex");
  })
  .catch((error) => {
    console.log("Error de conexión:", error);
  });