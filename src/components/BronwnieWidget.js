import React from 'react';
import { Link } from 'react-router';

export default class BrownieWidget extends React.Component {
  render() {
    return (
      <Link to={`/brownie/${this.props.id}`}>
        <div className="brownie-widget">
          <img src={`img/${this.props.img.default}`}/>
          <h2 className="name">{this.props.name}</h2>
          <span className="price">{this.props.price}</span>
        </div>
      </Link>
    );
  }
}
