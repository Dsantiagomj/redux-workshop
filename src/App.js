import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { taskActions } from './redux/taskSlice';

import Formulario from './formulario';
import ListaTareas from './listaTareas';

function App() {
  const [editable, setEditable] = useState(null);

  const tasks = useSelector((state) => state.tasks.taskList);
  const dispatcher = useDispatch();

  // función para agregar una nueva tarea
  const handleRegistrar = (tarea) => {
    dispatcher(taskActions.createTodo(tarea));
  };

  // función para cambiar el estado de una tarea
  const handleToggle = (id) => {
    dispatcher(taskActions.toggleTodo(id));
  };

  // funcion para recibir una tarea que se va a editar
  const recibirEditable = (tarea) => {
    setEditable(tarea);
  };

  // funcion para editar una tarea
  const handleEditar = (nuevaTarea) => {
    dispatcher(taskActions.editTodo(nuevaTarea));
    setEditable(null);
  };

  // Eliminar una tarea
  const handleEliminar = (id) => {
    dispatcher(taskActions.deleteTodo(id));
  };

  // Renderizar el componente
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-5 mb-5">Todo list</h1>
        <Formulario
          handleRegistrar={handleRegistrar}
          handleEditar={handleEditar}
          editable={editable}
        />
        <ListaTareas
          listaTareas={tasks}
          handleToggle={handleToggle}
          handleEliminar={handleEliminar}
          recibirEditable={recibirEditable}
        />
      </div>
    </>
  );
}

export default App;
