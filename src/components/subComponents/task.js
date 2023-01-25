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
            <div className='tipoTask'>Tipo de missão: {props.tipoTask}</div>
            <div className='descricaoTask'>{props.descTask}</div>
            <h4>Atividades realizadas</h4>
            <textarea className='descriminacaoTask'/>
            <div className='inserirImagem'><input type="file"/></div>
          </div>
          <button className='fecharTask buttonVazado' onClick={fecharTask}>FECHAR</button>
          <button className='fecharTask buttonVazado' onClick={fecharTask}>CONCLUIR</button>
          <button className='fecharTask buttonVazado'>SINCRONIZAR TRELLO</button>
        </div>
      : null}
    </div>
  );
}

export default Task;