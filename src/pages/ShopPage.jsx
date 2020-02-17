import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import CollectionPreview from '../components/CollectionPreview';
import {selectCollections} from '../redux/shop/shopSelector';

const ShopPage = ({collections}) => (
  <div className='shop-page'>
    {collections.map(({id, ...otherCollectionProps}) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))
    }
  </div>
)

const mapStateToProps = createStucturedSelector({
  collections: sellectCollections
})
export default connect(maStateToProps)(ShopPage);