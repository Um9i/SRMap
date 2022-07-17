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
        <div className='container py-4 mt-5'>
          <Routes>
            <Route path="/barnes" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/8/' buildingName='Barnes' />} />
            <Route path="/brooke" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/5/' buildingName='Brooke' />} />
            <Route path="/csb" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/7/' buildingName='Clinical Sciences' />} />
            <Route path="/hope" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/2/' buildingName='Hope' />} />
            <Route path="/humphreybooth" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/9/' buildingName='Humphrey Booth' />} />
            <Route path="/irving" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/3/' buildingName='Irving' />} />
            <Route path="/ladywell" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/4/' buildingName='Ladywell' />} />
            <Route path="/mayo" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/6/' buildingName='Mayo' />} />
            <Route path="/turnberg" element={<Building apiUrl='https://ltmap.herokuapp.com/api/buildings/1/' buildingName='Turnberg' />} />
            <Route path="/" element={<Map />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
