/**
* myPutStr
* @param{number}value
* @return
*/

/*
* Exercice 1
*/
var myPutStr = function myPutStr(value){
    if(typeof value === "string"){
        return "c'est un texte";
    }
    if(typeof value === "number"){
        return "et pourquoi pas 42 ?";
    }
}

myPutStr("txt");

/**
* computeSurfaceM2
* @param{number}longueur
* @param{number}largeur
* @return
*/

/*
* Exercice 2
*/
var computeSurfaceM2 = function computeSurfaceM2(longueur, largeur){
    return longueur*largeur;
}

computeSurfaceM2(50, 2);

/*
* Exercice 3
*/

var detectMyAgeByNight = function detectMyAgeByNight(){
    
}

/*
* Exercice 5
*/

/**
* clock
* @param{number}time
* @return
*/

var clock = function clock(){
    var today = new Date();
    var actualTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    console.log(actualTime);
}

window.setInterval(function(){
  clock();
}, 1000);
