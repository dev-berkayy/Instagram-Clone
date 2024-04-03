import React from 'react'
import Home from './Pages/Home'
import Messages from './Pages/Messages'
import Profile from './Pages/Profile'
import Reels from './Pages/Reels'
import Explore from './Pages/Explore'
import "./Style Components/Sidebar.css"
import Links from './Links'

import { BrowserRouter, Routes, Route, } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='sidebar'>
            <Links />
        </div>
    )
}

export default Sidebar