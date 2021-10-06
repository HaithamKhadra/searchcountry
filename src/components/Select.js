
const Select = ({onChange}) => {
  return (
  <select className='filters__select' onChange={onChange}>
    <option className="filters__select-options" value="">All Countries</option>
    <option className="filters__select-options" value="Africa">Africa</option>
    <option className="filters__select-options" value="Americas">Americas</option>
    <option className="filters__select-options" value="Asia">Asia</option>
    <option className="filters__select-options" value="Europe">Europe</option>
    <option className="filters__select-options" value="Oceania">Oceania</option>
  </select>
  )
}

export default Select;
