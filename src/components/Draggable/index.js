import React from 'react';
import { useDrag } from 'react-dnd';
import './styles.css';

const DraggableComponent = ({ id, content }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'COMPONENT',
    item: { id, content },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className='draggable-container'
      style={{
        opacity: isDragging ? 0.5 : 1,
      }}
    >
      {content}
    </div>
  );
};

export default DraggableComponent;