import Actor from "./actor.js";
import Director from "./director.js";
import Episodio from "./episodio.js";
import Plataforma from "./plataforma.js";

export default class Serie{
    public imagen:string;
    public nombre:string;
    public categorias:Array<string>;
    public directores:Array<Director>;
    public actores:Array<Actor>;
    public episodios:Array<Episodio>
    public plataformas:Array<Plataforma>
    constructor(
        imagen:string,
        nombre:string,
        categorias:Array<string>,
        directores:Array<Director>,
        actores:Array<Actor>,
        episodios:Array<Episodio>,
        plataformas:Array<Plataforma>
    ){    
        this.imagen = imagen;
        this.nombre = nombre;
        this.categorias=categorias;
        this.directores = directores;
        this.actores = actores;
        this.episodios = episodios;
        this.plataformas = plataformas;
    }    

    public getActores(){
        console.group("actores")
            console.log(this.actores)
        console.groupEnd()
    } 
    public getActor(nombre:string){
        console.group("actor")
            console.log(this.actores.find(a=>a.nombre === nombre))
        console.groupEnd()
    }
 
    public getDirector(nombre:string){
        console.group("director")
            console.log(this.actores.find(d=>d.nombre === nombre))
        console.groupEnd()
    }

    public getDirectores(){
        console.group("directores")
            console.log(this.directores)
        console.groupEnd()
    }

    public getCategorias(){
        console.group("categorias")
            console.log(this.categorias)
        console.groupEnd()
    }

    public getPlataformas(){
        console.group("plataformas")
            console.log(this.plataformas)
        console.groupEnd()
    }

    
    public getPlataforma(nombre:string){
        console.group("plataforma")
            console.log(this.plataformas.find(p=>p.nombre === nombre))
        console.groupEnd()
    }

    public setCategoria(categoria:string){
        this.categorias.push(categoria)
    }

    public createActor(nombre:string,fotografia:string,descripcion:string,series:Array<Serie>):Actor{
        series.push(this);
        console.log(this,series)
        const actor = new Actor(nombre,fotografia,descripcion,series);
        this.actores.push(actor);
        return actor
    }

    public addActor(actor:Actor){
        this.actores.push(actor);
    }
    
    public createDirector(nombre:string,fotografia:string,descripcion:string,series:Array<Serie>):Director{
        series.push(this);
        console.log(this,series)
        const director = new Director(nombre,fotografia,descripcion,series);
        this.directores.push(director);
        return director
    }
    
    public addDirector(director:Director){
        this.directores.push(director);
    }

    public createEpisodio(nombre:string,resumen:string,duracion:number):Episodio{
        const episodio = new Episodio(nombre,resumen,duracion);
        this.episodios.push(episodio)
        return episodio
    }
}