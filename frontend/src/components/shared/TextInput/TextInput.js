import React from 'react';
import style  from './TextInput.module.css';
const TextInput = (props) => {
  return ( 
    <div>
        <input className={style.input} type="text" {...props} />
    </div>
  )
}

export default TextInput