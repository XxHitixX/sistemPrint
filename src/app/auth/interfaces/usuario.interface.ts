export interface Usuario {
    nombre: string;
    correo: string;
    password: string;
    estado?: boolean;
    google?: boolean;
    uid?:    string;
}

export interface AuthResponse {
    ok: boolean;
    correo ?: string;
    usuario ?: Usuario;
    uid ?: string;
    token ?: string;
    msg ?: string;
}
