import Serie from "./serie.js";

export default class Director{
    public nombre:string;
    public fotografia:string;
    public descripcion:string;
    public seriesDirigidas:Array<Serie>
    constructor(nombre:string,fotografia:string,descripcion:string,series:Array<Serie>){
        this.nombre = nombre;
        this.fotografia = fotografia;
        this.descripcion=descripcion;
        this.seriesDirigidas=series
    }
}