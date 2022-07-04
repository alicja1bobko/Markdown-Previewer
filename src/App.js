/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Card from "./components/Card/Card";
import Preview from "./components/Preview";
import { initialMarkdown } from "./utils/initialMarkdown";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: initialMarkdown,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      markdown: event.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="content container-fluid">
          <Card header="Editor">
            <Editor
              onChange={this.handleChange}
              markdown={this.state.markdown}
            />
          </Card>
          <Card header="Previewer">
            <Preview markdown={this.state.markdown} />
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
