import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./comment.css"; 
import $ from 'jquery';
import Popper from 'popper.js';
import logo from './logo.png';
import { BrowserRouter as Router, Redirect  } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Button, FormGroup, FormControl, ControlLabel, nav} from "react-bootstrap";

var x;

class comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      redirectPath: "",
      isAuthenticated: false,
      date : ""

    };
}

componentDidMount() {
    
    this.setState({ date: this.props.comment.createdDate.substring(0,10) + " " +  this.props.comment.createdDate.substring(11,19)});
}
    render() {
        console.log(this.props.comment);
    
      return (
       <div>
         <div class="media bg-light med" >
        <div class="media-left votes " >
        <button type = "button" class="btn btn-default btn-primary upvote" onClick = {this.handleUpvote}><span class="glyphicon glyphicon-menu-up"></span></button>
        <p class = "text-warning">{this.props.comment.upvotes}</p>
         <button type = "button" class="btn btn-default btn-primary downvote" onClick = {this.handleDownvote}><span class="glyphicon glyphicon-menu-down"></span></button>
         </div>
         <div class="media-body">
         <h4 class="media-heading bg-light text-dark bordered">{this.props.comment.username} : {this.state.date}</h4>
        <p1 class = "text-dark">{this.props.comment.message} </p1>
        </div>
        </div>
      </div>     
      );
      
    }
}
 
export default comments;