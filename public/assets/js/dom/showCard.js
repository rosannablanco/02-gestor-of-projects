import element from './createElement.js';

const paintHtmlCard = (list, index, parent) => {
  const listCards = list[index].cards;
  for (let i = 0; i < listCards.length; i++) {
    const articleCard = element.elementHtml('article', parent);
    Object.assign(articleCard, {
      className: 'js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm',
      title: 'Abrir la tarjeta',
      id: index,
    });
    //TAGS
    const containerTag = element.elementHtml('div', articleCard);
    listCards[i].tags.forEach((tag) => {
      const spanTag = element.elementHtml('span', containerTag);
      Object.assign(spanTag, {
        className: 'mr-1 badge badge-secondary bg-success',
      });
      spanTag.appendChild(element.textElementInner(tag));
    });
    // title card
    const h3Title = element.elementHtml('h3', articleCard);
    h3Title.setAttribute('class', 'h6');
    h3Title.appendChild(element.textElementInner(listCards[i].title));

    //Align, Tasks completed
    const divTextBlack = element.elementHtml('div', articleCard);
    divTextBlack.setAttribute('class', 'text-black-50');
    const smallLeftAlign = element.elementHtml('span', divTextBlack);
    smallLeftAlign.setAttribute('class', 'pr-2 fas fa-align-left');
    const smallSquare = element.elementHtml('span', divTextBlack);
    smallSquare.setAttribute('class', 'far fa-check-square');
    const smallTasks = element.elementHtml('span', divTextBlack);
    smallTasks.setAttribute('title', 'Subtareas completadas: 3 de 5');
    smallTasks.appendChild(element.textElementInner(' 3/5'));

    //Buttons move up/down
    const containerBtns = element.elementHtml('div', articleCard);
    containerBtns.setAttribute('class', 'app-card-btns btn-group-vertical btn-group-sm');
    containerBtns.setAttribute('data-id', index);

    //Up
    const btnUp = element.elementHtml('button', containerBtns);
    Object.assign(btnUp, {
      type: 'button',
      className: 'js-btn-up btn btn-light text-muted border shadow-sm app-card-move-up',
      title: 'Mover esta tarjeta hacia arriba',
    });
    btnUp.dataset.id = i;
    btnUp.dataset.action = 'move-up';
    const iconUp = element.elementHtml('span', btnUp);
    iconUp.setAttribute('class', 'fas fa-arrow-up');

    //Down
    const btnDown = element.elementHtml('button', containerBtns);
    Object.assign(btnDown, {
      type: 'button',
      className: 'js-btn-down btn btn-light text-muted border shadow-sm app-card-move-down',
      title: 'Mover esta tarjeta hacia abajo',
    });
    btnDown.dataset.id = i;
    btnDown.dataset.action = 'move-down';
    const iconDown = element.elementHtml('span', btnDown);
    iconDown.setAttribute('class', 'fas fa-arrow-down');
  }
};
export default {paintHtmlCard};

//# sourceMappingURL=showCard.js.map
