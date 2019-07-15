import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navigation.module.scss'

const Navigation = () => {
  return (
    <nav className={styles.navi}>
      {/* <div className={styles.link1}> */}
        <Link className={styles.link} to='/'> Home </Link>
      {/* </div> */}
      {/* <div className={styles.link1}> */}
        <Link className={styles.link2} to='/products'> Products </Link>
      {/* </div> */}
    </nav>
  )
}

export default Navigation