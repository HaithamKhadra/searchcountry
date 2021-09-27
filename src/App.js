import './App.css';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Countries from './components/Countries';
import Country from './components/Country';


const App = () => {

  const [countries, setcountries] = useState([])
  const [region, setRegion] = useState('')
  const [search, setSearch] = useState('')
  const [darkmode, setDarkmode] = useState('')
  
  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const link = (e) => {
    const attr = e.target.parentNode.getAttribute("data-val");
    setSearch(attr);
  }

  const toggleDarkMode = () => {
    darkmode === 'darkmode' ? setDarkmode('') : setDarkmode('darkmode');
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v2/all')
      .then(res => {
        setcountries(res.data)
      })
  }, [region])
  
  const filtered = 
    countries
    .filter(cou => cou.name.toLowerCase().includes(search.toLowerCase()))
  
  const filteredByRegion = 
    countries
    .filter(cou => cou.continent === region)
    .filter(c => c.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className={`app flex__column ${darkmode}`}>
      <Header heading='Where in the world?' darkmode={darkmode} toggleDarkMode={toggleDarkMode}/>
           
      <Router>
        <Switch>
          <Route
            path='/' exact
            render={() => (
              <Countries 
                onChangeSelect={(e) => {setRegion(e.target.value)}}
                onChange={handleChange}
                // onClick={(e) => {setSearch(e.target.dataset.val)}}
                onClick={link}
                search={search}
                filtered={region === '' ? filtered : filteredByRegion}
              />
            )}
          />
          {
            filtered.length === 1
            ? <Route 
                path='/details/:name'
                render={() => (
                  <Country 
                    countries={countries}
                    link={link}
                    filtered={filtered}
                    onClick={() => {setSearch(''); setRegion('')}}
                  />
                )}
                />            
            : <h1>Error 404</h1>
          }
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;