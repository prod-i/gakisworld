import { combineReducers, createStore } from "redux";
// import thunkMiddleware from 'redux-thunk';
import mainR from "./Main/mainR";
import sliderR from "./Main/sliderR";
import bannerR from "./Main/bannerR";
import continueViewR from "./Main/continueViewR";
import prevNewsR from "./Main/prevNewsR";
import popularR from "./Main/popularR";
import noveltyR from "./Catalog/noveltyR";
import searchR from "./Catalog/searchR";
import catalogListR from "./Catalog/catalogListR";
import newsListR from "./News/newsListR";
import UsersR from "./Users/UsersR";

const redusers = combineReducers({
    main         : mainR, 
    slider       : sliderR,
    banner       : bannerR,
    continueView : continueViewR,
    prevNews     : prevNewsR, 
    popular      : popularR,
    novelty      : noveltyR,
    search       : searchR,
    catalogList  : catalogListR,
    newsList     : newsListR,
    usersList    : UsersR,
});

const store = createStore(redusers /*, composeEnhancers(applyMiddleware(thunkMiddleware))*/);

window._store_ = store;

export default store;