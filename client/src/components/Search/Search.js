import React, { useState } from 'react';
import PropTypes from 'prop-types'

const Search = ({ locationSearch }) => {
    const [ query, setQuery ] = useState('');

    const handleChange = (e) => {
        setQuery(e.target.value);
    }

    return (
        <div> 
            <div>Search for the weather some place else</div>
            <input type='text' value={query} className='search-input' onChange={handleChange}></input>
            <button className='search-btn' onClick={() => locationSearch(query)}>Search</button>
        </div>
    )
}

Search.propTypes = {
    query: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
}

export default Search;