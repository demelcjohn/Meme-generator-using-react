import React from "react"
import trollFace from '../images/troll-face.jpg'

export default function Header(){
    return (
        <header className="header">
            <img src={trollFace} alt="" className="header--image"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">DCJ's React Project</h4>
        </header>
    )
}