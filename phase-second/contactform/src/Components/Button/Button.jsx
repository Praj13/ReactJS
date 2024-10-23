import styles from './Button.module.css'

import React from 'react'

const Button = ({isOutline, icon, text,...rest}) => {
  return (
    <div>
      <button {...rest} className={isOutline? styles.outline_btn:styles.primary_btn}>
      {icon}
     <span> {text}</span>
      </button>
    </div>
  )
}

export default Button
