import React from 'react';
import {withRouter} from 'react-router-dom';
import menuitem from './menuitem.scss';


const MenuItem = ({title, imageUrl, size, linkUrl, match}) => (
  <div style={{ backgroundImage:`url(${imageUrl})` }}
    className={`${size} menu-item`}
    onClick={() => this.props.history.push(`${match.url}${linkUrl}`)}
  >
    <div className="content">
     <h1 className='title'>{title.toUpperCase()}</h1>
      <span className="subtitle"> SHOP NOW </span>
    </div>
  </div>
)

export default withRouter(MenuItem);