import React, { Component } from "react";
import Projects from "./Projects";
import SocialProfiles from "./SocialProfiles";
import profile from "./assets/profile.png";
import Title from "./Title";

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
        <img src={profile} alt="profile" className="profile" />
        <h1>Hello</h1>
        <p>I am Ana</p>
        <Title />
        {this.state.dispayBio ? (
          <div>
            <p>I live in Berlin, and code every day.</p>
            <p>My favourate language is JS. I think react is awesome</p>
            <p>Besides coding, I also love music and readying</p>
            <div>
              <button onClick={this.toggleDisplayBio}>Read Less</button>
            </div>
          </div>
        ) : (
          <div>
            <button onClick={this.toggleDisplayBio}>Read more</button>
          </div>
        )}
        <hr />
        <Projects />
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
