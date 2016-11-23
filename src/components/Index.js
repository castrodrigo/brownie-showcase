import React from 'react';
import BrownieWidget from './BrownieWidget';
import flavors from '../data/flavors';

export default class Index extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="brownie-selector">
          {flavors.map(brownie =>
            <BrownieWidget
              key={brownie.id}
              {...brownie} />)}
        </div>
      </div>
    );
  }
}
