import React from 'react'
import './Home.css';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    
    <div className="container">
        <div className="image"><img src="src\img\illustration-sign-up-desktop.svg" alt="foto-capa" /></div>
        <h1 className="titulo">Stay updated!</h1>
        <p className="subtitulo">Join 60,000+ product managers
        receiving monthly updates on:</p>
        <ul className="lista">
            <img src="src\img\icon-list.svg" alt="icon-list" />
            <li>Product discovery and building what matters</li>
            <img src="src\img\icon-list.svg" alt="icon-list" />
            <li>Measuring to ensure updates are a sucess</li>
            <img src="src\img\icon-list.svg" alt="icon-list" />
            <li>And much more!</li>
        </ul>
        <p className="email-label">Email address</p>
        <input type="text" className="email-box" placeholder='email@company.com' />
        <Link to="/submitte" className='btn-sub'>Subscribe to monthly newsletter</Link>
    </div>
   
    </>
    
  )
}

export default Home