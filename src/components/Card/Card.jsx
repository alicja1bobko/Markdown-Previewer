import React, { Component } from "react";
import "./Card.css";
import PropTypes from "prop-types";

const Card = ({ children, header }) => {
  return (
    <div className="card col-lg-5">
      <div className="card-header">
        <span className="card-header-title">{header}</span>
      </div>
      <div className="card-content">{children}</div>
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node,
  header: PropTypes.string.isRequired,
};

export default Card;
