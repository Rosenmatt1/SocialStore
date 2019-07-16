import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navigation.module.scss'
import { useAuth0 } from "../../react-auth0-wrapper";

const Navigation = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0()

  return (
    <nav className={styles.navi}>
      <Link className={styles.link} to='/'> Home </Link>
      <Link className={styles.link2} to='/products'> Products </Link>

      {isAuthenticated && <Link className={styles.link} to='/profile'> Profile </Link>}

      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
          Log in
        </button>
      )}

      {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    </nav>
  )
}

export default Navigation