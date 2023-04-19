import { useState } from 'react';

function Search() {
    const [searchQuery, setSearchQuery] = useState('');
 
  const handleSearch = (e) => {
    e.preventDefault();
    // handle search logic here
  };
  return (
    <div>Search</div>
  )
}

export default Search