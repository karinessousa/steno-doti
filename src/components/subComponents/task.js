import '../../App.css';
import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

function Task(props) {

  const [showElement, setShowElement] = useState(false)
  const openTask = () => {
      if(showElement === false){
          setShowElement(true)
      }else{
          setShowElement(false)
      }
  }

  const fecharTask = () => {
    setShowElement(false)
  }

  return (
    <div>
      <div className='task'>
        <div className='check'></div>
        <h5 onClick={openTask}>{props.taskName}</h5>
        <h5 className='data'>22/01</h5>
      </div>
      {showElement ?
        <div className='taskAberta'>
          <div className='conteudoTask'>
            <h3>{props.taskName}</h3>
            <div className='tipoTask'></div>
            <div className='descricaoTask'>{props.descTask}</div>
            <div className='inserirImagem'></div>
          </div>
          <button className='fecharTask buttonVazado' onClick={fecharTask}>FECHAR</button>
          <button className='fecharTask buttonVazado'>CONCLUIR</button>
        </div>
      : null}
    </div>
  );
}

export default Task;