import React from 'react';

const data = {
  'available': {
    'name': 'Available',
    'icon': 'ico-available.png',
  },
  'unavailable': {
    'name': 'Unavailable',
    'icon': 'ico-unavailable.png',
  },
  'coming-soon': {
    'name': 'Coming Soon',
    'icon': 'ico-coming-soon.png',
  }
};

export default class Status extends React.Component {
  render() {
    const name = data[this.props.code].name;
    const icon = data[this.props.code].icon;
    return (
      <span className="status">
        <img className="icon" title={name} src={`/img/${icon}`}/>
        {this.props.showStatusName && <span className="name"> {name}</span>}
      </span>
    );
  }
}
