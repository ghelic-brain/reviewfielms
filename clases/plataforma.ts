import Plan from "./plan";

export default class Plataforma{
    public nombre:string;
    public sitioWeb:string;
    public planesDeCompra:Array<Plan>
    constructor(nombre:string,sitioWeb:string,planes:Array<Plan>){
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.planesDeCompra=planes;
    }

}