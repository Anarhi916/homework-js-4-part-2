var button1 = document.querySelector('.button1');
var button2 = document.querySelector('.button2');
var button3 = document.querySelector('.button3');
var button4 = document.querySelector('.button4');
var button5 = document.querySelector('.button5');
var button6 = document.querySelector('.button6');
var inp1 = document.querySelector('.inp1');
var inp2 = document.querySelector('.inp2');
var inp3 = document.querySelector('.inp3');
var inp4 = document.querySelector('.inp4');
var inp5 = document.querySelector('.inp5');
var inp6 = document.querySelector('.inp6');
var inp7 = document.querySelector('.inp7');

// Задача 5
button1.addEventListener('click', getExponent);
function getExponent(){
   let number = Math.pow(inp1.value, inp2.value);
   alert(number);
}

// Задача 6

button2.addEventListener('click', tegUnderline);

function tegUnderline(){    
    let element = document.querySelectorAll(inp3.value);
    Array.from(element, x => x.style.textDecoration='underline');
}

// Задача 7

button3.addEventListener('click', howOld);

function howOld(){    
    if(inp4.value > 16 ){
        alert('Добро пожаловать');
    }
    else{
        alert('Вы еще молоды');
    }
}

// Задача 8

button4.addEventListener('click', howOld2);

function howOld2(){   
    if(inp5.value == '' || inp5.value == undefined){
        return alert('Введите возраст');
    }
    if(inp5.value > 16 ){
        alert('Добро пожаловать');
    }
    else if(inp5.value < 17){
        alert('Вы еще молоды');
    }
}


// Задача 9

function arrayLength(array){
    if(array == null){
        console.log('error');
    }
    else{
    return console.log(array.length);
    }
}

// Задача 10

button5.addEventListener('click', numbers);

function numbers(){   
    if(inp6.value > 10){
        return alert(Math.pow(inp6.value, 2));
    }
    if(inp6.value < 7 ){
        return alert('Число меньше 7');
    }
    if(inp6.value == 8 ){
        return alert('7');
    }
    if(inp6.value == 9 ){
        return alert('8');
    }    
}

// Задача 11
var randomNumber = Math.floor(Math.random()*11);
var guesses = 0;

button6.addEventListener('click', guessNumber);

function guessNumber(){    
    if(guesses > 2){
        return alert('У Вас закончились попытки!');
    }
    guesses = guesses + 1;
    if(inp7.value > randomNumber){
         alert('меньше!');
    }
    else if(inp7.value < randomNumber){
         alert('больше!');
    }
    else if(inp7.value == randomNumber){
         alert('Угадали! Количество попыток ' + guesses);
    }
        
}