import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosSearch } from 'react-icons/io';

function SearchBar({ branchesData }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false); 
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Function to handle click events outside of the menu
  const handleClickOutside = (e) => {
    if (!e.target.closest('.search-menu')) {
      toggleMenu();
    }
  };

  // Function to handle search input changes
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter branches based on the search query across all branchesData
    const filteredResults = branchesData
      .flatMap((branches) => branches)
      .filter(
        (branch) =>
          branch.name.toLowerCase().includes(query.toLowerCase()) ||
          branch.city.toLowerCase().includes(query.toLowerCase())
      );

    setSearchResults(filteredResults);
    setShowNoResults(filteredResults.length === 0); 
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Function to handle redirection to Details page
  const handleBranchClick = (branchId) => {
    const allBranches = branchesData.flatMap((branches) => branches);
    const branch = allBranches.find((branch) => branch._id === branchId);
    const region = branch.region;
    let part;

    if (region === 'NCR') {
        part = 'metro-manila';
    } else if (region === 'IV-A') {
        part = 'south-luzon';
    } else if (region === 'III') {
        part = 'north-luzon';
    }

    navigate(`/details/${branchId}?region=${part}`);
   };

  return (
    <div className="relative w-72 lg:w-96 h-12 flex">
      <input
        type="text"
        className="w-full h-full rounded-3xl bg-gray-300 opacity-80 pl-2 font-cambria"
        id="search-form"
        value={searchQuery}
        onChange={handleSearchInputChange}
      />
      <IoIosSearch
        size={30}
        className="text-blue-900 absolute right-[3%] top-[20%]"
      />
      {showNoResults && ( // Conditionally render "No results found" message
        <p className="font-cambria font-bold absolute mt-12 bg-gray-300 opacity-80 rounded-lg shadow-lg w-full p-2">
          No results found
        </p>
      )}
      {searchResults.length > 0 && (
        <ul className="absolute mt-12 bg-gray-300 opacity-80 rounded-lg shadow-lg w-full overflow-auto max-h-36">
          {searchResults.map((branch) => (
            <li
              key={branch._id}
              className="p-2 font-cambria border-b cursor-pointer hover:bg-blue-100"
              onClick={() => handleBranchClick(branch._id)}
            >
              <strong>{branch.name}</strong> <br /> {branch.city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
