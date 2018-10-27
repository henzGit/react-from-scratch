import { combineReducers } from "redux";
import homePageReducer from './containers/HomePage/reducer';

export const reducers = combineReducers({
  homePage: homePageReducer
});