import React from 'react';
import {connect} from 'react-redux';

import CollectionItem from '../components/CollectionItem';
import '../scss/collection.scss';
import {selectCollection} from '../redux/shop/shopSelector'

const CollectionPage = ({collection}) => {
  console.log(collection)
  return (
    <div className='collection-page'>
      <h2>COLLECTION PAGE</h2>
      <CollectionItem />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);