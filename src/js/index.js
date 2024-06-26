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

const formElement = document.getElementById('form')
const inputs = document.querySelectorAll('input')
const nameElement = document.getElementById('card-name')


const checkForm = event =>{
  event.preventDefault();
  
  for (const input of inputs){
    input.classList.remove('error')
    
    if(!input.value){
      input.classList.add('error')
    }else{
      input.classList.remove('error')
    }
  }

}

formElement.addEventListener('submit', checkForm)

const writeDatainCard = () =>{
  let data = []
  for (const input of inputs){
    data += input.value 
    
  }

  nameElement.textContent = data[0]

}

