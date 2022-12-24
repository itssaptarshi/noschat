import React from 'react'
import { Route } from 'react-router-dom'
import '../style/home.css'
import { Link } from 'react-router-dom'
import logo from '../image/NosChat.jpg'

const Home = () => {
    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        console.log(`Window width: ${width}`);
      });
    
  return (
    <div>
        <img src={logo} alt="My image" style={{ maxWidth:'50%' }}/>
        <h1 style={{color:'#0039a6'}}>Welcome To Noschat</h1>

        <p>An end-to-end encrypted messaging service using nostr.</p>
        <Link to='./Login'>
            <button>Login</button>
        </Link>

        {/* <button onClick={}>Login</button> */}
    </div>
  )
}

export default Home