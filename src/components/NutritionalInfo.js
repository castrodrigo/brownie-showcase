import React from 'react';

export default class NutritionalInfo extends React.Component {
  render() {
    return (
      <li className="nutritional-info">
        <span> {this.props.total-fat} </span>
        <span> {this.props.cholesterol} </span>
        <span> {this.props.sodium} </span>
        <span> {this.props.total-carbs} </span>
        <span> {this.props.protein} </span>
        <span> {this.props.calcium} </span>
        <span> {this.props.potassium} </span>
      </li>
    );
  }
}
