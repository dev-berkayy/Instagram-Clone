import { Link } from "react-router-dom"
import "./SecondMenu.css"
import React from 'react'
import { Home } from "../../../Icons"
import { Explore } from "../../../Icons"
import { Reels } from "../../../Icons"
import { Messenger } from "../../../Icons"
import { CreatePost } from "../../../Icons"
function SecondMenu() {
    return (


        <div className="bottommenucontent">
            <Link to="/"> <Home></Home> </Link>
            <Link to="/explore"> <Explore></Explore> </Link>
            <Link to="/reels"> <Reels></Reels> </Link>
            <Link > <CreatePost></CreatePost> </Link>
            <Link > <Messenger></Messenger> </Link>
            <Link to="/profile"> <img src="https://avatars.githubusercontent.com/u/152439115?v=4" alt="" /> </Link>
        </div>
    )
}

export default SecondMenu