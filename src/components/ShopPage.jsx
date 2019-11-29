import React from 'react';
import shopdata from './shopdata';

class ShopPage  extends React.Component () {
  constructor(props){
    super(props)

    this.state = {shopdata}
  }
  render(){
    return(
      <div>SHOP PAGE</div>
    )
  }
}
export default ShopPage;