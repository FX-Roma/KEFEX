import express from 'express'; // realizamos la conexion con el puerto
import morgan from 'morgan'; //se encarga de moniterear las solicitudes http en vivo
import path from 'path';
import cors from 'cors';

const servidorKefex = express(); 
servidorKefex.use(morgan("dev"));
servidorKefex.use(express.json()); //usar json
servidorKefex.get('/',(sol,req)=>{
    req.status(404).sennd("no encontrado");
});

export default servidorKefex;
