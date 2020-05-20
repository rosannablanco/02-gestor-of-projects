import element from './createElement.js';
import card from './showCard.js';

// eslint-disable-next-line no-unused-vars

const mainElement = document.querySelector('.app-board');

const paintHtmlList = (list) => {
  mainElement.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    //CONTAINER COLUMN
    const divColumn = element.elementHtml('div', mainElement);
    divColumn.setAttribute('data-id', i);
    divColumn.setAttribute('class', 'app-list');

    //CONTAINER BACKGROUND BLUE
    const div = element.elementHtml('div', divColumn);
    Object.assign(div, {
      className: 'p-1 rounded-sm bg-primary shadow',
    });
    ///FORM TITLE COLUMN
    const formTitle = element.elementHtml('form', div);
    Object.assign(formTitle, {
      className: 'app-list-form align-middle p-1 position-relative',
      id: i,
    });
    formTitle.setAttribute('data-action', 'form-column');

    const inputTitle = element.elementHtml('input', formTitle);
    Object.assign(inputTitle, {
      className: 'js-title-column app-list-input form-control form-control-sm',
      placeholder: 'Tareas importantes',
      type: 'text',
      value: list[i].title,
      title: 'Editar el título de la lista',
    });
    inputTitle.setAttribute('data-action', 'change-title-column');
    inputTitle.setAttribute('data-id', i);
    //ICON MENU OF LIST
    const listOptions = element.elementHtml('div', formTitle);
    listOptions.setAttribute('class', 'app-list-options');

    const iconMenu = element.elementHtml('span', listOptions);
    iconMenu.setAttribute('class', 'pl-2 pr-2 text-white-50 fas fa-ellipsis-v');

    //CONTAINER BUTTONS OPTIONS MENU LIST
    const listBtns = element.elementHtml('div', listOptions);
    listBtns.setAttribute('class', 'app-list-btns btn-group btn-group-sm');

    ///BTN REMOVE COLUMN
    const removeBtn = element.elementHtml('button', listBtns);
    Object.assign(removeBtn, {
      className: 'js-remove-column btn btn-light text-muted border shadow-sm',
      title: 'Borrar esta tarjeta',
    });
    removeBtn.setAttribute('data-action', 'remove-column');
    removeBtn.setAttribute('data-id', i);
    const iconRemove = element.elementHtml('span', removeBtn);
    iconRemove.setAttribute('class', 'fas fa-trash-alt');

    ///BTN MOVE LEFT COLUMN
    const leftBtn = element.elementHtml('button', listBtns);
    Object.assign(leftBtn, {
      className: 'js-move-left btn btn-light text-muted border shadow-sm',
      title: 'Mover esta lista hacia la izquierda',
    });
    leftBtn.setAttribute('data-action', 'move-left');
    leftBtn.setAttribute('data-id', i);
    const iconLeft = element.elementHtml('span', leftBtn);
    iconLeft.setAttribute('class', 'fas fa-arrow-left');

    ///BTN MOVE RIGHT COLUMN
    const rightBtn = element.elementHtml('button', listBtns);
    Object.assign(rightBtn, {
      className: 'js-move-right btn btn-light text-muted border shadow-sm',
      title: 'Mover esta lista hacia la derecha',
    });
    rightBtn.setAttribute('data-action', 'move-right');
    rightBtn.setAttribute('data-id', i);
    const iconRight = element.elementHtml('span', rightBtn);
    iconRight.setAttribute('class', 'fas fa-arrow-right');

    //PARTIAL CARD -> MODULE SHOWCARD
    card.paintHtmlCard(list, i, div);

    //PARTIAL FOOTER
    ///BUTTON ADD CARD
    const addCardBtn = element.elementHtml('button', div);
    Object.assign(addCardBtn, {
      type: 'button',
      className: 'ml-1 btn btn-primary btn-sm text-white-50',
      title: 'Añadir una nueva tarjeta',
      id: i,
    });
    const iconAddCard = element.elementHtml('span', addCardBtn);
    iconAddCard.setAttribute('class', 'fas fa-plus');
    addCardBtn.appendChild(element.textElementInner(' Añadir otra tarjeta'));
  }

  //PARTIAL LIST-NEWS -> BUTTON ADD COLUMN
  const addColumnContainer = element.elementHtml('div', mainElement);
  Object.assign(addColumnContainer, {
    className: 'js-container-plus',
  });
  const btnAddColumn = element.elementHtml('button', addColumnContainer);
  Object.assign(btnAddColumn, {
    type: 'button',
    className: 'js-add-column btn btn-light btn-outline-primary btn-sm mr-5 shadow-sm',
    title: 'Añadir una nueva lista',
  });
  btnAddColumn.setAttribute('data-action', 'add-column');
  const spanIconAddColumn = element.elementHtml('span', btnAddColumn);
  spanIconAddColumn.setAttribute('class', 'fas fa-plus');
};

export default {paintHtmlList};
