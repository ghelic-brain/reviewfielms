import {series,
    episodios,
    actores,
    directores} from './database'
window.onload=()=>{
    console.group("series");
    
    console.log(series())
    console.groupEnd()
    
    console.group("episodios");
    console.log(episodios(2))
    console.groupEnd()
    
    console.group("actores");
    console.log(actores())
    console.groupEnd()
    
    console.group("directores");
    console.log(directores())
    console.groupEnd()
}
