import React from 'react'
import "./styles.css"
export default function CustomButton({handleSubmit,buttonText}) {
  return (
    <div>
         <button className='customButton' onClick={handleSubmit} >{buttonText}</button>
    </div>
  )
}
