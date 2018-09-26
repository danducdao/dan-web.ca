/*
* Program : HelloWorldComponent
* Écrit par : Dan Duc Dao
*/

import React, { Component } from "react";

class HelloWorldComponent extends Component {
  render() {
    return (
      <div className="content">
        <div className="row">
          <div className="hpanel hblue col-md-6">
            <div className="panel-heading hbuilt">
              <strong>Hello world</strong>
            </div>
            <div className="panel-body">Hello World</div>
          </div>
        </div>
      </div>
    );
  }
}

export default HelloWorldComponent;
