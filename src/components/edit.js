import React from "react";
import axios from 'axios'; //axios added 

export class Edit extends React.Component {

  constructor() {
    super();

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangePoster = this.onChangePoster.bind(this);

    this.state = {
      Title: '',
      Year: '',
      Poster: ''
    }
  }


  componentDidMount(){
      console.log(this.props.match.params.id);
  
      axios.get('http://localhost:4000/api/movies/'+this.props.match.params.id) //componeentDidMount added to get response from Database
      .then(response =>{
        this.setState({
            _id:response.data._id,
            Title:response.data.title,
            Year:response.data.year,
            Poster:response.data.poster
        })
      })
      .catch((error)=>{
          console.log(error);
      });
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
      poster: this.state.Poster,
      _id:this.state._id //id added to constant, this is each movie is identified 
    }

    axios.put('http://localhost:4000/api/movies/'+this.state._id, newMovie) //put method added
    .then(res =>{
        console.log(res.data)
    })
    .catch();

    
    //link between api and newmovie
    //.then((res)=>{
    //  console.log(res);
    // })
    //.catch((err)=>{
    //  console.log(err);
   // });
  
  }

  render(){
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Edit Movie Title:</label>
            <input type="text"
              className="form-control"
              value={this.state.Title}
              onChange={this.onChangeTitle}></input>
          </div>

          <div className="form-group">
            <label>Edit Movie Year:</label>
            <input type="text"
              className="form-control"
              value={this.state.Year}
              onChange={this.onChangeYear}></input>
          </div>

        <div className='form-group'>
            <label>Edit Poster</label>
            <textarea type='text'
            className='form-control'
            value={this.state.Poster}
            onChange={this.onChangePoster}></textarea>
        </div>

        <div className="form-group">
            <input type="submit"
              value="Edit Movie"
              className="btn btn-primary"></input>
          </div>
        </form>
      </div>
    );
  }
}

