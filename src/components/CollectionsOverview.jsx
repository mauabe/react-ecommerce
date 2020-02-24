import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from './CollectionPreview';
import {selectCollections} from '../redux/shop/shopSelector';

import '../scss/collections-overview.scss';

const CollectionsOverview = ({collections}) => (
  <div className='collections-overview'>
    {collections.map(({id, ...otherCollectionProps}) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </div>

)
const mapStateToProps = createStucturedSelector({
  collections: sellectCollections
})
export default connect(maStateToProps)(CollectionsOverview);