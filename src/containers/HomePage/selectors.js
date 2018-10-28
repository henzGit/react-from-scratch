import { createSelector } from 'reselect'

const selectHomePage = (state) => state.homePage;

const selectNum = createSelector(
  selectHomePage, homePageState => homePageState.get('num')
);

const selectListRepos = createSelector(
  selectHomePage, homePageState => homePageState.get('data')
);

const selectNumRepos = createSelector(
  selectHomePage, homePageState => homePageState.get('data').length
);

const selectCurrentUser = createSelector(
  selectHomePage, homePageState => homePageState.get('currentUser')
);

export {
  selectHomePage,
  selectNum,
  selectListRepos,
  selectNumRepos,
  selectCurrentUser
}

