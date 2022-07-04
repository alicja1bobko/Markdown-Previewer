import React, { Component } from "react";
import PropTypes from "prop-types";

const Editor = ({ onChange, markdown }) => {
  return <textarea id="editor" onChange={onChange} value={markdown} />;
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  markdown: PropTypes.string.isRequired,
};

export default Editor;