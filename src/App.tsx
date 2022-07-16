import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Building from './components/Building';
import Map from './components/Map';

class App extends React.Component {
  render() {
    return (
      <Router basename="/SRMap">
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/barnes" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/8/' />} />
            <Route path="/brooke" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/5/' />} />
            <Route path="/csb" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/7/' />} />
            <Route path="/hope" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/2/' />} />
            <Route path="/humphreybooth" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/9/' />} />
            <Route path="/irving" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/3/' />} />
            <Route path="/ladywell" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/4/' />} />
            <Route path="/mayo" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/6/' />} />
            <Route path="/turnberg" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/1/' />} />
            <Route path="/" element={<Map />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
