import Select from './Select';

const Filters = ({onChange, search, onChangeSelect}) => {
  return (
    <div className="filters">
      <div className="filters__search">
        <i className="bi bi-search"></i>
        <input 
          className="filters__input"
          type="text" 
          onChange={onChange} 
          value={search} 
          placeholder="Search for a country..."/>
      </div>
      <Select onChange={onChangeSelect}/>
    </div>
  )
}

export default Filters;
