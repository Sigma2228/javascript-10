const button = document.getElementById('button')
button.addEventListener('click', () => {
    alert('Hello World!');
});
const randomaizer = Math.floor(Math.random() * 100) + 1;
const checkButton = document.getElementById('checkButton').addEventListener('click', function(){
    const inputUser = Number(document.getElementById('inputUser').value);
const resultMessage = document.getElementById('resultMessage');
if(isNaN(inputUser) || inputUser > 100 || inputUser < 1) {
    alert('введіть число від 1 до 100!!!')
}
if(randomaizer === inputUser) {
    resultMessage.textContent  = 'Ви вгадали число'
}
else {
    resultMessage.textContent = `Ви не вгадали число ${randomaizer}`
}
})