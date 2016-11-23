import React from 'react';

export default class NutritionalInfo extends React.Component {
  render() {
    const nutritionalInfo = this.props.nutritionalInfo;
    return (
      <li className="nutritional-info">
        <span> {nutritionalInfo.totalFat} </span>
        <span> {nutritionalInfo.cholesterol} </span>
        <span> {nutritionalInfo.sodium} </span>
        <span> {nutritionalInfo.totalCarbs} </span>
        <span> {nutritionalInfo.protein} </span>
        <span> {nutritionalInfo.calcium} </span>
        <span> {nutritionalInfo.potassium} </span>
      </li>
    );
  }
}
