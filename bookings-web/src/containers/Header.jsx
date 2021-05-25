import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <Link aria-role="redirect to haunted house" to={'/'}>
        <h4>Home</h4>
      </Link>
      <span>waiting example for test</span>
      <hr></hr>
    </>
  );
};

export default Header;
