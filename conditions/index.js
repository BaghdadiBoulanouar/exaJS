/**
 * Exercice 1
 */
    var age = 28;

    if(age <= 17){
        alert("Vous ne pouvez pas entrez vous n’êtes pas majeur vous avez " + age + " ans")
    }
    else if(age >= 18 && age < 42){
        alert("Vous pouvez entrer vous êtes majeur vous avez " + age + " ans")
    }
    else{
        alert("Vous pouvez entrer vous êtes le PATRON ! Vous avez " + age + " ans")
    }
/**
 * Exercice 2
 */
    var rand = Math.floor(Math.random() * (30));
    if(rand >= 0 && rand <=10){
        console.log("Cool");
        console.log(rand);
    }
    else if(rand >= 11 && rand <=20){
        console.log("Tepid");
        console.log(rand);
    }
    else if(rand >= 21 && rand <=30){
        console.log("Warm");
        console.log(rand);
    }
/**
 * Exercice 3
 */

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    console.log(today);
/**
 * Exercice 4
 */
    var person = prompt("Type Go for to start the history ? ", "Go");
     if(person == "Go"){
        var choise = prompt("Le petit chaperon rouge va livrer des fraises pour sa grand-mère. Arrivant devant la porte, elle entend des bruits bizzares. Doit-elle ouvrir ? (Type: Oui, Non ou Fuite)");
           if(choise == "Oui"){
               alert("Ah merde elle s'est fait mangé")
           }
           if(choise == "Non"){
               alert("Elle a rien mais sa grand mère s'est fait mangé")
           }
           if(choise == "Fuite"){
               alert("La fiotte.. La grande réponse sur la vie, l’univers et le reste !")
           }
     }
/**
 * Exercice 5
 */
    //??????????????
 
/**
 * Exercice 6
 */

var too = foo != undefined ? foo : ‘foo';