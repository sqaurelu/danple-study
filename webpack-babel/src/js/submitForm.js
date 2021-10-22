import { cardElement } from '../templates/cardTemplate';

export default function submitForm(event) {
    event.preventDefault();

    const title = document.getElementById('title');
    const content = document.getElementById('content');

    if (title.value === '' || content.value === '') {
        alert('입력창을 모두 채워주세요');
        return;
    }

    const replacedElement = document.createElement('div');

    let card = cardElement.toString().replace('{{__title__}}', title.value);
    card = card.toString().replace('{{__content__}}', content.value);

    replacedElement.innerHTML = card;

    document.getElementById('card-container').appendChild(replacedElement);

    title.value = '';
    content.value = '';
}
