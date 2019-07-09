import styles from './card.module.scss'
import React from 'react'

const Card = ({ children, className }) => {
  return (
    <div className={styles.card} >
      { children }
    </div >
    
  )
}

export default Card