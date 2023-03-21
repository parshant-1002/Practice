import React, { useContext, useEffect } from 'react'
import Navbarr from '../Navbar'
import { ChatList } from 'react-chat-elements'
import "./styles.css"
import Search from '../Search'
import { ContextObj } from '../../App'
import Config from '../Config'
export default function Sidebar() {
    const {displayChats,setDisplayChats} = useContext(ContextObj);
    useEffect(()=>{
      setDisplayChats(Config.ChatSideBar.dataSource)
      console.log("displayChats in effect ", displayChats)
    },[])
  return (
    <div>
        <div className='chatNav'>

        <Navbarr></Navbarr>
        </div>
        <div className="chatList">
        <div>
        <Search
        placeholder="Search..."
      />
        </div>

        <ChatList dataSource = {displayChats}></ChatList>
        </div>
    </div>
  )
}
