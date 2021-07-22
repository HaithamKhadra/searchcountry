import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
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
      .get('https://restcountries.eu/rest/v2/all')
      .then(res => {
        setcountries(res.data)
      })
  }, [])
  
  const filtered = 
    countries
    .filter(cou => cou.name.toLowerCase().includes(search.toLowerCase()))
  
  const filteredByRegion = 
    countries
    .filter(cou => cou.region === region)
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
                path='/details'
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;

//     <div className="App">
//       <Switch>
//         {/* <Route path='/' exact component={Home}/> */}
//         <Route path='/country' component={Country}/>
//       </Switch>

//     </div>

// function App() {
  //   return (
//    /* everything inside Router is going to have the ability to use routing */
//     <Router>
//         <div className="App">
//           <header className="App-header">
//             <Switch>
//               <Route path='/' exact component={Home}/>
//               <Route path='/country' component={Country}/>
//             </Switch>
//             <Link to='/country'>
//               <button>Go to country</button>
//             </Link>
//           </header>
//         </div>
//     </Router>
//   );
// }