import React from 'react';
import SpinnerShow from 'react-loading';

const Loading = ({type,color}) => {
    return (
      <SpinnerShow type="spin" color="black" height={'20%'} width={'20%'} style={{textAlign:"center"}}/>
    );
};

export default Loading;