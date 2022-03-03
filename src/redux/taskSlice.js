import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    titulo: 'Comprar leche',
    completado: false,
  },
  {
    id: 2,
    titulo: 'Hacer presentación de React',
    completado: true,
  },
  {
    id: 3,
    titulo: 'Sacar la basura',
    completado: false,
  },
];

const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    createTodo(state, action) {
      return [
        ...state,
        {
          id: Math.floor(Math.random * 100),
          titulo: action.payload,
          completado: false,
        },
      ];
    },
    toggleTodo(state, action) {},
    editTodo(state, action) {},
    deleteTodo(state, action) {},
  },
});

export const taskActions = taskSlice.actions;
export default taskSlice;
