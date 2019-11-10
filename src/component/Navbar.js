import React, { Component } from 'react';




export class Navbar extends Component {
   static defaultProps = {
       icon: "fa fa-github",
       title: "Github Name Finder",
   }
    render(props) {
        return (
            <div className="navstyle">
            <nav>
                <h1><i className={this.props.icon}></i>{this.props.title}</h1>
            </nav>
            </div>
         
        )
    }
}

export default Navbar
