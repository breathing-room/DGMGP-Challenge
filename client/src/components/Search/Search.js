import React, { useState } from 'react';
import './Search.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'

const Search = ({ handleLocationSearch }) => {
	const [ query, setQuery ] = useState('');

	const handleChange = (e) => {
		setQuery(e.target.value);
	}

	const handleKeyPress = event => {
		if (event.key === 'Enter') {
			handleLocationSearch(query);
		}
	  };

	return (
		<div className='search-bar'> 
			<input 
				data-testid='input'
				type='text' 
				value={query} 
				placeholder='Search for a city' 
				className='search-input' 
				size='100' 
				onChange={handleChange} 
				onKeyPress={handleKeyPress}/>
			<button data-testid='search-btn' className='search-btn' onClick={() => { handleLocationSearch(query); setQuery('')}}>
				<FontAwesomeIcon icon={faSearch} style={{color:'#373838'}} />
			</button>
		</div>
	)
}

Search.propTypes = {
	query: PropTypes.string,
	handleLocationSearch: PropTypes.func
}

export default Search;