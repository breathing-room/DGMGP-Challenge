import React from 'react';
import PropTypes from 'prop-types'

const Tagline = ({ location }) => {
    return (
        <h2>The week's weather for {location}</h2>
    )
}

Tagline.propTypes = {
    location: PropTypes.string
}

export default Tagline;

