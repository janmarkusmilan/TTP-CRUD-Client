import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddCampusFormView } from "../views";
import { addCampusThunk } from "../../thunks";
import { withRouter } from "react-router-dom";

class AddCampusFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      description: "",
      imageUrl: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addCampus(this.state);
    this.props.history.push("/campuses");
  };
  render() {
    return (
      <AddCampusFormView
        name={this.state.name}
        address={this.state.address}
        description={this.state.description}
        imageUrl={this.state.imageUrl}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    addCampus: (campus) => dispatch(addCampusThunk(campus, ownProps)),
  };
};

AddCampusFormContainer.propTypes = {
  addCampus: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(withRouter(AddCampusFormContainer));
