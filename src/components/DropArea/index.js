import React, { useState } from 'react';
import { useDrop } from 'react-dnd';
import DraggableComponent from '../Draggable/index';
import './styles.css';

const DropArea = () => {
  const [components, setComponents] = useState([]);

  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'COMPONENT',
    drop: (item) => {
      setComponents((prev) => [
        ...prev,
        { id: item.id, content: `${item.content} (Copy)` },
      ]);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className='container'
    >
      <h3 className='Title'>Selected  options</h3>
      {components.map((component, index) => (
        <DraggableComponent key={index} id={component.id} content={component.content} />
      ))}
    </div>
  );
};

export default DropArea;
