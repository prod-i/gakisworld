import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
import mainR from "./Main/mainR";
import sliderR from "./Main/sliderR";
import bannerR from "./Main/bannerR";
import continueViewR from "./Main/continueViewR";
import prevNewsR from "./Main/prevNewsR";
import popularR from "./Main/popularR";
import noveltyR from "./Catalog/noveltyR";
import searchR from "./Catalog/searchR";

const redusers = combineReducers({
    main         : mainR, 
    slider       : sliderR,
    banner       : bannerR,
    continueView : continueViewR,
    prevNews     : prevNewsR, 
    popular      : popularR,
    novelty      : noveltyR,
    search       : searchR,
});

const store = createStore(redusers /*, composeEnhancers(applyMiddleware(thunkMiddleware))*/);

window._store_ = store;

export default store;