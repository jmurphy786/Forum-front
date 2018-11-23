import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PostPage.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Title from "./components/title.jsx";
import Post from "./components/post.jsx";
import Comments from "./components/comments.jsx";


class PostPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = { allComments: [] };
      }


       componentDidMount() {
        let request = new XMLHttpRequest();
    
        request.open("GET", "http://localhost:8080/api/posts/" + this.props.location.state.id + "/comments");
        request.setRequestHeader("Content-type", "application/json");
        request.setRequestHeader('Access-Control-Allow-Origin','*');
        request.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, HEAD');
        request.responseType = 'json';
    
        request.send();
    
        request.onload = () => { 
          this.setState({allComments : request.response.content});
          
        };
      }

    
    render() {
        console.log(this.props.location.state);


      return (

       <div>
           <div>
           <div>
               <Title />
           </div>
             <div class="table-responsive ">          
                <table class="table table-bordered">
                <thead class = "bg-warning">
                    <tr>
                         <th>Post</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                     <td ><Post post = {this.props.location.state} /></td>
                </tr>
               </tbody>
               </table>
            </div>   
            </div>
            <div class="theT">
             <div class="col-sm-12">     
                <table class="table" >
                <tbody class = "table-bordered">
                {this.state.allComments
                .map(function(item, key) {
                return (
                <tr key = {key}>
                     <th ><Comments comment = {item} /></th>
                </tr>
                );})}
               </tbody>
               </table>
            </div> 
            </div>   
        </div>
        
      );
      
    }
}
 
export default PostPage;