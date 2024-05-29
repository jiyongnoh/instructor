import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav'; // Nav component imported
import Home from './pages/Home';
import Company from './pages/Company';
import './App.css';

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Router>
      <Nav />
      <AppContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          {/* Additional routes to be added */}
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;
