import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavScrollExample from './components/Navbar.js';
import GroupExample from './components/NewsCard.js';
import { Container } from 'react-bootstrap';


const App = () => {

  return (
    <Router>


      <NavScrollExample />
      <Container className="d-flex justify-content-center p-2 " style={{ marginTop: "80px" }}>

        <h2>K-NEWS HEADLINES</h2>
      </Container>

      <Routes>
        <Route path="/" element={<GroupExample category="all" />} />
        <Route path="/top" element={<GroupExample category="top" />} />
        <Route path="/trending" element={<GroupExample category="trending" />} />
        <Route path="/science" element={<GroupExample category="science" />} />
        <Route path="/entertainment" element={<GroupExample category="entertainment" />} />
        <Route path="/sports" element={<GroupExample category="sports" />} />

        <Route path="/*" element={<GroupExample category="all" />} />
      </Routes>
    </Router>
  );
}

export default App;