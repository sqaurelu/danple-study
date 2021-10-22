import { cardContainerTemplate } from '../templates/cardContainerTemplate';
import { formElement } from '../templates/formTemplate';

export default function renderRootContainer() {
    const element = document.createElement('div');
    element.id = 'container';
    element.className =
        'w-full h-full flex flex-col bg-blue-50 overflow-y-auto';

    element.innerHTML = formElement + cardContainerTemplate;

    return element;
}
