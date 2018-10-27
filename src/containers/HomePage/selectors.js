import { createSelector } from 'reselect'

const selectHomePage = (state) => state.homePage;

const selectNumFromHomePage = createSelector(
  selectHomePage, homePageState => homePageState.get('num')
);

export {
  selectHomePage,
  selectNumFromHomePage
}

