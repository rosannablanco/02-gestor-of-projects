//1. import data from file json
import dataApi from './services/getData.js';
//2. import set and get data from local Storage
import storage from './services/local-storage.js';
import boardList from './dom/showList.js';
import events from './dom/actionsEvents.js';

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
  addEventsElements('.js-remove-column', 'click');
};

const addEventsElements = (selector, type) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    element.addEventListener(type, handleClick);
  });
};

const handleClick = (ev) => {
  const elementSelect = ev.currentTarget;
  const dataAction = ev.currentTarget.dataset.action;
  switch (dataAction) {
    case 'add-column':
      events.addColumn(dataList);
      break;
    case 'remove-column':
      events.removeColumn(elementSelect, dataList);
      break;
    default:
      return false;
  }
  render();
  storage.saveLS(dataList);
};

startApp();
