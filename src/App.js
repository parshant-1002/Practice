import { MessageList } from "react-chat-elements"
import logo from './logo.svg';
import './App.css';
import React from 'react';
import "react-chat-elements/dist/main.css"
import Config from "./Components/Config";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import { createContext, useState } from 'react';
export const ContextObj = createContext();
function App() {
  let [displayChats, setDisplayChats] = useState(Config.ChatSideBar.dataSource);
  return (

    <ContextObj.Provider value={{ displayChats, setDisplayChats }}>
    <div className="main">
     

      <div className="sidebar">

        <Sidebar />
      </div>
      <div className="content">
      <Content></Content>
      </div>

    </div>
    </ContextObj.Provider>
  );
}

export default App;
