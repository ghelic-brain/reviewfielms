import Actor from "./actor";
import Director from "./director";
import Episodio from "./episodio";

import Plataforma from "./plataforma";

export default class Serie{
    public imagen:string;
    public nombre:string;
    public categoria:Array<string>;
    public directores:Array<Director>;
    public actores:Array<Actor>;
    public episodios:Array<Episodio>
    public plataforma:Array<Plataforma>
    constructor(
        imagen:string,
        nombre:string,
        categorias:Array<string>,
        directores:Array<Director>,
        actores:Array<Actor>,
        episodios:Array<Episodio>,
        plataforma:Array<Plataforma>
        ){    
            this.imagen = imagen;
            this.nombre = nombre;
            this.categoria=categorias;
            this.directores = directores;
            this.actores = actores;
            this.episodios = episodios;
            this.plataforma = plataforma;
        }    
}