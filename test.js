/*function nextOne (arr, elem) {
    arr.push(elem);
    return arr.shift();
}

var myArray = [1, 2, 3, 4, 5];


console.log('Before:' + JSON.stringify(myArray));  //utilizamos el stringify para convertir el array en una cadena de caracteres en un formato específico


console.log(nextOne(myArray, 6));


console.log('After:' + JSON.stringify(myArray));




function IMCcheck(IMC) {
    if (IMC < 18.5) {
        console.log('Light Weight');
    } else if (IMC < 24.9) {
        console.log('Normal Weight');
    } else if (IMC < 29.9) {
        console.log('Some Weight')
    } else {
        console.log('Fucking Obese')
    }
}

IMCcheck(35);*/




/* var myPlants = [
    {
        type: 'flowers',
        list: [
            'roses',
            'margaritas',
            'white roses'
        ]
    },
    {
        type: 'trees',
        list: [
            'willow tree',
            'coconut tree',
            'palm tree'
        ]
    }
]


var firstFlower = myPlants[0].list[2]; //Se empieza con el primer nombre de la variable principal, el número de objeto con el corchete y despues se accede a la propiedad que querasmos y su correspondiente posición para compl

console.log(firstFlower); */

/* var myArray = [];
var i = 0;

while(i <= 8) {
    myArray.push(i);
    i++;
}

console.log(myArray);


var myArraySecond = [];

for(var i = 0; i < myArraySecond.length; i++){
    myArraySecond.push(i);
}

console.log(myArraySecond);


var myArrayThird = [4, 6, 8, 2];
var total = 0;

for (var i = 0; i< myArrayThird.length; i++){
    console.log('Iteration ' + i);
    console.log(myArrayThird[i]);
    total += myArrayThird[i];
}

console.log(total); */


/*var languages = ['Javascript', 'Python', 'Java', 'C++','Javascript', 'Python', 'Java', 'C++','Javascript', 'Python', 'Java', 'C++','Javascript', 'Python', 'Java', 'C++'];

for (i = 0; i < languages.length; i++) {
    console.log(languages[i].toUpperCase());
}*/


var myArray = [[1, 2, 3, [120, 121, 122]],[4, 5, 6, [120, 121, 122]],[7, 8, 9, [120, 121, 122]],[10, 11, 12, [120, 121, 122]],[13, 14, 15, [120, 121, 122]],[16, 17, 18,[120, 121, 122]]];


for (var i = 0; i < myArray.length; i++) {
    var nestedArray = myArray[i];
    console.log('Array: ' + nestedArray);

    for (var j = 0; j < nestedArray.length; j++) {
        var nestedArraySecond = nestedArray[j];
        console.log(nestedArray[j]);

        for (var k = 0; k < nestedArraySecond.length; k++) {
            console.log('>>> ' + nestedArraySecond[k]);
        }
    }
}

