'use strict'
// Напишите маленькое приложение **`Timer`**:

// + Создайте папку `Timer`
// + Создайте базовую структуру проекта из трех файлов `html`, `css`, `js`
// + Функциональность приложения: 
//     + Клавиша `start` - для запуска таймера
//     + Клавиша `stop` - для остановки таймера
//     + Циферблат с текущим временем в формате `XX sec`

// > Примечания:

// + Таймер измеряет время только в секундах
// + После остановки таймера, если снова нажать клавишу `start` таймер запуститься с текущего результата, а не с начала.



let start = document.querySelector('#start');
let finish = document.querySelector('#finish');
let timerShow = document.querySelector('#timer');

let timer;
let i =0;

  //запускаем таймер
start.addEventListener('click',function() {
        clearInterval(timer); // вот тут добавляем очистку
        timer = setInterval(function() { 
                timerShow.innerHTML =  ++i;
        }, 1000);
})

 //останавливаем таймер
finish.addEventListener('click', function() {
        clearInterval(timer)
    
})