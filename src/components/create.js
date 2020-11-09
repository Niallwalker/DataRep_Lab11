import React from "react";
import axios from 'axios'; //axios added 

export class Create extends React.Component {
  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangePoster = this.onChangePoster.bind(this);

    this.state = {
      Title: "",
      Year: "",
      Poster: "",
    }
  }

  onChangeTitle(e) {
    this.setState({
      Title: e.target.value,
    });
  }

  onChangeYear(e) {
    this.setState({
      Year: e.target.value,
    });
  }

  onChangePoster(e) {
    this.setState({
      Poster: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    alert("Movie: " + this.state.Title + " " + this.state.Year + " " + this.state.Poster);
   
    const newMovie = { //new movie constant
      title: this.state.Title,
      year: this.state.Year,
      poster: this.state.Poster
    }
    axios.post('http://localhost:4000/api/movies',newMovie) //link between api and newmovie
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    });
  
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Add Movie Title:</label>
            <input type="text"
              className="form-control"
              value={this.state.Title}
              onChange={this.onChangeTitle}></input>
          </div>

          <div className="form-group">
            <label>Add Movie Year:</label>
            <input type="text"
              className="form-control"
              value={this.state.Year}
              onChange={this.onChangeYear}></input>
          </div>

        <div className='form-group'>
            <label>Movie Poster</label>
            <textarea type='text'
            className='form-control'
            value={this.state.Poster}
            onChange={this.onChangePoster}></textarea>
        </div>

        <div className="form-group">
            <input type="submit"
              value="Add Movie"
              className="btn btn-primary"></input>
          </div>
        </form>
      </div>
    );
  }
}

//extends the componenets
//added in on change for Submit, Movie Title, Year and Poster
//Used a form group
//Added a submit button
//added in a state
//users can now add movies to the app