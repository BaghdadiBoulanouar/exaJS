/**
 * Exercice 1
 */
 var i = 1;
 var n = 1;
//tables de 1 à 3
 for(n = 1; n <= 3; n++){
     for(i = 1; i <= 10; i++){
         var result = i * n;
         console.log(n + " x " + i + " = " + result);
    }
    console.log(" ");
 }
//table de 5
 n = 5;
 for(i = 1; i <= 10; i++){
     var result = i * n;
     console.log(n + " x " + i + " = " + result);
 }
 console.log(" ");
 //table de 8
 n = 8;
 for(i = 1; i <= 10; i++){
     var result = i * n;
     console.log(n + " x " + i + " = " + result);
 }
 /**
 * Exercice 2
 */

var test=document.createElement('section');
test.setAttribute('id','test');

var ul=document.createElement('ul');


document.body.appendChild(test);
test.appendChild(ul);

for (var i=1; i<=10; i++){

    var li=document.createElement('li');
    var result = 5*i;
    ul.appendChild(li);
    li.innerHTML=li.innerHTML + i + " x 5 = " + result;

}

 /**
 * Exercice 3
 */

 i = 1;
 while(true){
     console.log("5 x " + i + " = " + 5 * i++);
       if (i === 11) {
    break;
  }
 }

  /**
 * Exercice 4
 */

 var Array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 var n = 5;

Array.forEach(function (n, index) {
	console.log(n * index);
});

  /**
 * Exercice 5
 */

var obj = {
    "name": 42, "age": 42
    };

for (var key in obj) {
    console.log(key);
    console.log(obj[key]);
}
  /**
 * Exercice 6
 */
 // Array
var nbr = [5, 4, 3, 2, 1];
console.log(nbr);
// Array reverse
var reversed = nbr.reverse();
console.log('reversed:', reversed);

  /**
 * Exercice 7
 */


var obj = {
    "name": [1, 2]
    };

for (var nameCloth in obj) {
    console.log(key);
    console.log(obj[key]);
}

  /**
 * Exercice 8
 */

var today = new Date();
var getFullYear = today.getFullYear();
//console.log(getFullYear);

for(year = 1980; year <= getFullYear; year++){
    console.log(year);
}