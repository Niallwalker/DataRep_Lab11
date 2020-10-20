import React from "react";
import { Movieitem } from "./movieitem";

export class Movies extends React.Component {
  render() {
    return this.props.movies.map((movie) => {
      return <Movieitem movie={movie}></Movieitem>;
    });
  }
}
//imported movieitem.js
//created & added movieitem component
//added 1 return for the movies
//added 1 return for movieitem
