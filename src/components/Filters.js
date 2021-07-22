import React from 'react';
import Select from './Select';


const Filters = ({onChange, search, onChangeSelect}) => {
  return (
    <div className="filters">
      <div className="search-input">
        <i className="bi bi-search"></i>
        <input type="text" onChange={onChange} value={search} placeholder="Search for a country..."/>
      </div>
      <Select onChange={onChangeSelect}/>
    </div>
  )
}

export default Filters;
