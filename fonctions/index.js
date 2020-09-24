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
* myPutStr
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
