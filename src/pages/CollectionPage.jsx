import React from 'react';
import CollectionItem from '../components/CollectionItem';
import '../scss/collection.scss';

const CollectionPage = ({match}) => {
  return (
    <div className='collection'>
      <h2>COLLECTION PAGE</h2>
      {CollectionItem}
    </div>
  )
}

export default CollectionPage;