import React from "react";
import PropTypes from 'prop-types';

export default class OFSBot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "pageName": props.page
    }
  }
  render() {
    return (
      <div id="ofsbot">

      </div>
    )
  }
}

OFSBot.propTypes = {
  page: PropTypes.string
}