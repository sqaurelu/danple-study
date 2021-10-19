import './style.css';

function component() {
    const element = document.createElement('div');

    element.innerHTML = 'Hello Worlddsfdsfs';

    return element;
}

document.body.appendChild(component());
