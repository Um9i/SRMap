import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Building from './components/Building';
import Map from './components/Map';


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
    fetch(this.props.apiUrl)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            error: null,
            isLoaded: true,
            departments: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div className="Load">
          <Navbar />
          <div className="d-flex align-items-center my-5 p-4">
            <strong>Loading...</strong>
            <div className="spinner-border ms-auto text-primary my-4" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <Router basename="/SRMap">
          <Navbar />
          <div className='container py-4 mt-5 mb-5'>
            <Routes>
              <Route path="/barnes" element={<Building buildingId={8} buildingName='Barnes' departments={this.state.departments} />} />
              <Route path="/brooke" element={<Building buildingId={5} buildingName='Brooke' departments={this.state.departments} />} />
              <Route path="/csb" element={<Building buildingId={7} buildingName='Clinical Sciences' departments={this.state.departments} />} />
              <Route path="/hope" element={<Building buildingId={2} buildingName='Hope' departments={this.state.departments} />} />
              <Route path="/humphreybooth" element={<Building buildingId={9} buildingName='Humphrey Booth' departments={this.state.departments} />} />
              <Route path="/irving" element={<Building buildingId={3} buildingName='Irving' departments={this.state.departments} />} />
              <Route path="/ladywell" element={<Building buildingId={4} buildingName='Ladywell' departments={this.state.departments} />} />
              <Route path="/mayo" element={<Building buildingId={6} buildingName='Mayo' departments={this.state.departments} />} />
              <Route path="/turnberg" element={<Building buildingId={1} buildingName='Turnberg' departments={this.state.departments} />} />
              <Route path="/" element={<Map />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      );
    }
  }
};

export default App;
