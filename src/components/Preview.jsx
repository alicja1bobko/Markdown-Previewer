import React from "react";
import { marked } from "marked";
import Prism from "prismjs";
import PropTypes from "prop-types";

const Preview = ({ markdown }) => {
  marked.setOptions({
    breaks: true,
    gfm: true,
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, "javascript");
    },
  });

  const renderer = new marked.Renderer();
  renderer.link = function (href, title, text) {
    return `<a target="_blank" href="${href}">${text}</a>`;
  };

  const parsedText = marked(markdown, { renderer });

  return (
    <div id="preview" dangerouslySetInnerHTML={{ __html: parsedText }}></div>
  );
};

Preview.propTypes = {
  markdown: PropTypes.string.isRequired,
};

export default Preview;
