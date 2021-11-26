import React, { useState } from 'react';

import './App.css';
import { DndContext } from '@dnd-kit/core';
import Droppable from './Droppable';
import Draggable from './Draggable'

function App() {
  // const [isDropped, setIsDropped] = useState(false);

  const [parent, setParent] = useState(null);

  const containers = ['React', 'Redux', 'Typescript'];


  const logoMap = {
    "React": 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fa%2Fa7%2FReact-icon.svg%2F1200px-React-icon.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FReact_(JavaScript_library)&tbnid=bs9SxMY2Dnr1RM&vet=12ahUKEwid5_yMwbb0AhUhg3IEHRVyCkIQMygAegUIARDLAQ..i&docid=Fd-AO1E2ZMOhEM&w=1200&h=848&itg=1&q=react&ved=2ahUKEwid5_yMwbb0AhUhg3IEHRVyCkIQMygAegUIARDLAQ',
    "Redux": 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.favpng.com%2F6%2F2%2F11%2Fredux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t.jpg&imgrefurl=https%3A%2F%2Ffavpng.com%2Fpng_view%2Fredux-react-npm-state-management-png%2FUjPukHS5&tbnid=d8_-Y4IBwynJhM&vet=12ahUKEwj6nZ22wbb0AhUrqXIEHbwABN4QMygEegUIARDAAQ..i&docid=Q5sGL7NW_XQKlM&w=290&h=290&itg=1&q=redux%20logo&ved=2ahUKEwj6nZ22wbb0AhUrqXIEHbwABN4QMygEegUIARDAAQ',
    "Typescript": 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F4c%2FTypescript_logo_2020.svg%2F1024px-Typescript_logo_2020.svg.png&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ATypescript_logo_2020.svg&tbnid=Dtm_-okm8MvJzM&vet=12ahUKEwisnaPvwbb0AhVbJVkFHZUwADQQMygAegUIARC-AQ..i&docid=cXL5OHlxPuzO1M&w=1024&h=1024&itg=1&q=typescript%20logo&ved=2ahUKEwisnaPvwbb0AhVbJVkFHZUwADQQMygAegUIARC-AQ'
  }

  // const logoMap = {
  //   "React": 'https://bit.ly/3128jos',
  //   "Redux": 'https://bit.ly/3l9MMB2',
  //   "Typescript": 'https://bit.ly/3p0v5W0'
  // }



  function handleDragEnd(event: any) {
    const { over } = event;

    setParent(over ? over.id : null);
  }

  const draggableMarkup = (
    <Draggable>selector</Draggable>
  );



  return (
    <div className="app">

      <DndContext onDragEnd={handleDragEnd}>
        {parent === null ? draggableMarkup : null}
        {containers.map((id, i) => (
          // We updated the Droppable component so it would accept an `id`
          // prop and pass it to `useDroppable`
          <Droppable key={id} id={id}>
            {parent === id ?
              <div className='app__selected'>
                <img src={logoMap[parent!]} alt='' />
                <h3> You selected {parent} </h3>
                {draggableMarkup}
              </div>
              : `Step ${i + 1}): ${id}`}
          </Droppable>
        ))}
      </DndContext>

    </div>
  );
}

export default App;
