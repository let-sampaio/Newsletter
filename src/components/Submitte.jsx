import React from 'react'
import './Home.css';

import { Link } from 'react-router-dom';

function Submitte() {
  return (
    <div className="caixa">
        <img src="src\img\icon-success.svg" alt="check-image" className="check-image" />
        <h1 className="txt">Thanks for subscribing!</h1>
        <p className="txt-menor">A confirmation email has been sent to <b>leticia.souzza14@gmail.com</b>
        . Please open it and click the button inside to confirm your subscription.</p>
        <Link to="/" className='btn-dismiss'>Dismiss message</Link>
    </div>
  )
}

export default Submitte;