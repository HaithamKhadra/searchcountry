import "./App.css";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Countries from "./components/Countries";
import Country from "./components/Country";

const App = () => {
  const [countries, setcountries] = useState([]);
  const [region, setRegion] = useState("");
  const [search, setSearch] = useState("");
  const [darkmode, setDarkmode] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const link = (e) => {
    const attr = e.target.parentNode.getAttribute("data-value");
    setSearch(attr);
  };

  const toggleDarkMode = () => {
    darkmode === "darkmode" ? setDarkmode("") : setDarkmode("darkmode");
  };

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/octanna/restcountries/master/src/main/resources/countriesV2.json"
      )
      .then((res) => {
        setcountries(res.data);
      });
  }, [region]);

  const filtered = countries.filter((cou) =>
    cou.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredByRegion = countries
    .filter((cou) => cou.region === region)
    .filter((c) => c.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className={`app ${darkmode}`} data-testid='App-test'>
      <Header
        heading="Where in the world?"
        toggleDarkMode={toggleDarkMode}
        btnClassName="header__button"
      />

      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Countries
                onChangeSelect={(e) => {
                  setRegion(e.target.value);
                }}
                onChange={handleChange}
                onClick={link}
                search={search}
                filtered={region === "" ? filtered : filteredByRegion}
              />
            )}
          />

          {filtered.length === 1 ? (
            <Route
              path="/details"
              render={() => (
                <Country
                  btnClassName="country-details__button"
                  countries={countries}
                  link={link}
                  filtered={filtered}
                  onClick={() => {
                    setSearch("");
                    setRegion("");
                  }}
                />
              )}
            />
          ) : (
            <h1>Error 404</h1>
          )}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
