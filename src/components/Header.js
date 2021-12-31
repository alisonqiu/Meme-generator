import React from "react"
import troll from "./troll-face.png" 

export default function Header() {
    return (
        <header className="header">
            <img 
                src= {troll}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Built by Alison Qiu Through a React Course</h4>
        </header>
    )
}