import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Container } from 'react-bootstrap';


export default class CreateData extends Component {
  constructor(props) {
    super(props);
  
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeAge= this.onChangeAge.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangePhoto=this.onChangePhoto.bind(this);
   
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
     
      username: '',
      age: '',
      location: '',
      date: new Date(),
      photo:'',
      users: []
    }
  }

  
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value
    })
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onChangePhoto(e){
    this.setState({
      photo:e.target.files[0]
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const data = {
      username: this.state.username,
      age: this.state.age,
      location: this.state.location,
      date: this.state.date,
     
    
    }

    console.log(data);

    axios.post('http://localhost:5000/data/add', data)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {

    return (
    <Container>
      <h3>Create New Log</h3>
      <form method="POST" onSubmit={this.onSubmit} encType='multipart/form-data'>
        <div className="form-group"> 
          <label>Username: </label>
          <input  type="text"
              required
              name="username"
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}
              />
        </div>
        <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={this.onChangePhoto}
            />
        
        <div className="form-group"> 
          <label>Age </label>
          <input  type="text"
              required
              name="age"
              className="form-control"
              value={this.state.age}
              onChange={this.onChangeAge}
              />
        </div>
        <div className="form-group">
          <label>Location </label>
          <input 
              type="text" 
              name="location"
              className="form-control"
              value={this.state.location}
                onChange={this.onChangeLocation}
              />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
          <DatePicker
              selected={this.state.date}
              
              onChange={this.onChangeDate}
              dateFormat="yyyy/mm/dd"
               showYearDropdown
               showMonthDropdown
              scrollableYearDropdown
              scrollableMonthYearDropdown
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Create List" className="btn btn-primary"  />
        </div>
      </form>
    </Container>
    )
  }



}