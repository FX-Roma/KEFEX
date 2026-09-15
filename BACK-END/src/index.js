import "dotenv/config";
import "./connection.js";

import servidorKefex from "./server.js";

servidorKefex.listen(3005, ()=>{
    console.log("Kefex Conectado a http://localhost:3005");
});