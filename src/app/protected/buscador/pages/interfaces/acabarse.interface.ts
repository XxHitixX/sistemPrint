import { Producto } from "src/app/protected/producto/interfaces/producto.interface";


export interface AcabarseResponse { 
    ok: Boolean,
    productos: Producto[];
}