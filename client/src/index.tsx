import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { MainContext } from './Context';
// Components
import Root from './routes/Root';
import ErrorPage from './Pages/ErrorPage';
import HomeUser from './Pages/HomeUser';
import HomeStore from './Pages/HomeStore';
import ProductSection from './Pages/ProductSection';
import Product from './Pages/Product';
import Store from './Pages/Store';
import Cart from './Pages/Cart';
import Login from './Components/Login';

const setPostsList = () => {};
const postsList = [''];

const contextValue = {
  postsList,
  setPostsList,
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomeUser />,
      },
      {
        path: 'home',
        element: <HomeUser />,
      },
      {
        path: 'home-store',
        element: <HomeStore />,
      },
      {
        path: 'sections',
        element: <ProductSection />,
      },
      {
        path: 'products/:productId',
        element: <Product />,
      },
      {
        path: 'stores/:storeId',
        element: <Store />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <MainContext.Provider value={contextValue}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  </React.StrictMode>,
);
