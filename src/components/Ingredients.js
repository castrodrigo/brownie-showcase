import React from 'react';

export default class Ingredients extends React.Component {
  render() {
    return (
      <p className="ingredients">
        {this.props.ingredients.map((ingredient, index) => (
          {ingredient}
        ))}
      </p>
    );
  }
}
