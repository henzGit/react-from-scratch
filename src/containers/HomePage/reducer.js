import { fromJS } from 'immutable'
import {GOT_STUFF, INCREMENT_NUM, CHANGE_USERNAME}
  from './constants'

export const initialState = fromJS({
  num: 0,
  data: [],
  currentUser: 'henzGit'
});

function HomePageReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_NUM:
      return state.set('num', state.get('num') + 1);
    case GOT_STUFF:
      return state.set('data', action.response.data);
    case CHANGE_USERNAME:
      return state.set('currentUser', action.username);
    default:
      return state;
  }
}

export default HomePageReducer;
