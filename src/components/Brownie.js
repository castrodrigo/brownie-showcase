import React from 'react';
import { Link } from 'react-router';
import NotFound from './NotFound';
import Menu from './Menu';
import Ingredients from './Ingredients';
import NutritionalInfo from './NutritionalInfo';
import flavors from '../data/flavors';

export default class Brownie extends React.Component {
  render() {
    const id = this.props.params.id;
    const brownie = flavors.filter((brownie) => brownie.id === id)[0];
    if (!brownie) {
      return <NotFound/>;
    }
    return (
      <div className="brownie-full">
        <Menu/>
        <div className="brownie">
          <header />
          <div className="picture-container">
            <img src={`/img/${brownie.image}`}/>
            <h2 className="name">{brownie.name}</h2>
            <h4 className="price">{brownie.price}</h4>
          </div>
          <section className="description">
            {brownie.description}
          </section>

          <section className="nutritional-info">
            <NutritionalInfo nutritionalInfo={brownie.nutritionalInfo}/>
          </section>
        </div>
        <div>
          <Link to="/">« Home</Link>
        </div>
      </div>
    );
  }
}
