import React from 'react';
import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <div className="alert alert-dark" role="alert">
      <h1 className="alert-heading">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="mb-0">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
