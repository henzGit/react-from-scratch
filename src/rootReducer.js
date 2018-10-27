import { combineReducers } from "redux";
import homePageReducer from './containers/HomePage/reducer';

export const rootReducer = combineReducers({
  homePage: homePageReducer
});