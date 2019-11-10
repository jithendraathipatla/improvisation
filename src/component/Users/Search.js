import React from 'react';

const Search = (props) => {

    return (
        <div>
            <form onSubmit={props.submit}>
             <input type="text" placeholder="search user..." name="search" onChange={props.change}/>
             <button type="submit" value="find">Search</button>
            </form>
        </div>
    );
};


export default Search;