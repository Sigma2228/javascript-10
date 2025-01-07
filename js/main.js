const button = document.getElementById('button')
button.addEventListener('click', () => {
    alert('Hello World!');
});


const randomaizer = Math.floor(Math.random() * 100) + 1;
const checkButton = document.getElementById('checkButton').addEventListener('click', function () {
    const inputUser = Number(document.getElementById('inputUser').value);
    const resultMessage = document.getElementById('resultMessage');
    if (isNaN(inputUser) || inputUser > 100 || inputUser < 1) {
        alert('введіть число від 1 до 100!!!')
    }
    if (randomaizer === inputUser) {
        resultMessage.textContent = 'Ви вгадали число'
    }
    else {
        resultMessage.textContent = `Ви не вгадали число ${randomaizer}`
    }
})

// я не знаю як робити третє завдання, поясніть на менторській будь ласка

const callbackArray = (numbers, callback) => {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        result.push(callback(numbers[i]));
    }
    return result;
}
const doubleValue = (value) => value * 2
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = callbackArray(numbers, doubleValue);
console.log('Результат:', doubledNumbers);


const calculateDiscountedPrice = (price, discount, callback) => {
    const discountAmount = price * (discount / 100);
    const discountPrice = price - discountAmount;
    callback(discountPrice);
}
const showDiscountedPrice = (price) => {
    console.log(`Дисконтна ціна = ${price}`)
}
calculateDiscountedPrice(100, 10, showDiscountedPrice)
