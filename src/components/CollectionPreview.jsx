import React from 'react';
import CollectionItem from './CollectionItem.jsx';
import '../scss/collection-preview.scss';


const CollectionPreview = ({title, items}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUppercase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(item => (<CollectionItem key={item.id} item={item} />))
        }
    </div>
  </div>
);

export default CollectionPreview;