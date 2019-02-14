import React from 'react';
import { Link } from 'gatsby';

const NavLink = ({ to, children }) => (
  <Link to={to ? to : '#'} style={{
    padding: '10px',
    backgroundColor: to ? 'tomato' : 'lightgrey',
    borderRadius: '4px',
    textDecoration: 'none',
    color: 'white',
    textTransform: 'uppercase',
    fontFamily: 'sans-serif',
    cursor: to ? 'pointer' : 'not-allowed'
  }}> { children }</Link>
);

export default ({ next, prev }) => (
  <div style={{
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '50px'
  }}>
    <NavLink to={prev}>&#8592; Prev</NavLink>
    <NavLink to={next}>Next &#8594;</NavLink>
  </div>
);
