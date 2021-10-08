import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const Country = ({ filtered, onClick, countries, link, btnClassName }) => {
  // const bc = countries.filter(b => filtered[0].borders.includes(b.alpha3Code))

  return (
    <section className="country-details">
      <Link to="/">
        <Button
          iconClassName="bi bi-arrow-left"
          onClick={onClick}
          label="Back"
          btnClassName={btnClassName}
        />
      </Link>

      <div className="country-details__container">
        <div className="country-details__big-flag">
          <img
            className="country-details__big-flag-image"
            src={`https://countries.petethompson.net/data/flags/${filtered[0].alpha3Code.toLowerCase()}.svg`}
            alt="flag"
          />
        </div>

        <div className="country-details__description">
          <h2 className="country-details__country-name">{filtered[0].name}</h2>
          <div className="country-details__box-1">
            {/* <div><span>Native Name: </span>{filtered[0].name.nativeName}</div> */}
            <div>
              <span className="country-details__infos">Native Name: </span>
              --TODO--
            </div>
            <div>
              <span className="country-details__infos">Population: </span>
              {filtered[0].population.toLocaleString()}
            </div>
            <div>
              <span className="country-details__infos">Region: </span>
              {filtered[0].region}
            </div>
            <div>
              <span className="country-details__infos">Sub Region: </span>
              {filtered[0].subregion}
            </div>
            <div>
              <span className="country-details__infos">Capital: </span>
              {filtered[0].capital}
            </div>
          </div>
          <div className="country-details__box-2">
            <div>
              <span className="country-details__infos">Top Level Domain: </span>
              {filtered[0].topLevelDomain[0]}
            </div>
            {/* <div><span>Top Level Domain: </span>{filtered[0].topLevelDomain.join(' / ')}</div> */}
            <div>
              <span className="country-details__infos">Currencies: </span>
              --TODO--
            </div>
            {/* <div><span>Currencies: </span>{filtered[0].currencies[0].name} ({filtered[0].currencies[0].code})</div> */}
            {/* <div><span>Languages: </span>{filtered[0].languages.map(lang => lang.name).join(', ')}</div> */}
            <div>
              <span className="country-details__infos">Languages: </span>
              --TODO--
            </div>
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
      </div>
    </section>
  );
};

export default Country;
