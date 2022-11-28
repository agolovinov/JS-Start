const link = document.querySelector('#text');
link.addEventListener('click', function(event) {
    let newlink = prompt('Введите новый текст для ссылки');
    link.textContent = newlink;
    event.preventDefault();
})