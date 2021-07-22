import React from 'react';

const Select = ({onChange}) => {
  return (
  <select className='select-region' onChange={onChange}>
    <option className="options" value="">All Countries</option>
    <option className="options" value="Africa">Africa</option>
    <option className="options" value="Americas">Americas</option>
    <option className="options" value="Asia">Asia</option>
    <option className="options" value="Europe">Europe</option>
    <option className="options" value="Oceania">Oceania</option>
  </select>
  )
}

export default Select;
