import React from 'react'
import styles from './loader.module.scss'

//Used the bracket notation in style becasue has dash

const Loader = () => {
  return (
  <div className={styles["lds-default"]}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  )
}

export default Loader