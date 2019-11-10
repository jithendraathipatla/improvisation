import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import SearchInput from "./Search";
import {Ring} from 'react-awesome-spinners'
import {Link} from 'react-router-dom';

const User = () => {
   const [response, setresponse] = useState([]);
   const [loading,setloading] = useState(false);
   const [input, setinput] = useState("");
   const [userdata, setuserdata] = useState("");
   useEffect(() => {
      Axios.get(`https://api.github.com/search/users?q=${input}`)
      .then((res)=>{
          console.log(res.data);
          setresponse(res.data.items);
         
      })
   },[input,userdata]);

   const handelformSubmit = (e) =>{
     e.preventDefault();
     let value = e.target.elements.search.value.trim();
     if(value===""){
       alert("atleast pass some value");
     }
     setinput(value);
     setloading(true);
   }

   const handelInputChange = (e) => {
    console.log(e.target.value);
  }

  const handelinputClear = () => {
    setresponse([]);
  }

  const fetchuserDetails = () => {
   Axios.get(`https://api.github.com/users/${input}`)
    .then((res)=>{
      setuserdata(res.data);
    })
   
  }

   return(
     console.log(userdata),
       <div className="search-input">
      
       <SearchInput initialValue={input} change={handelInputChange} submit={handelformSubmit} />
        <br/> 
       <button className="button2" onClick={handelinputClear}>Clear Input</button>
       <div  className="card">
        loading && <Ring/>
       {response.map((item,i)=>{
         return(
             <div key={i}>
               <img src={item.avatar_url}/>
               <h3>{item.login}</h3>
              <Link to={`/singlepage/${item.login}`}><button className="button" onClick={fetchuserDetails}>More</button></Link>
               </div>
         )
       })}
       </div>
       </div>

)
}


export default User;
