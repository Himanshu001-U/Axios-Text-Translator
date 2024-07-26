import React from 'react'
import "./LanguageInput.css"

function LanguageInput( {label, languages, onInput}) {
  return (
    <div className='input'>
        <label htmlFor="language">{label}</label>
        <select onChange={(event) => onInput(event.target.value)} name="language" id="">
            {languages.map((lang)=>(
                <option key={lang.code} value={lang.code}>{lang.name}</option>
            ))}
        </select>
    </div>
  )
}

export default LanguageInput