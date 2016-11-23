import React from 'react';
import { Link } from 'react-router';
import flavors from '../data/flavors';

export default class Menu extends React.Component {
  render() {
    return (
      <nav className="menu">
        {flavors.map(brownie => {
          return <Link
            key={brownie.id}
            to={`/brownie/${brownie.id}`}
            activeClassName="active">
            {brownie.name}
          </Link>;
        })}
      </nav>
    );
  }
}
