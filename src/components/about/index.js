import React, { Component } from "react";
import { Link } from "react-router-dom";
import RouteWithSubRoutes from "../../shared/subroutes";

/* stateful component */
export default class About extends Component {
  render() {
    return (
      <div>
        <h2>Welcome About</h2>
        <ul>
          <li><Link to="/about/contact">Contact</Link></li>
          <li><Link to="/about/portfolio">Portfolio</Link></li>
        </ul>
        {this.props.routes.map((route) => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
      </div>
    );
  }
}