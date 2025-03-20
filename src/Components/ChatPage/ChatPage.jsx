import React from 'react'
import './ChatPage.css'
import './mediaChatPage.css'
import SidebarDash from '../SidebarDash/SidebarDash'
import Chats from './Chats/Chats'

export default function ChatPage() {
  return (
    <div className='container'>
      <SidebarDash />

      <div className="container-chat-page">
        <h3 className="title-chat-page">پیام های دریافتی</h3>
        <Chats />
        <Chats />
        <Chats />
      </div>
    </div>
  )
}
