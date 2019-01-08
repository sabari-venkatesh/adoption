import React from "react";
import { NavLink } from "react-router-dom";

export default class Home extends React.Component {
  render() {
    return (
      <div id="view-home">
        <h1>
          Business 
          <NavLink to="/contact">Trust</NavLink>
          OFS to deliver
          <NavLink to="/innovation">Innovative Digital Engineering</NavLink>
        </h1>
      </div>
    )
  }
}