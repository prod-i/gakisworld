import { combineReducers, createStore } from "redux";
// import thunkMiddleware from 'redux-thunk';
import mainR from "./Main/mainR";
import headerR from "./Header/headerR";
import footerR from "./Footer/footerR";
import searchR from "./Catalog/searchR";
import catalogR from "./Catalog/catalogR";
import newsListR from "./News/newsListR";
import UsersR from "./Users/UsersR";
import subscribeR from "./Subscribe/subscribeR";

const redusers = combineReducers({
    main         : mainR, 
    header       : headerR, 
    footer       : footerR, 
    search       : searchR,
    catalog      : catalogR,
    newsList     : newsListR,
    usersList    : UsersR,
    subscribe    : subscribeR,
});

const store = createStore(redusers /*, composeEnhancers(applyMiddleware(thunkMiddleware))*/);

window._store_ = store;

export default store;