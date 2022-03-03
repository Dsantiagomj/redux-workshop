import { configureStore } from '@reduxjs/toolkit';
import taskSlice from './taskSlice';
import messageSlice from './messageSlice';

const store = configureStore({
  reducer: {
    tasks: taskSlice.reducer,
    message: messageSlice.reducer,
  },
});

export default store;
