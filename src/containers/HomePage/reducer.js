import { fromJS } from 'immutable';
import { INCREMENT_NUM } from './constants';

export const initialState = fromJS({
  num: 0,
});

function HomePageReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT_NUM:
      return state.set('num', state.get('num') + 1);
    default:
      return state;
  }
}

export default HomePageReducer;
