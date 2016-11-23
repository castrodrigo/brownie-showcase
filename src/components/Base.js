import React from 'react';
import { Link } from 'react-router';

export default class Base extends React.Component {
  render() {
    return (
      <div className="app-container">
        <header>
          <Link to="/">
            <h1>Brownie showcase</h1>
          </Link>
        </header>
        <div className="app-content">{this.props.children}</div>
        <footer>
          <p>
            WIP app.
          </p>
        </footer>
      </div>
    );
  }
}
