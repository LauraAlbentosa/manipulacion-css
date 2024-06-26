// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const formElmente = document.getElementById('form');

const checkForm = event => {
  event.preventDefault();
};

formElmente.addEventListener('submit', checkForm);

formElmente.addEventListener('input', event => {
  console.log(event.target.value);
});
