import { combineReducers } from "redux";
import appReducer from './containers/App/reducer';

export const reducers = combineReducers({
  app: appReducer
});