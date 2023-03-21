
import React from 'react'
import { Navbar } from "react-chat-elements"
import { Avatar } from 'react-chat-elements'
import { ChangeEvent, useState } from 'react';


export default function Navbarr({ sidebar }) {
  const [file, setFile] = useState()
  const [fileUrl, setFileUrl] = useState("")
  function handleSubmit(event) {
    event.preventDefault()
    if (file) {
      const fileUrl =  URL.createObjectURL(file)
      setFileUrl(fileUrl)

      localStorage.setItem("file", JSON.stringify(fileUrl))


    }
    setFile(null)

  }
  function handleChange(event) {
    setFile(event.target.files[0]);

  }

  return (
    <div>
<div style={{border :"5px"}}>
<img src={fileUrl}/>
</div>


      <Navbar
        left=<div>

          <Avatar
            src="https://avatars.githubusercontent.com/u/80540635?v=4"
            alt="avatar"
            size="xlarge"
            type="rounded"
          />
          <div className="User">

            <label>Parshant</label>
          </div>

        </div>

        right={sidebar ?


          <form onSubmit={handleSubmit}>

            <input type="file" onChange={handleChange} />
            <button type="submit">Upload</button>
          </form>
          : null}
        type="light"
      />


    </div>
  )
}
