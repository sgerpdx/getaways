import React from 'react';
import Getaways from '../../containers/Getaways';
import DetailContainer from '../../containers/DetailContainer';
import DetailPlace from '../places/DetailPlace';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../../containers/Header';
//import DetailContainer from '../../containers/DetailContainer';

export default function App() {
  return (
    <Router>
      <h2>Getaways</h2>
      <Header />
      <Route exact path="/" component={Getaways} />
      <Route exact path="/:id" component={DetailContainer} />
    </Router>
  );
}
