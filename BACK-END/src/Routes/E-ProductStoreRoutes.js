import { Router } from "express";
import { 
    crearProducto, 
    obtenerProductos, 
    obtenerProductoPorId, 
    actualizarProducto, 
    eliminarProducto 
} from "../controllers/producto.controller.js";

const router = Router();

router.post("/", crearProducto);             // POST /api/productos
router.get("/", obtenerProductos);           // GET /api/productos
router.get("/:id", obtenerProductoPorId);     // GET /api/productos/:id
router.put("/:id", actualizarProducto);       // PUT /api/productos/:id
router.delete("/:id", eliminarProducto);    // DELETE /api/productos/:id

export default router;