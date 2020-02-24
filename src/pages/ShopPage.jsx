import React from 'react';
import CollectionsOverview from '../components/CollectionsOverview';
// import {createStructuredSelector} from 'reselect';
// import CollectionPreview from '../components/CollectionPreview';
// import {selectCollections} from '../redux/shop/shopSelector';

const ShopPage = ({collections}) => (
  <div className='shop-page'>
      <CollectionsOverview />
  </div>
)

export default ShopPage;