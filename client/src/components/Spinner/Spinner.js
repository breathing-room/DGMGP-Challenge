import React from 'react';
import Loader from 'react-loader-spinner';

class Spinner extends React.Component {
   render() {
    return(
        <Loader type="BallTriangle" color="rgba(3, 190, 190, 0.651)" height={80} width={80} style={{padding: '40px'}}/>
    );
   }
}

export default Spinner;

// https://www.npmjs.com/package/react-loader-spinner