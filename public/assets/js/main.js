//1. import data from file json
import dataApi from './services/getData.js';
//2. import set and get data from local Storage
import storage from './services/local-storage.js';
import showList from './showList.js';

let dataList = [];

const startApp = () => {
  dataApi.getDataFromApi().then((data) => {
    dataList = data.board.list;
    storage.saveLS(dataList);
    storage.getLS(dataList);
    //showList.paintHtml(dataList);
    console.log(dataList);
  });
};

startApp();

//# sourceMappingURL=main.js.map
