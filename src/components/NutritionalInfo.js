import React from 'react';

export default class NutritionalInfo extends React.Component {
  render() {
    const nutritionalInfo = this.props.nutritionalInfo;
    return (
      <li className="nutritional-info">
        <span> {nutritionalInfo.total-fat} </span>
        <span> {nutritionalInfo.cholesterol} </span>
        <span> {nutritionalInfo.sodium} </span>
        <span> {nutritionalInfo.total-carbs} </span>
        <span> {nutritionalInfo.protein} </span>
        <span> {nutritionalInfo.calcium} </span>
        <span> {nutritionalInfo.potassium} </span>
      </li>
    );
  }
}
