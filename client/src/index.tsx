import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// Components
import Root from './routes/Root';
import ErrorPage from './Pages/ErrorPage';
import HomeUser from './Pages/HomeUser';
import HomeStore from './Pages/HomeStore';
import Products from './Pages/Products';
import Product from './Pages/Product';
import Store from './Pages/Store';
import Cart from './Pages/Cart';
import Login from './Components/Login';

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
        path: 'products',
        element: <Products />,
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
    <RouterProvider router={router} />
  </React.StrictMode>,
);
