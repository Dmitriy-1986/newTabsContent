'use strict';

//Блок в котором все кнопки для табов
const btnOperations = document.querySelector('.btn-operations');
//Получение всех кнопок для табов
const  operationTab = document.querySelectorAll('.operation-tab');
//Блок в котором находиться весь контент
const operationsContent = document.querySelector('.operations-contents');
//Получение контента
const operationContent = document.querySelectorAll('.operation-content');

btnOperations.addEventListener('click', function(e) {
    //Определяем какая из кнопок была кликнута 
    //Получаем ближайший элемент и сам элемент из цепочки наследования closest('.operation-tab')
    const btnClicked = e.target.closest('.operation-tab');

    //Пункт охраны
    if(!btnClicked) return;

    //Активная вкладка
    operationTab.forEach((btnTab) => {
        btnTab.classList.remove('btn-active');
        btnClicked.classList.add('btn-active');

        //Активный контент
        operationContent.forEach((content) => {
            content.classList.remove('content-active');
            document.querySelector(`.operations-content-${btnClicked.dataset.tab}`).classList.add('content-active');
        })
    });
});















