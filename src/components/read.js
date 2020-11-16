import React from "react";
import { Movies } from "./movies";
import axios from "axios";

export class Read extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost:4000/api/movies") //link from server.js
      .then((response) => {
        this.setState({ movies: response.data }) //removed movies from state
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>List Of Movies</h1>
        <Movies movies={this.state.movies}></Movies>
      </div>
    );
  }
}

//axios added
//link to array added
//extends the componenets
//state added
//movies added into object
//the movie array is removed
