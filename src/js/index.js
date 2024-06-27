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
const expElement = document.getElementById('card-exp');
const nameInputElement = document.getElementById('name');

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

formElement.addEventListener('submit', checkForm);

const writeDatainCard = () => {
  nameElement.textContent = inputs[0].value;
  numberElement.textContent = inputs[1].value;
  expElement.textContent = inputs[2].value + inputs[3].value;
};

nameInputElement.addEventListener('keypress', writeDatainCard);
