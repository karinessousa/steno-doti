import '../../App.css';
import React from 'react';
// import { Link } from 'react-router-dom';

function Task(props) {
  return (
    <div className='task'>
      <div className='check'></div>
      <h5>{props.taskName}</h5>
      <h5 className='data'>22/01</h5>
    </div>
  );
}

export default Task;