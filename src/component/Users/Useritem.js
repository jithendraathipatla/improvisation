import React, { Component } from "react";
import Users from "./User";
import About from "../About";
import Error from "./Error";
import Navbar from "../Navbar";
import singlepage from "./Abouttheuser";
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


export class Useritem extends Component {
  render() {
    return (
      <BrowserRouter>
      
      <Navbar icon="fa fa-github" />
      <div className="about-styling">
      <Link to="/"  className="button2">Home</Link>
      <Link to="/about" className="button2">Abou US</Link>
      </div>
      <Switch>
       <Route path="/" exact component={Users}></Route>
       <Route path="/about" exact component={About}></Route>
       <Route path="/singlepage/:login" exact component={singlepage}></Route>
       <Route component={Error}/>
      </Switch>

      
      </BrowserRouter>
      )
  }
}

export default Useritem;
