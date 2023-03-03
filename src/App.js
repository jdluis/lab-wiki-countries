// src/App.js
import './App.css';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/countryDetails/:countryCode"
              element={<CountryDetails />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}
export default App;
