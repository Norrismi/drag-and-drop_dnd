import React, { useState } from 'react';

import './App.css';
import { DndContext, DragOverlay } from '@dnd-kit/core';
import Droppable from './Droppable';
import Draggable from './Draggable'

import reactPic from './Assets/react.png'
import reduxPic from './Assets/redux.png'
import typeScriptPic from './Assets/typeScript.png'


function App() {
  // const [isDropped, setIsDropped] = useState(false);

  const [parent, setParent] = useState(null);

  const containers = ['React', 'Redux', 'Typescript'];

  const logoMap: any = {
    "React": reactPic,
    "Redux": reduxPic,
    "Typescript": typeScriptPic
  }



  function handleDragEnd(event: any) {
    const { over, active } = event;

    setParent(over ? active.id : null);
  }

  const draggableMarkup = (id: string) =>
    <Draggable id={id}>
      <img className='app__skilllogo' src={logoMap[id]} alt="" />

    </Draggable>;



  return (
    <div className="app">

      <DndContext onDragEnd={handleDragEnd}>

        {containers.map((id) => id !== parent ? draggableMarkup(id) : null)}

        <Droppable key={"React"} id={"React"}>
          {parent === null ? (


            <div className="app__infoBox">

              <h3 className="app__infoBox-text">Drop here to display more info</h3>
            </div>



          ) :

            <div className="app__infoBox">

              <div className='app__selected'>
                <img className='app__skilllogo' src={logoMap[parent!]} alt='' />
                <h3> You selected {parent} </h3>
              </div>
            </div>
          }
        </Droppable>


      </DndContext>

    </div>
  );
}

export default App;
