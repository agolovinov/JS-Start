const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Метод для вывода сообщения в консоль веб-браузера.');
    console.log('Метод для вывода сообщения в консоль веб-браузера.');
});

const message = document.querySelector('#alert');

message.addEventListener('click', () => {
    alert('Метод для вывода сообщения пользователю в веб-браузере.');
});

const input = document.querySelector('#prompt');

input.addEventListener('click', () => {
    prompt('Метод ввода данных пользователем в веб-браузере.');
});