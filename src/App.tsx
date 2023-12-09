import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Building from './components/Building';
import Map from './components/Map';
import Loading from './components/Loading';
import Data from './departments.json';

interface AppProps {
  apiUrl: string,
}

interface AppState {
  error: any,
  departments: any[],
  isLoaded: boolean
}


class App extends React.Component<AppProps, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      error: null,
      departments: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    this.setState({
      error: null,
      isLoaded: true,
      departments: Data
    });
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className='Loading'>
          <Navbar departments={this.state.departments}/>
          <div className='my-4 py-1'>
            <div className='container bg-white py-3 mt-5 mb-5'>
              <Loading />
            </div>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className='App'>
          <Navbar departments={this.state.departments}/>
          <div className='my-4 py-1'>
            <div className='container bg-white py-3 my-5'>
              <Routes>
                <Route path="/barnes" element={<Building buildingId={8} buildingName='Barnes' departments={this.state.departments} />} />
                <Route path="/brooke" element={<Building buildingId={5} buildingName='Brooke' departments={this.state.departments} />} />
                <Route path="/csb" element={<Building buildingId={7} buildingName='Clinical Sciences' departments={this.state.departments} />} />
                <Route path="/gmmth" element={<Building buildingId={10} buildingName='GMMTH' departments={this.state.departments} />} />
                <Route path="/hope" element={<Building buildingId={2} buildingName='Hope' departments={this.state.departments} />} />
                <Route path="/humphreybooth" element={<Building buildingId={9} buildingName='Humphrey Booth' departments={this.state.departments} />} />
                <Route path="/irving" element={<Building buildingId={3} buildingName='Irving' departments={this.state.departments} />} />
                <Route path="/ladywell" element={<Building buildingId={4} buildingName='Ladywell' departments={this.state.departments} />} />
                <Route path="/mayo" element={<Building buildingId={6} buildingName='Mayo' departments={this.state.departments} />} />
                <Route path="/turnberg" element={<Building buildingId={1} buildingName='Turnberg' departments={this.state.departments} />} />
                <Route path="/" element={<Map />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
};

export default App;
