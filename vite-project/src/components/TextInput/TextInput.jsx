import React from 'react'
import './TextInput.css'

function TextInput( {label, onInput} ) {
  return (
    <div className='text'>
        <label>{label}</label>
        <textarea onChange={(event)=>onInput(event.target.value)}></textarea>
    </div>
  )
}

export default TextInput