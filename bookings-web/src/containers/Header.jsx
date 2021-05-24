import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link to={'/'}>
        <h4>Home</h4>
      </Link>
      <Link to={'/haunted'}>
        <h4>Haunted House</h4>
      </Link>
      <span>waiting example for test</span>
      <hr></hr>
    </>
  );
};

export default Header;
