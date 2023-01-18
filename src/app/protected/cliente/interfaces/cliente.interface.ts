export interface ClienteResponse {
    ok:            boolean;
    totalClientes: number;
    clientes:      Cliente[];
}

export interface ClienteResponse2 {
    ok:            boolean;
    totalClientes?: number;
    msg?:            string;
    clientes?:      Cliente[];
}

export interface Cliente {
    id?:        string;
    nombre:    string;
    cedula:    string;
    telefono:  string;
    correo:    string;
    direccion: string;
}
