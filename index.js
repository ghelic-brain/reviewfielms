"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var database_1 = require("./database");
window.onload = function () {
    console.group("series");
    console.log((0, database_1.series)());
    console.groupEnd();
    console.group("episodios");
    console.log((0, database_1.episodios)(2));
    console.groupEnd();
    console.group("actores");
    console.log((0, database_1.actores)());
    console.groupEnd();
    console.group("directores");
    console.log((0, database_1.directores)());
    console.groupEnd();
};
