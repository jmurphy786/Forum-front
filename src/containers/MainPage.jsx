import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.css'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import Title from "./components/title.jsx";
import Post from "./components/post.jsx";


class MainPage extends Component {
    constructor(props) {
        super(props);
    
        this.state = { allPosts: [] };
      }


      componentDidMount() {
        let request = new XMLHttpRequest();
    
        request.open("GET", "http://localhost:8080/api/posts");
    
        request.setRequestHeader("Content-Type", "application/json");
    
        request.setRequestHeader("Access-Control-Allow-Origin", "*");
    
        request.responseType = "json";
    
        request.send();
    
        request.onload = () => {

          this.setState({ allPosts: request.response });
        };
      }

    
    render() {
        console.log(this.state.allPosts);


      return (

       <div>
           <div>
               <Title />
           </div>
            <div class="table-responsive ">          
                <table class="table table-bordered">
                <thead class = "bg-warning">
                    <tr>
                         <th>Posts</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.allPosts
                .map(function(item, key) {
                return (
          
                <tr key = {key}>
                     <td ><Post post = {item} /></td>
                </tr>
                );})}
               </tbody>
               </table>
            </div>     
      </div>     
      );
      
    }
}
 
export default MainPage;