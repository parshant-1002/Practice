import { Button, Input } from 'react-chat-elements'
import React from 'react'

import { MessageBox } from 'react-chat-elements'
import { MessageList } from "react-chat-elements"
import Navbarr from '../Navbar'
import "./styles.css"

export default function Content() {
  const fileData = JSON.parse(localStorage.getItem("file"));
  console.log(fileData,"data")


  return (
    <div>
      
      <div className='contentNav'>

        <Navbarr sidebar={true}></Navbarr>
      </div>
      <MessageList
        className='message-list'
        lockable={true}
        toBottomHeight={'100%'}
        dataSource={[
          {
            position: "left",
            type: "text",
            title: "Kursat",
            text: "Give me a message list example !",
          },
          {
            position: "right",
            type: "text",
            title: "Emre",
            text: "That's all.",
          },
        ]}
      />
        <img src={fileData}/>
                
   <MessageBox
  position={"left"}
  type={"photo"}
  title={"Kursat"}
  data={{
      uri:{fileData},
  }}
/>
      <div className="input">

        <div className='messageinput'>

          <Input
            placeholder="Type here..."
            multiline={true}
          />
        </div>
        <div className='messagebutton'>

          <Button text={"Send"} onClick={() => alert("Sending...")} title="Send" />
        </div>
      </div>

    </div>
  )
}
