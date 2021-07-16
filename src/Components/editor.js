import React from "react";
import { Button } from "reactstrap";
class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      css: "h1{color:red ; }",
      js: "function ",
      html: "<h1> header </h1>",
      editing: "html",
    };

    this.createView = this.createView.bind(this);
    //this.handleClick = this.handleClick.bind(this);
  }
  createView() {
    let html = this.state.html;
    let css = "<style>" + this.state.css + "</style>";
    let js = "<script>" + this.state.js + "</script>";
    return {
      __html: html + css + js,
    };
  }

  render() {
    return (
      <div className="container-flex h-100">
        <div className="row h-100 ">
          <div
            style={{ borderBlockColor: "black", borderStyle: "dashed" }}
            className="col-sm-2 col"
          >
            File Explorer
            <div className="row mt-3">
              {" "}
              <Button
                onClick={() => {
                  this.setState({ editing: "html" });
                }}
              >
                index.html
              </Button>
            </div>
            <div className="row mt-3">
              {" "}
              <Button
                onClick={() => {
                  this.setState({ editing: "css" });
                }}
              >
                index.css
              </Button>
            </div>
            <div className="row mt-3">
              <Button
                onClick={() => {
                  this.setState({ editing: "js" });
                }}
              >
                index.js
              </Button>
            </div>
          </div>
          <div
            style={{ borderBlockColor: "black", borderStyle: "dashed" }}
            className="col-sm-5 col"
          >
            <div>Code Editor</div>
            <div className="row  mt-2">
              {this.state.editing === "html" ? (
                <textarea
                  rows="25"
                  onChange={(val) => {
                    this.setState({ html: val.target.value });
                  }}
                  value={this.state.html}
                ></textarea>
              ) : null}

              {this.state.editing === "css" ? (
                <textarea
                  rows="25"
                  onChange={(val) => {
                    this.setState({ css: val.target.value });
                  }}
                  value={this.state.css}
                ></textarea>
              ) : null}

              {this.state.editing === "js" ? (
                <textarea
                  rows="25"
                  onChange={(val) => {
                    this.setState({ js: val.target.value });
                  }}
                  value={this.state.js}
                ></textarea>
              ) : null}
            </div>
          </div>
          <div
            style={{ borderBlockColor: "black", borderStyle: "dashed" }}
            className="col-sm-5 col"
          >
            Live View
            <div dangerouslySetInnerHTML={this.createView()} />
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
