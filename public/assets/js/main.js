import dataApi from './services/getData.js';
import storage from './services/local-storage.js';
import boardList from './dom/showList.js';
import events from './dom/actionsEvents.js';
import edit from './dom/edit.js';

let dataList = [];

const startApp = () => {
  if (storage.isValid()) {
    dataList = storage.getLS();
    render();
  } else {
    dataApi.getDataFromApi().then((data) => {
      dataList = data.board.list;
      storage.saveLS(dataList);
      render();
    });
  }
};
const render = () => {
  boardList.paintHtmlList(dataList);
  listenEvents();
};
const listenEvents = () => {
  addEventsElements('.js-add-column', 'click');
  addEventsElements('.js-title-column', 'blur');
  addEventsElements('.js-remove-column', 'click');
  addEventsElements('.js-move-left', 'click');
  addEventsElements('.js-move-right', 'click');
  addEventsElements('.app-list-form', 'submit');
  addEventsElements('.js-add-card', 'click');
  addEventsElements('.js-btn-up', 'click');
  addEventsElements('.js-btn-down', 'click');
  addEventsElements('.js-card', 'click');
};

const addEventsElements = (selector, type) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.addEventListener(type, handleEvent);
  });
};

const handleEvent = (ev) => {
  const dataAction = ev.currentTarget.dataset.action;
  switch (dataAction) {
    case 'add-column':
      events.addColumn(dataList);
      break;
    case 'change-title-column':
      events.changeTitleColumn(ev, dataList);
      break;
    case 'remove-column':
      events.removeColumn(ev, dataList);
      break;
    case 'move-left':
      events.moveColumn(ev, dataList);
      break;
    case 'move-right':
      events.moveColumn(ev, dataList);
      break;
    case 'form-column':
      events.submitForm(ev);
      break;
    case 'add-card':
      events.addCard(ev, dataList);
      break;
    case 'move-up':
      events.moveUp(ev, dataList);
      break;
    case 'move-down':
      events.moveDown(ev, dataList);
      break;
    case 'open-card':
      edit.openCard(ev, dataList);
      break;
    default:
      return false;
  }
  render();
  storage.saveLS(dataList);
};

startApp();

//# sourceMappingURL=main.js.map
