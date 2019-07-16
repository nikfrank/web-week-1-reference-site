import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
  render(){
    return (
      <div className='Navbar'>
        <div className='top-nav'>
          <h1>80 school</h1>
          <h3>high level javascript</h3>
        </div>
        <div className='bottom-nav'>
          <ul>
            <li><div>TUTORIALS</div></li>
            <li><div>REFERENCES</div></li>
            <li><div>EXAMPLES</div></li>
            <li><div>EXERCISES</div></li>
          </ul>
          <ul>
            <li><div>G</div></li>
            <li><div>S</div></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
