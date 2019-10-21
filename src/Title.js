import React, { Component } from "react";

const TITLES = [
  "a software engineer",
  "a music lover",
  "an enthusiastic learner",
  "an adventure seeker"
];

class Title extends Component {
  state = { titleIndex: 0, fadeIn: true };

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ fadeIn: false });
    }, 200);
    this.animateTitles();
  }

  componentWillUnmount() {
    clearInterval(this.titleInterval);
    clearInterval(this.timeout);
  }

  animateTitles = () => {
    this.titleInterval = setInterval(() => {
      const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

      this.setState({ titleIndex, fadeIn: true });
      setTimeout(() => {
        this.setState({ fadeIn: false });
      }, 200);
    }, 4000);
  };

  render() {
    const { fadeIn, titleIndex } = this.state;
    const title = TITLES[this.state.titleIndex];
    return (
      <p className={fadeIn ? "title-fade-in" : "title-fade-out"}>
        I am {title}
      </p>
    );
  }
}

export default Title;
