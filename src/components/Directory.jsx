import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
// import {sections} from '../redux/directory/directoryReducer';
import {selectDirectorySections} from '../redux/directory/directorySelector';
import MenuItem from './MenuItem';
import '../scss/directory.scss';

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
