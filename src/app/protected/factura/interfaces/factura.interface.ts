import { Usuario } from "src/app/auth/interfaces/usuario.interface";
import { Cliente } from "../../cliente/interfaces/cliente.interface";
import { Categoria } from "../../producto/interfaces/producto.interface";

export interface FacturaResponse {
    ok?:           boolean;
    totalFactura?: number;
    facturas?:     Factura[];
}

export interface Factura {
    _id?:      string;
    usuario?:  Usuario;
    cliente?:  Cliente;
    tipoPago?: string;
    estado?:   boolean;
    total?:    number;
    cantidad?: string;
    items:    itemProducto[];
    fecha?:    string;
}

export interface itemProducto{
    id      : string;
    cantidad: number;
}

export interface FacturaGuardar {
    _id?:      string;
    usuario?:  Usuario;
    cliente?:  String;
    tipoPago?: string;
    estado?:   boolean;
    total?:    number;
    cantidad?: string;
    items:    itemProducto[];
    fecha?:    string;
}