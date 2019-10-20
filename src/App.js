import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dispayBio: false
    };
  }

  toggleDisplayBio = () => {
    this.setState({ dispayBio: !this.state.dispayBio });
  };

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <p>I am Ana</p>
        <p>I am an web developer</p>
        {this.state.dispayBio ? (
          <div>
            <p>I live in Berlin, and code every day.</p>
            <p>My favourate language is JS. I think react is awesome</p>
            <p>Besides coding, I also love music and readying</p>
            <div>
              <button onClick={this.toggleDisplayBio}>Read Less</button>
            </div>
          </div>
        ) : null}
        <div>
          <button onClick={this.toggleDisplayBio}>Read more</button>
        </div>
      </div>
    );
  }
}

export default App;
