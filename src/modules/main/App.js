import './App.css';
import{ React } from 'react';
import { DndProvider} from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DraggableComponent from '../../components/Draggable/index';
import DropArea from '../../components/DropArea/index';


function App() {
  const options = [
    'Sales Cloud',
    'Service Cloud',
    'Communnity Cloud',
    'Finnancial Cloud',
    'Einstein AI',
    'Wave Analytics',
    "Health Cloud"
  ]
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <div className='Available-container' >
          <h3 className='Title'>Available options</h3>
          {
            options.map((option, index) => <DraggableComponent key={index} id={index} content={option} />)
          }
        </div>
        <DropArea />
      </div>
    </DndProvider>
  );
}

export default App;
