import styles from './card.module.scss'
import React from 'react'

const Card = ({ children }) => {
  return (
    <div className={styles.card} >
      
      {children}
     
    </div >
  )
}

export default Card