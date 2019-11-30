import React from 'react';
import SHOP_DATA from './shopdata';
import CollectionPreview from './../components/CollectionPreview';

class ShopPage extends React.Component () {
  constructor(){
    super()
    this.state = { shopdata }
  }
  render(){
    const {collections} = this.state;
    return(
      <div className='shop-page'>
        {collections.map(({id, ...otherCollectionProps}) => (
          <CollecionPreview key={id} {...otherCollectionProps} />
        )
        )}
      </div>
    )
  }
}
export default ShopPage;