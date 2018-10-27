import { createSelector } from 'reselect'

const getHomePage = (state) => state.homePage;

export const makeSelectNum = createSelector(
  getHomePage, homeState => homeState.get('num')
);