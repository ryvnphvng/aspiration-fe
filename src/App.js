/* eslint-disable one-var */
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TopicSearch from './components/TopicSearch';
import TopicResults from './components/TopicResults';

const App = () => (
  <Router>
    <div className="app-container">
      <Routes>
        <Route path="/" element={<TopicSearch />} />
        <Route path="/topics/:name" element={<TopicResults />} />
      </Routes>
    </div>
  </Router>
);

export default App;
