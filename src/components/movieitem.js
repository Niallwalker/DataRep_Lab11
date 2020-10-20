import React from "react";
import Card from "react-bootstrap/Card";

export class Movieitem extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Header>{this.props.movie.Title}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img src={this.props.movie.Poster} width="200" length="200"></img>
              <footer className="blockquote-footer">
                <h4>{this.props.movie.Year}</h4>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
//added props, an image and h4 text
//this shows whats stored in the array
//imported bootstrap
//added card bootstrap form
//all under div
