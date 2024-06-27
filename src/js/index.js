// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

/*

const formElmente = document.getElementById('form');

const checkForm = event => {
  event.preventDefault();
};

formElmente.addEventListener('submit', checkForm);

formElmente.addEventListener('input', event => {
  console.log(event.target.value);
});

*/

const formElement = document.getElementById('form');
const inputs = document.querySelectorAll('input[type=text]');
const spanError = document.querySelectorAll('div > span');
const nameElement = document.getElementById('card-name');
const numberElement = document.getElementById('card-number');
const expMonthElement = document.getElementById('card-exp-mm');
const expYearElement = document.getElementById('card-exp-yy');
const cvcElement = document.getElementById('card-cvc')


const checkForm = event => {
  event.preventDefault();

  inputs.forEach(input => {
    input.classList.remove('error');

    if (input.value === '') {
      input.classList.add('error');
      input.nextElementSibling.textContent = 'Can´t be blank';
    } else {
      input.classList.remove('error');
      input.nextElementSibling.textContent = '';
    }
  });
};

const writeNameinCard = () => {
  nameElement.textContent = inputs[0].value;
};

const writeNumberinCard = () => {
  numberElement.textContent = '';
  let count = 0;

  for (const number of inputs[1].value) {
    count++;
    numberElement.textContent += number;
    if (count === 4) {
      numberElement.textContent += ' ';
      count = 0;
    }
  }
};

const writeMonthinCard = () => {
  expMonthElement.textContent = inputs[2].value +'/';

  if(inputs[2].value > 12) {
    expMonthElement.textContent = '12 / '
  }
};

const writeYearinCard = () => {
  expYearElement.textContent = inputs[3].value;
};

const writeCVCinCard =() =>{
  cvcElement.textContent = inputs[4].value;
}

formElement.addEventListener('submit', checkForm);
inputs[0].addEventListener('input', writeNameinCard);
inputs[1].addEventListener('input', writeNumberinCard);
inputs[2].addEventListener('input', writeMonthinCard);
inputs[3].addEventListener('input', writeYearinCard);
inputs[4].addEventListener('input', writeCVCinCard)
