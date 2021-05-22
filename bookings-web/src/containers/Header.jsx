import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to={'/'}>
        <h4>Home</h4>
        <hr></hr>
      </Link>
    </>
  );
};

export default Header;
