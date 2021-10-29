
import reducer from "./taskReducer";
import{createStore,compose,applyMiddleware} from "redux"
import thank from "redux-thunk"


const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


const store=createStore(reducer,compose(applyMiddleware(thank),devtools));
export default store;