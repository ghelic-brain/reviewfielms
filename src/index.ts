import Plan from "./clases/plan.js"
import Plataforma from "./clases/plataforma.js"


(()=>{
    const plan1= new Plan("Basico",30000)
    const plan2 = new Plan("Premium",59000);

    const plataforma1 = new Plataforma("Netflix","www.netflix.org",[plan1,plan2])
    
    const newserie = plataforma1.createSerie("imagen betty","Betty la Fea",["comedia","drama"],[],[],[],[]);
    plataforma1.series[0].createActor("ana maria orozca","foto ana maria","descripcion de ana maria",[]);
    plataforma1.series[0].createDirector("Fernando Gaitán Salom","foto Fernando Gaitán ","descripcion de Fernando Gaitán Salom",[]);
    plataforma1.series[0].createEpisodio("episodio 1","primer capitulo",30);
    console.log(newserie)
})()