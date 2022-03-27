var name = "Sergio";

function loadData(){
    let total = 9;
    console.log("Getting data from server");
    total += 10;
}

function sayHello(name, last) {
    console.log("Hello " + name + " " + last);
}

function sayHello10Times() {
    for(let i = 0; i < 10; i++){
        if (i != 7){
            console.log("Hello");
        }
    }
}

function printSomeNumbers (){
    for(let i = 0; i < 21; i++){
    console.log(i);
    }
}

function sumAll(list){
    console.log("--- SUM ALL ---");

    let total = 0;
    for (let i = 0; i < list.length; i++){
        let num = list[i];
        total = total + num;        
    }

    console.log("Result", total);
}

function findOldest(list){
    let solution = list[0];

    for(let i = 0; i < list.length; i++){
        let num = list[i];
        if (num > solution){
            solution = num;
        }
    }

   console.log("The oldest person is ...", solution); 
}

function countLowerThan(pivot, list){
    let count = 0;
    for(let i=0; i<list.length; i++){
        let num = list[i];
        if (num < pivot){
            count += 1;
        }
    }

    console.log("There are", count, "nums lower than", pivot);
}

function init(){
    console.log("Page loaded");

    loadData();

    var last = "Doe";
    var person = "John";
    sayHello(person, last);

    sayHello("Maria");

    var x = "x";
    let y = "y";
    const z = "z";
    
    sayHello10Times();
    printSomeNumbers();

    let ages = [12,43,12,87,34,67,40,24,89,38, 623,20,5,24,13,84,22,55];
    sumAll(ages);

    findOldest(ages);

    countLowerThan(25, ages);
}

window.onload = init;