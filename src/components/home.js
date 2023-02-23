import React, { useState } from 'react'
import axios from "axios"

import SideBar from './sideBar';


export default function Home() {

  const [name, setName] = useState("")
  const [age, setAge] = useState("")
  const [Email, setEmail] = useState("")
  const [Contact, setContact] = useState("")

  const [valid, setvalid] = useState(false)
  const [message, setMessage] = useState("")





  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() === "" || age.trim() === "" || Email.trim() === "" || Contact.trim() === "") {
      alert("Enter all the credentials!!")
    }

    if (name.trim() !== "" && age.trim() !== "" && Email.trim() !== "" && Contact.trim() !== "") {
      if (Contact.trim().length == 10 && name.trim().split("").every((val) => { return isNaN(val) })) {
        alert("form has been submited")
        axios.post("https://63f475483f99f5855dafe49b.mockapi.io/crud", {
          e_name: name,
          e_age: age,
          e_email: Email,
          e_contact: Contact

        })
      }
    }


    setName("")
    setAge("")
    setEmail("")
    setContact("")


  }


  let s = "!@#$%^&*()_-+=~`,.<>/?;:'{}[]\\|\"\""
  let g = s.split("")


  function nameinpt(e) {
    if ((e.split("").every(val =>  e[0]!==" "|| isNaN(val) && g.every(v => val != v) ))) {
      setvalid(false)
      setName(e)
    }
    else {
      setvalid(true)
      setMessage("Enter valid name")
    }
  }

  function ageinpt(e) {
    if (e.split("").every(val => !isNaN(val)&&e[0]!==" ") && e>-1 ) {
      setvalid(false)
      setAge(e)
    }
    else {
      setvalid(true)
      setMessage("Enter valid age")
    }
  }

  function contactinpt(e) {
    if (e.length <= 10 && e.split("").every(val => { return !isNaN(val) && g.every(v => val != v) && e[0]!==" "}) ) {
      setvalid(false)
      setContact(e)
    }
    else {
      setvalid(true)
      setMessage("Enter valid contact number")
    }
  }


  



  return (
    <div className="  justify-content-center w-100">

      <div className='p-5 row-2' >
        <div className="column  border border-dark  rounded-4   ">
          <h1 className="bg-dark p-3 text-center  rounded-bottom rounded-4 text-white">Create Data</h1>
          <div className="px-4 bg-transparent">
            <form className="form-group" onSubmit={handleSubmit}>
              <div>
                <label>Enter name:</label>
                <input type="text" className="form-control my-2" placeholder='name' value={name} onChange={(e) => nameinpt(e.target.value)}></input>
              </div>
              <div>
                <label>Enter age:</label>
                <input type="text" className="form-control my-2" placeholder='age' value={age} onChange={(e) => ageinpt(e.target.value)}></input>
              </div>
              <div>
                <label>Enter email:</label>
                <input type="email" className="form-control my-2" placeholder='email' value={Email} onChange={(e) => setEmail(e.target.value)}></input>
              </div>
              <div className='d-sm-grid gap-2'>
                <label>Enter Contact no.:</label>
                <input type='text' placeholder='contact no.' className="form-control my-2" value={Contact} onChange={(e) => contactinpt(e.target.value)} ></input>
              </div>
              <div className='d-sm-grid gap-2 d-flex'>
                {valid ? <div className="bg-danger p-2 text-center rounded-4 text-white">{message}</div> : null}
                <input type='submit' value="submit" className='btn btn-dark my-2' ></input>
              </div>
            </form>
          </div>

        </div>

      </div>
                     
    </div>
  )
}
