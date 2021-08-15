import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';


const Country = ({filtered, onClick, countries, link}) => {

  // const bc = countries.filter(b => filtered[0].borders.includes(b.alpha3Code))

  return (
    <section className="details-view">
      <Link to='/'>
        <Button iconClassName="bi bi-arrow-left" onClick={onClick} label='Back'/>
      </Link>
      
      <div className="details-container">
        <div className="big-flag-image">
          <img src={filtered[0].flag} alt="flag"/>
        </div>
        <h2>{filtered[0].name}</h2>
        <div className="details-box-1">
          <div><span>Native Name: </span>{filtered[0].nativeName}</div>
          <div><span>Population: </span>{filtered[0].population.toLocaleString()}</div>
          <div><span>Region: </span>{filtered[0].region}</div>
          <div><span>Sub Region: </span>{filtered[0].subregion}</div>
          <div><span>Capital: </span>{filtered[0].capital}</div>
        </div>
        <div className="details-box-2">
          <div><span>Top Level Domain: </span>{filtered[0].topLevelDomain}</div>
          <div><span>Currencies: </span>{filtered[0].currencies[0].name} ({filtered[0].currencies[0].code})</div>
          <div><span>Languages: </span>{filtered[0].languages.map(lang => lang.name).join(', ')}</div>
          {/* <div>
            {
              bc.length > 0 
              ? bc.map(borderCountry => (
                <Link to='/details'>
                  <div onClick={link} data-val={borderCountry.name}>
                    {borderCountry.name}
                  </div>
                </Link>
              ))
              : <p>no borders</p>
            }
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Country;
