let inputText = document.querySelector('#input_text');
let duplicateField = document.querySelector('#duplicateField');
let btn = document.querySelector('#btn');

inputText.addEventListener('input', (event) => {
    duplicateField.textContent = event.target.value;
})

btn.addEventListener('click', (event) => {
    console.log(duplicateField.textContent);
    document.querySelector('#input_text').value = "";
    duplicateField.textContent = event.target.value;
    event.preventDefault;
})