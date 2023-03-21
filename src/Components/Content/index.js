import { Button, Input } from 'react-chat-elements'
import React from 'react'
import { MessageList } from "react-chat-elements"
import Navbarr from '../Navbar'
import "./styles.css"

export default function Content() {
  return (
    <div>
        <div className='contentNav'>

           <Navbarr></Navbarr>
        </div>

<MessageList
    className='message-list'
    lockable={true}
    toBottomHeight={'100%'}
    dataSource={[
    {
      position:"left",
      type:"text",
      title:"Kursat",
      text:"Give me a message list example !",
    },
    {
      position:"right",
      type:"text",
      title:"Emre",
      text:"That's all.",
    },
    ]}
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
