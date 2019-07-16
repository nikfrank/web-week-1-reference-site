import React from 'react';
import './Leftbar.css';

class Leftbar extends React.Component {
  render(){
    return (
      <div className='Leftbar'>
        <h4>Category</h4>
        <ul>
          <li><div>Learn HTML</div></li>
          <li><div>Learn CSS</div></li>
          <li><div>Learn JS</div></li>
          <li><div>Learn React</div></li>
          <li><div>Learn node</div></li>
        </ul>
      </div>
    );
  }
}

export default Leftbar;
