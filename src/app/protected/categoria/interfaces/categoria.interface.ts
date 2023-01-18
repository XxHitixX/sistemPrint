export interface Categoria{
    _id  :  string,
    nombre :  string
}

export interface CategoriaResponse{
    ok ?: boolean,
    msg ?: string,
    categorias : Categoria[]
}