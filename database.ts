import Actor from "./clases/actor"
import Director from "./clases/director"
import Episodio from "./clases/episodio"
import Plan from "./clases/plan"
import Plataforma from "./clases/plataforma"
import Serie from "./clases/serie"

function plataformas():{[key:string]:Plataforma} { 
    return{
        "netflix":new Plataforma(
            "netflix",
            "www.netflix.com",
            [
                new Plan("sencillo",21000),
                new Plan("economico",41000),
                new Plan("familiar",71000)
            ]
        ),
        "hbo":new Plataforma(
            "hbo",
            "www.hbo.com",
            [
                new Plan("sencillo",18000),
                new Plan("economico",36000),
                new Plan("familiar",60000)
            ]
        ),
        "fox channel":new Plataforma(
            "fox channel",
            "www.foxchannel.com",
            [
                new Plan("sencillo",28000),
                new Plan("economico",56000),
                new Plan("familiar",90000)
            ]
        )
    }
}

function series():{[key:string]:Serie}{
    return {
        "Ben 10":new Serie(
            "image_url",
            "Ben 10",
            ["animacion","accion","ficcion"],
            [directores()["guillermo del toro"]],
            [actores()["juaquin feniz"]],
            episodios(12),
            [plataformas()["netflix"]]
        ),
        "Dragon Ball Z":new Serie(
            "image_url2",
            "Dragon Ball Z",
            ["anime","accion","ficcion"],
            [directores()["guillermo del toro"]],
            [actores()["goku"]],
            episodios(22),
            [plataformas()["fox channel"],plataformas()["netflix"]]
        ),
        "La Familia Peluche": new Serie(
            "image_url3",
            "La Familia Peluche",
            ["comedia","suspenso","telenovela"],
            [directores()["guillermo del toro"]],
            [
                actores()["juan carlos"],
                actores()["eduardo salazar"]
            ],
            episodios(100),
            [plataformas()["hbo"]]
        ), 
    }
}

function episodios(cant:number):Array<Episodio>{
    let episodios = [];
    for(let i = 0; i > cant; i++){
        episodios.push(
            new Episodio(
                `capitulo ${cant}`,
                "resumen random",
                Math.floor(Math.random()*100)
            )
        )
    }
    return episodios
}
function actores():{[key:string]:Actor}{
    return{
        "juan carlos":new Actor(
            "juan carlos",
            "link foto",
            "actor de metodo",
            [series()["La Familia Peluche"]]
        ),
        "eduardo salazar":new Actor(
            "eduardo salazar",
            "link foto2",
            "actor de reparto",
            [series()["La Familia Peluche"]]
        ),
        "juaquin feniz":new Actor(
            "juaquin feniz",
            "link foto3",
            "actor de doblaje",
            [series()["Ben 10"]]
        ),
        "goku":new Actor(
            "goku",
            "link foto4",
            "personaje",
            [series()["Dragon Ball Z"]]
        )
    }
}
function directores():{[key:string]:Director} {
    return{
        "guillermo del toro":new Director(
            "guillermo del toro",
            "link foto",
            "actor de metodo",
            [
                series()["La Familia Peluche"],
                series()["Dragon Ball Z"],
                series()["Ben 10"]
            ]
        )
    }
}


export {
    series,
    episodios,
    actores,
    directores,
}
    