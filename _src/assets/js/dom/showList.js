import element from './createElement.js';
import card from './showCard.js';
// eslint-disable-next-line no-unused-vars
const mainElement = document.querySelector('.app-board');
const btnAddColumnElement = document.querySelector('.js-container-plus');

const paintHtmlList = (list) => {
  //mainElement.innerHTML = '';
  for (let i = 0; i < list.length; i++) {
    const divColumn = element.elementHtml('div', mainElement);
    mainElement.insertBefore(divColumn, btnAddColumnElement);
    Object.assign(divColumn, {
      className: 'app-list',
      id: i,
    });
    const div = element.elementHtml('div', divColumn);
    Object.assign(div, {
      className: 'p-1 rounded-sm bg-primary shadow',
    });
    const formTitle = element.elementHtml('form', div);
    Object.assign(formTitle, {
      className: 'app-list-form align-middle p-1 position-relative',
      id: i,
      name: 'title-task',
    });
    const inputTitle = element.elementHtml('input', formTitle);
    Object.assign(inputTitle, {
      className: 'app-list-input form-control form-control-sm',
      placeholder: 'Tareas importantes',
      type: 'text',
      value: list[i].title,
      title: 'Editar el título de la lista',
    });

    const listOptions = element.elementHtml('div', formTitle);
    listOptions.setAttribute('class', 'app-list-options');

    const iconMenu = element.elementHtml('span', listOptions);
    iconMenu.setAttribute('class', 'pl-2 pr-2 text-white-50 fas fa-ellipsis-v');

    const listBtns = element.elementHtml('div', listOptions);
    listBtns.setAttribute('class', 'app-list-btns btn-group btn-group-sm');

    //borrar tarjeta
    const removeBtn = element.elementHtml('button', listBtns);
    Object.assign(removeBtn, {
      className: 'btn btn-light text-muted border shadow-sm',
      title: 'Borrar esta tarjeta',
      id: i,
    });
    const iconRemove = element.elementHtml('span', removeBtn);
    iconRemove.setAttribute('class', 'fas fa-trash-alt');
    //izquierda
    const leftBtn = element.elementHtml('button', listBtns);
    Object.assign(leftBtn, {
      className: 'btn btn-light text-muted border shadow-sm',
      title: 'Mover esta lista hacia la izquierda',
      id: i,
    });
    const iconLeft = element.elementHtml('span', leftBtn);
    iconLeft.setAttribute('class', 'fas fa-arrow-left');
    //derecha
    const rightBtn = element.elementHtml('button', listBtns);
    Object.assign(rightBtn, {
      className: 'btn btn-light text-muted border shadow-sm',
      title: 'Mover esta lista hacia la derecha',
      id: i,
    });
    const iconRight = element.elementHtml('span', rightBtn);
    iconRight.setAttribute('class', 'fas fa-arrow-right');
    //PARTIAL CARD
    card.paintHtmlCard(list, i, div);
  }
}; /*  const buttonAddCard = document.createElement('button');
    Object.assign(buttonAddCard, {
      type: 'button',
      className: 'ml-1 btn btn-primary btn-sm text-white-50',
      title: 'Añadir una nueva tarjeta',
    });
    const iconPlus = document.createElement('span');
    iconPlus.setAttribute('class', 'fas fa-plus');
    const txtBtnAdd = document.createTextNode(' Añadir otra tarjeta');
    buttonAddCard.appendChild(iconPlus);
    buttonAddCard.appendChild(txtBtnAdd);
    divContainerCard.appendChild(buttonAddCard);
  } */ /* for (let z = 0; z < listTasks[i].cards.length; z++) {
      const element = listTasks[i].cards[z];
      const articleCard = document.createElement('article');
      articleCard.setAttribute('class', 'js-card app-card m-1 mb-2 p-2 bg-white rounded-sm app-cursor-pointer shadow-sm');
      articleCard.setAttribute('title', 'Abrir la tarjeta');
      for (let y = 0; y < element.tags.length; y++) {
        const spanTags = document.createElement('span');
        spanTags.setAttribute('class', 'mr-1 badge badge-secondary bg-success');
        articleCard.appendChild(spanTags);
        const txtTags = document.createTextNode(element.tags[y]);
        spanTags.appendChild(txtTags);
      }
      const titleContainer = document.createElement('div');
      articleCard.appendChild(titleContainer);
      const titleH3 = document.createElement('h3');
      titleH3.setAttribute('class', 'h6');
      titleContainer.appendChild(titleH3);
      const txtH3 = document.createTextNode(element.title);
      titleH3.appendChild(txtH3);
      //tasks completed
      const div = document.createElement('div');
      div.setAttribute('class', 'text-black-50');
      const smallOpen = document.createElement('small');
      smallOpen.setAttribute('class', 'pr-2 fas fa-align-left');
      const smallSquare = document.createElement('small');
      smallSquare.setAttribute('class', 'far fa-check-square');
      const smallSubtitle = document.createElement('small');
      smallSubtitle.setAttribute('title', 'Subtareas completadas: 3 de 5');
      const txtSubtitle = document.createTextNode(' 3/5');
      smallSubtitle.appendChild(txtSubtitle);
      div.appendChild(smallOpen);
      div.appendChild(smallSquare);
      div.appendChild(smallSubtitle);
      articleCard.appendChild(div);
      divContainerCard.appendChild(articleCard);
    } */ /* const buttonRight = document.createElement('button');
    Object.assign(buttonRight, {
      type: 'button',
      className: 'btn btn-light text-muted border shadow-sm app-list-move-right',
      title: 'Mover esta lista hacia la derecha',
    });
    const iconRight = document.createElement('span');
    iconRight.setAttribute('class', 'fas fa-arrow-right');
    buttonRight.appendChild(iconRight);
    buttonRight.addEventListener('click', moveColumn);
    divButtons.appendChild(buttonDeleted);
    //deleted btn move right or left
    if (i !== 0) {
      divButtons.appendChild(buttonLeft);
    }
    if (i !== listTasks.length - 1) {
      divButtons.appendChild(buttonRight);
    } */ /* const buttonLeft = document.createElement('button');
    Object.assign(buttonLeft, {
      type: 'button',
      className: 'btn btn-light text-muted border shadow-sm app-list-move-left',
      title: 'Mover esta lista hacia la izquierda',
    });
    const iconLeft = document.createElement('span');
    iconLeft.setAttribute('class', 'fas fa-arrow-left');
    buttonLeft.appendChild(iconLeft);
    buttonLeft.addEventListener('click', moveColumn); */ /* const buttonDeleted = document.createElement('button');
    Object.assign(buttonDeleted, {
      type: 'button',
      className: 'btn btn-light text-muted border shadow-sm',
      title: 'Borrar esta tarjeta',
    });
    const iconTrash = document.createElement('span');
    iconTrash.setAttribute('class', 'fas fa-trash-alt');
    buttonDeleted.addEventListener('click', removeColumn);
    buttonDeleted.appendChild(iconTrash); */ /* const spanIconMenu = document.createElement('span');
    spanIconMenu.setAttribute('class', 'pl-2 pr-2 text-white-50 fas fa-ellipsis-v');
    containerOptions.appendChild(spanIconMenu);

    const divButtons = document.createElement('div');
    divButtons.setAttribute('class', 'app-list-btns btn-group btn-group-sm');
    containerOptions.appendChild(divButtons);  /*  */ //created span //button trash //button left //button right //PARTIAL CARD //PARTIAL FOOTER //PARTIAL ADD COLUMN
/*const divContainerCard = document.createElement('div');
     divContainerCard.setAttribute('class', 'p-1 rounded-sm bg-primary shadow'); 
    divColumn.appendChild(divContainerCard);*/
/* const containerOptions = document.createElement('div');
    containerOptions.setAttribute('class', 'app-list-options');
    formTitleCard.appendChild(containerOptions); */
//created list Option

//PARTIAL HEADER
/*  const formTitleCard = document.createElement('form');
    formTitleCard.setAttribute('class', 'app-list-form align-middle p-1 position-relative');
    Object.assign(formTitleCard, {
      id: i,
      name: 'title-task',
    });
    formTitleCard.addEventListener('submit', submitForm);
    const inputTitle = document.createElement('input');
    Object.assign(inputTitle, {
      className: 'app-list-input form-control form-control-sm',
      placeholder: 'Tareas importantes',
      type: 'text',
      value: listTasks[i].title,
      title: 'Editar el título de la lista',
      id: i,
    });

    formTitleCard.appendChild(inputTitle);
    divContainerCard.appendChild(formTitleCard);
    inputTitle.addEventListener('change', changeTitle) */
export default {paintHtmlList};
