import React, {useState, useEffect} from 'react';
import Axios from 'axios';

const Abouttheuser = (props) => {
   let data = props.match.params.login;
    const [state, setstate] = useState(data);
    const [todisplay, settodisplay] = useState("");
    useEffect(() => {
        Axios.get(`https://api.github.com/users/${state}`)
    .then((res)=>{
      settodisplay(res.data);
    })
    }, [state])
    return (
        console.log(state),
        <div style={{textAlign:"center", marginTop:"40px"}}>
         <h1>Name:{todisplay.login}</h1>
         <img src={todisplay.avatar_url}/>
         <h2>Public repos:{todisplay.public_repos}</h2>
        </div>
    );
};

export default Abouttheuser;