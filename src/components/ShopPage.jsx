import React from 'react';
import SHOP_DATA from './shopdata';
import CollectionPreview from './CollectionPreview.jsx';

class ShopPage extends React.Component () {
  constructor(){
    super()
    this.state = { SHOP_DATA }
  }
  render(){
    const {collections} = this.state;
    return(
      <div className='shop-page'>
        {collections.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        )
        )}
      </div>
    )
  }
}
export default ShopPage;