import { createContext, useContext } from 'react';
import { IContext } from './Types';

export const MainContext = createContext<IContext>({
  postsList: [],
  setPostsList: () => {},
});

export const useMainContext = () => useContext(MainContext);
