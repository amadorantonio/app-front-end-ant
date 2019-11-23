export interface ProductModel { //El export para que se pueda usar desde cualquier cosa, interface: tipos complejos (cómo clase)
    codigo?: string;
    descripcion?: string;
    categoria?: string;
    proveedor?: string;
    provDescr?: string;
    precio?: number;
}