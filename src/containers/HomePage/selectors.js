import { createSelector } from 'reselect'

const selectHomePage = (state) => state.homePage;

const selectNum = createSelector(
  selectHomePage, homePageState => homePageState.get('num')
);

const selectListRepos = createSelector(
  selectHomePage, homePageState => homePageState.get('data').length
);

export {
  selectHomePage,
  selectNum,
  selectListRepos
}

