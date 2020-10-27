import React from "react";
import { Movies } from "./movies";
import axios from "axios";

export class Read extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://jsonblob.com/api/jsonblob/520c3b5e-0312-11eb-a6af-cbf00d776032"
      )
      .then((response) => {
        this.setState({ movies: response.data.Search });
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
