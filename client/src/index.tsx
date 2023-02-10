import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Root from './routes/Root';
import ErrorPage from './Pages/ErrorPage';
import HomeUser from './Pages/HomeUser';
import HomeStore from './Pages/HomeStore';
import ProductSection from './Pages/ProductSection';
import Product from './Pages/Product';
import Store from './Pages/Store';

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
