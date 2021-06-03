import React, { useState, useEffect } from 'react';
import Getaways from '../../containers/Getaways';
import DetailContainer from '../../containers/DetailContainer';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from '../../containers/Header';
import Login from '../login/Login';
import {
  getUserFromLocalStorage,
  putUserInLocalStorage,
} from '../../utils/LocalStorage-Utils';

export default function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    getUserFromLocalStorage();
    setUser;
  }, []);
  //do we want those empty brackets in this case?

  const handleUserChange = (user) => {
    setUser();
    putUserInLocalStorage();
  };

  const handleLogout = () => {
    localStorage.clear();
    handleUserChange();
  };

  //add a PrivateRoute once bookings become a thing:

  return (
    <Router>
      <h2>Getaways</h2>
      <Header user={user} handleLogout={handleLogout} />
      <Route exact path="/" component={Getaways} />
      <Route exact path="/:id" component={DetailContainer} />
      <Route
        path="/login"
        exact
        render={(routerProps) => (
          <Login handleUserChange={handleUserChange} {...routerProps} />
        )}
      />
      {/* <Route exact path="/login" component={Login} /> */}
    </Router>
  );
}
