import React, { Component } from "react";

const Joke = ({ joke: { setup, punchline, id } }) => {
  return (
    <p key={id}>
      {setup} <em>{punchline}</em>
    </p>
  );
};

class Jokes extends Component {
  state = { joke: {}, jokes: [] };

  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then(response => response.json())
      .then(data => this.setState({ joke: data }))
      .catch(error => alert(error.message));
  }

  fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten")
      .then(response => response.json())
      .then(data => this.setState({ jokes: data }))
      .catch(error => alert(error.message));
  };
  render() {
    return (
      <div>
        <h2>Highlighted Joke</h2>
        <Joke joke={this.state.joke} />
        <hr />
        <h3>Ten more jokes?</h3>
        <button onClick={this.fetchJokes}>CLick me!</button>
        {this.state.jokes.map(joke => {
          return <Joke key={joke.id} joke={joke} />;
        })}
      </div>
    );
  }
}

// new Promise((resolve, reject) => {
//   //return reject(new Error("No bears"));
//   setTimeout(() => {
//     resolve("Bears", "Beets", "Bettlestar");
//   }, 200);
// })
//   .then(quote => {
//     console.log(quote);
//   })
//   .catch(error => console.log("error", error));

export default Jokes;
