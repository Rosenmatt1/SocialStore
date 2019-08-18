import React from 'react';
import Loader from './Loader'
import { useAuth0 } from "../react-auth0-wrapper";

const Home = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <div>
      <header className="App-header">
        <h1> Welcome Home </h1>
      </header>
      <Loader />

      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

    </div>
  )
}

export default Home