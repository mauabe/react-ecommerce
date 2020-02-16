import {createSelector} from 'reselect';

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
  [selectDiretory],
  directory => directory.sections
)