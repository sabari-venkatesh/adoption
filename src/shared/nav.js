import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import logo from "../images/logo.png";

export default class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      "isPrimary": props.isPrimary,
      "className": props.className
    };
    this.menuItems = [
      {
        "name": "Services",
        "param": "services",
        "children": [{
          "name": "Business Services",
          "param": "business-services",
          "children": [{
            "name": "AI & Automation",
            "param": "ai-automation"
          }, {
            "name": "Blockchain",
            "param": "blockchain"
          }]
        }, {
          "name": "Data Analytics",
          "param": "data-analytics"
        }]
      },
      {
        "name": "Industries",
        "param": "industries",
      },
      {
        "name": "Resources",
        "param": "resources",
      },
      {
        "name": "Company",
        "param": "company",
      },
      {
        "name": "Careers",
        "param": "careers",
        "isProminent": true,
      },
      {
        "name": "Events",
        "param": "events",
        "isProminent": true,
      },
      {
        "name": "Contact Us",
        "param": "contact",
        "isProminent": true,
      }
    ];
  }

  render() {
    return (
      <nav className="navbar">
        <a href="#" className="navbar-logo">
          <img src={logo} />
        </a>
        <div className="navbar-secondary">
          <ul className="navbar-nav">
            {
              this.menuItems.map(({ name, param, isProminent }) => (
                <Fragment key={param}>
                  {isProminent &&
                    <li key={param} className="navbar-item">
                      <NavLink className="navbar-link" to={`/${param}`}>{name}</NavLink>
                    </li>}
                </Fragment>
              ))
            }
          </ul>
        </div>
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-primary">
          <ul className="navbar-nav">
            {
              this.menuItems.map(({ name, param: param1, children: children1 }) => (
                <Fragment key={param1}>
                  {<li key={param1} className="navbar-item">
                    <NavLink className="navbar-link" to={`/${param1}`}>{name}</NavLink>
                    {children1 &&
                      <ul className="navbar-nav">
                        {
                          children1.map(({ name, param: param2, children: children2 }) => (
                            <Fragment key={param2}>
                              <li key={param2} className="navbar-item">
                                <NavLink className="navbar-link" to={`/${param1}/${param2}`}>{name}</NavLink>
                                {children2 &&
                                  <ul className="navbar-nav">
                                    {
                                      children2.map(({ name, param: param3 }) => (
                                        <Fragment key={param3}>
                                          <li key={param3} className="navbar-item">
                                            <NavLink className="navbar-link" to={`/${param1}/${param2}/${param3}`}>{name}</NavLink>
                                          </li>
                                        </Fragment>
                                      ))
                                    }
                                  </ul>}
                              </li>
                            </Fragment>
                          ))
                        }
                      </ul>
                    }
                  </li>}
                </Fragment>
              ))
            }
          </ul>
        </div>
      </nav>
    );
  }
}

Navbar.propTypes = {
  isPrimary: PropTypes.bool,
  className: PropTypes.string
}