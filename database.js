"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.directores = exports.actores = exports.episodios = exports.series = void 0;
var actor_1 = require("./clases/actor");
var director_1 = require("./clases/director");
var episodio_1 = require("./clases/episodio");
var plan_1 = require("./clases/plan");
var plataforma_1 = require("./clases/plataforma");
var serie_1 = require("./clases/serie");
function plataformas() {
    return {
        "netflix": new plataforma_1.default("netflix", "www.netflix.com", [
            new plan_1.default("sencillo", 21000),
            new plan_1.default("economico", 41000),
            new plan_1.default("familiar", 71000)
        ]),
        "hbo": new plataforma_1.default("hbo", "www.hbo.com", [
            new plan_1.default("sencillo", 18000),
            new plan_1.default("economico", 36000),
            new plan_1.default("familiar", 60000)
        ]),
        "fox channel": new plataforma_1.default("fox channel", "www.foxchannel.com", [
            new plan_1.default("sencillo", 28000),
            new plan_1.default("economico", 56000),
            new plan_1.default("familiar", 90000)
        ])
    };
}
function series() {
    return {
        "Ben 10": new serie_1.default("image_url", "Ben 10", ["animacion", "accion", "ficcion"], [directores()["guillermo del toro"]], [actores()["juaquin feniz"]], episodios(12), [plataformas()["netflix"]]),
        "Dragon Ball Z": new serie_1.default("image_url2", "Dragon Ball Z", ["anime", "accion", "ficcion"], [directores()["guillermo del toro"]], [actores()["goku"]], episodios(22), [plataformas()["fox channel"], plataformas()["netflix"]]),
        "La Familia Peluche": new serie_1.default("image_url3", "La Familia Peluche", ["comedia", "suspenso", "telenovela"], [directores()["guillermo del toro"]], [
            actores()["juan carlos"],
            actores()["eduardo salazar"]
        ], episodios(100), [plataformas()["hbo"]]),
    };
}
exports.series = series;
function episodios(cant) {
    var episodios = [];
    for (var i = 0; i > cant; i++) {
        episodios.push(new episodio_1.default("capitulo ".concat(cant), "resumen random", Math.floor(Math.random() * 100)));
    }
    return episodios;
}
exports.episodios = episodios;
function actores() {
    return {
        "juan carlos": new actor_1.default("juan carlos", "link foto", "actor de metodo", [series()["La Familia Peluche"]]),
        "eduardo salazar": new actor_1.default("eduardo salazar", "link foto2", "actor de reparto", [series()["La Familia Peluche"]]),
        "juaquin feniz": new actor_1.default("juaquin feniz", "link foto3", "actor de doblaje", [series()["Ben 10"]]),
        "goku": new actor_1.default("goku", "link foto4", "personaje", [series()["Dragon Ball Z"]])
    };
}
exports.actores = actores;
function directores() {
    return {
        "guillermo del toro": new director_1.default("guillermo del toro", "link foto", "actor de metodo", [
            series()["La Familia Peluche"],
            series()["Dragon Ball Z"],
            series()["Ben 10"]
        ])
    };
}
exports.directores = directores;
