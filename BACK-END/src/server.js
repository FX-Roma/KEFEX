import express from 'express'; // realizamos la conexion con el puerto
import morgan from 'morgan'; //se encarga de moniterear las solicitudes http en vivo
import path from 'path';
import cors from 'cors';

const servidorKefex = express(); 
servidorKefex.use(morgan("dev"));
servidorKefex.use(express.json()); //usar json

//Importacion de rutas
// import productoRoutes from './routes/producto.routes.js';
// import opinionRoutes from './routes/opinion.routes.js';
// import usuarioRoutes from './routes/usuario.routes.js';

servidorKefex.get('/',(req,res)=>{
    res.status(404).sennd("no encontrado");
});

export default servidorKefex;
