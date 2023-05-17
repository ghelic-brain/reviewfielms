import Actor from "./actor";
import Plan from "./plan";

export default class Episodio{
    public nombre:string;
    public resumen:string;
    public duracion:number;
    constructor(nombre:string,resumen:string,duracion:number){
        this.nombre = nombre;
        this.resumen = resumen;
        this.duracion=duracion;
    }
}