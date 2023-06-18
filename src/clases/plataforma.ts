import Actor from "./actor.js";
import Director from "./director.js";
import Episodio from "./episodio.js";
import Plan from "./plan.js";
import Serie from "./serie.js";

export default class Plataforma{
    public nombre:string;
    public sitioWeb:string;
    public planesDeCompra:Array<Plan>
    public series:Array<Serie>
    constructor(nombre:string,sitioWeb:string,planes:Array<Plan>){
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.planesDeCompra=planes;
        this.series=[]
    }

    setSerie(serie:Serie){
        this.series.push(serie);
    }

    getSeries(){
        console.log(this.series);
    }
    getSerie(nom:string){
        console.log(this.series.find((s)=>{
            s.nombre = nom
        }))
    }

    createSerie(imagen:string,nombre:string,categorias:Array<string>,directores:Array<Director>,actores:Array<Actor>,episodios:Array<Episodio>,plataformas:Array<Plataforma>):Serie{
        plataformas.push(this);
        console.log(this,plataformas)
        const serie = new Serie(imagen,nombre,categorias,directores,actores,episodios,plataformas)
        this.series.push(serie)
        return serie
    }


}