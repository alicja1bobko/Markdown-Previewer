/* eslint-disable react/react-in-jsx-scope */
import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Editor from "./components/Editor";
import Card from "./components/Card/Card";
import Preview from "./components/Preview";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="content container-fluid">
          <Card header="Editor">
            <Editor />
          </Card>
          <Card header="Previewer">
            <Preview />
          </Card>
        </div>
      </div>
    );
  }
}

export default App;
