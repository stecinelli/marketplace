import { createContext, useContext } from 'react';
import { IContext } from './Types';

export const MainContext = createContext<IContext>({
  productsList: [],
  setProductsList: () => {},
  storeList: [],
  setStoreList: () => {},
});

export const useMainContext = () => useContext(MainContext);
