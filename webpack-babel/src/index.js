import renderRootContainer from './js/renderRootContainer';
import submitForm from './js/submitForm';

document.body.appendChild(renderRootContainer());

const form = document.getElementById('form');
form.addEventListener('submit', submitForm);
