import React from 'react'
import style from './Button.module.css'
const Button = ({text,onClick}) => {
  return (
    <button onClick={onClick} className={style.button}>
    <span>{text}</span>
    <img className={style.arrow} src="/images/arrow-forward.png" alt="arrow" />
  </button>
  )
}

export default Button