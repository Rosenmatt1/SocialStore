import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.navi}>
      <Link to='/'> Home </Link>
      <Link to='/products'> Products </Link>
    </nav>
  )
}

export default Navigation