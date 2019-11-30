import React from 'react';
import collectionpreview from './collectionpreview.scss';

const CollectionPreview = ({title, item}) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUppercase()}</h1>
      <div key={item.id} className='preview'>
        {items
          .filter((item, index) => index < 4)
          .map(item => (<div key={item.id}>{item.name}</div>))
        }
    </div>
  </div>
)

export default CollectionPreview;