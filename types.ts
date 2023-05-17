/*types*/
export type typeEpisodio = {
    nombre:string
    resumen:string
    duracion:number
}
export type typeSerie = {
    imagen: string
    nombre: string
    categorias: Array<string>
    directores: Array<typeActor>
    actores: Array<typeActor>
    episodios: Array<typeEpisodio>
    plataformas: Array<typePlataforma>
}
export type typeActor = {
    nombre: string
    fotografia: string
    descripcion: string
    seriesTrabajadas: Array<typeSerie>
}
export type typeDirector = {
    nombre: string
    fotografia: string
    descripcion: string
    seriesDirigidas: Array<typeSerie>
}
export type typePlataforma = {
    nombre: String
    sitioWeb: String
    planesDeCompra: Array<typePlan>
}
export type typePlan = {
    nombre:string
    precio:number
}