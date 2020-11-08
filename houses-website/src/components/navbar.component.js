import React,{Component} from "react";
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-dark bg-dark">
            <div>
                <Link to="/" className="navbar-brand">Houses</Link>
                <h1>hello</h1>
            </div>
            </nav>
        );
    }
}