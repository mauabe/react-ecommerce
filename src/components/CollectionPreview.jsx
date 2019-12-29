import React from 'react';
import '../scss/collection-preview.scss';
import CollectionItem from './CollectionItem.jsx';


const CollectionPreview = ({title, items}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUppercase()}</h1>
      <div className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(({id, ...otherItemProps}) => (<CollectionItem key={id} {...otherItemProps} />))
        }
    </div>
  </div>
)

export default CollectionPreview;