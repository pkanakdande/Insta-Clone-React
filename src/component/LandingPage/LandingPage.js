import React from 'react';
import lens from "../images/lens.png"
import Nav from '../Nav';
import {Link} from "react-router-dom"
import "../css/landing.css"
export default function LandingPage() {
  return (
    <>
    <div id='parent-landing'>
    <div id='home'>
      <img src={lens}></img>
    </div>

    <div id='title'>
      <h1>10x Team</h1>
      <Link to="/instaclone"><button id="btnHome">Enter</button></Link>
    </div>
    </div>
    </>
  );
}
