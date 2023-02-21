import React, { useState } from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"


export default function Insert() {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [Email, setEmail] = useState("")
  const [Contact, setContact] = useState("")





  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() === "" || age.trim() === "" || Email.trim() === "") {
      alert("Enter all the credentials!!")
    }

    if (name.trim() !== "" && age.trim() !== "" && Email.trim() !== "") {
      alert("form has been submited")
      axios.post("https://63f34be2de3a0b242b3f2dbd.mockapi.io/crud", {
        e_name: name,
        e_age: age,
        e_email: Email

      })
    }

    setName("")
    setAge("")
    setEmail("")
    setContact("")


  }


  const show=useNavigate()




  return (
    <div className='mx-5 row-2 m-2  d-flex' >
      <div className="column m-5 border border-dark  rounded-4   w-25">
        <h1 className="bg-dark p-3 text-center  my-2 rounded-4 text-white">Create Data</h1>
        <div className="px-4 bg-transparent">
          <form className="form-group" onSubmit={handleSubmit}>
            <div>
              <label>Enter name:</label>
              <input type="text" className="form-control my-2" placeholder='name' value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div>
              <label>Enter age:</label>
              <input type="number" className="form-control my-2" placeholder='age' value={age} onChange={(e) => setAge(e.target.value)}></input>
            </div>
            <div>
              <label>Enter email:</label>
              <input type="email" className="form-control my-2" placeholder='email' value={Email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className='d-sm-grid gap-2'>
              <label>Enter Contact no.:</label>
              <input type='number' placeholder='contact no.' className="form-control my-2" value={Contact} onChange={(e) => setContact(e.target.value)} ></input>
            </div>
            <div className='d-sm-grid gap-2 d-flex'>
              <input type='submit' value="submit" className='btn btn-dark my-4' ></input>
              <div className="d-sm-grid row  ">
              <button className='btn btn-dark rounded-4 p-4 my-4' onClick={()=>{show("/Show")}} >Click to Show </button>
        </div> 
            </div>
            
          </form>
        </div>

      </div>
     

    </div>
  )
}
