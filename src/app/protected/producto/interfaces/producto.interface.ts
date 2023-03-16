/* 
export interface ProductorResponse {
    ok?:             boolean;
    totalProductos?: number;
    productos?:      Producto[];
}

export interface Producto {
    proveedor?:   string;
    stock?:       number;
    costo?:       number;
    _id?:         string;
    nombre?:      string;
    //usuario?:     Usuario;
    precio?:      number;
    categoria?:   Categoria;
    descripcion?: string;
    disponible?:  boolean;
}

export interface Categoria {
    _id?:    string;
    nombre?: string;
}

export interface Usuario {
    _id?:    string;
    nombre?: string;
} */

export interface getProductoResponse {
    ok : boolean;
    producto : Producto;
}

export interface ProductoResponse {
    ok?:             boolean;
    totalProductos?: number;
    productos?:      Producto[];
}

export interface Producto {
    proveedor?:   string;
    stock:       number;
    costo?:       number;
    _id?:         string;
    nombre:      string;
    estado?:      boolean;
    usuario?:     Categoria;
    precio?:      number;
    categoria?:   Categoria;
    descripcion?: string;
    disponible?:  boolean;
}

export interface Categoria {
    _id?:    string;
    nombre?: string;
}
