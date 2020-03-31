import React from 'react';
import Loader from 'react-loader-spinner';

class Spinner extends React.Component {
   render() {
    return(
        <Loader type="BallTriangle" color="#f4f4f4" height={80} width={80} style={{padding: '40px'}}/>
    );
   }
}

export default Spinner;

// https://www.npmjs.com/package/react-loader-spinner