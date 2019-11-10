import React from 'react';
import {Link} from 'react-router-dom';
const Error = () => {
    return (
        <div className="about-styling">
            <h1>oops Page not found!!!</h1>
            <br/>
            <Link to="/" className="button2"> Home </Link>
        </div>
    );
};

export default Error;