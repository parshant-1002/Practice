import React from 'react'
import { MessageBox } from 'react-chat-elements';
export default function Component() {
  return (
    <div>

<MessageBox
  position={"left"}
  type={"text"}
  title={"Message Box Title"}
  text="Here is a text type message box"
/>
    </div>
  )
}
