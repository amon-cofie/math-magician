import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Navbar from './components/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="background-style">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
          <Route
            path="/calculator"
            element={(
              <>
                <div className="App">
                  <Calculator />
                  <div className="tag-line">Let&apos;s do some Math!</div>
                </div>
              </>
            )}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
