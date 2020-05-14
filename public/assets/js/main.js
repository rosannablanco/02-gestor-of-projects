//1. import data from file json
import dataApi from './services/getData.js';
//2. import set and get data from local Storage
import storage from './services/local-storage.js';
import boardList from './dom/showList.js';
import events from './dom/listenEvent.js';

let dataList = [];

const startApp = () => {
  dataApi.getDataFromApi().then((data) => {
    dataList = data.board.list;
    storage.saveLS(dataList);
    storage.getLS(dataList);
    render();
  });
};
const render = () => {
  boardList.paintHtmlList(dataList);
  listenEvents();
};
const listenEvents = () => {
  const addColumnBtn = document.querySelector('.js-add-column');
  addColumnBtn.addEventListener('click', handleClick);
};
const handleClick = (ev) => {
  const dataAction = ev.currentTarget.dataset.action;
  switch (dataAction) {
    case 'add-column':
      dataList.push(events.addColumnEvent());
      break;
    default:
      return 'error';
  }
  /* console.log(dataAction);
  console.log(dataList); */

  render();
  storage.saveLS(dataList);
};

startApp();

//# sourceMappingURL=main.js.map
