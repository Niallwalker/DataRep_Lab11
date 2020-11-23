import React from "react";
import Card from "react-bootstrap/Card";
import {Link} from 'react-router-dom';

export class Movieitem extends React.Component {
  render() {
    return (
      <div>
        <Card>
          <Card.Header>{this.props.movie.title}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <img src={this.props.movie.poster} width="200" length="200"></img> 
              <footer className="blockquote-footer">
                <h4>{this.props.movie.year}</h4>
              </footer>
            </blockquote>
          </Card.Body>
          <Link to={"/edit/"+ this.props.movie._id} className="btn btn-primary">Edit</Link> 
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
//Edit button added