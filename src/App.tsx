// import { useState } from 'react'
import LogoMark from './assets/images/logo-mark.svg'
// import b from"./assets/images/background-desktop.png
import './App.css'

function App() {

  return (
    <div>
      <div className="logo flex">
        <img src={LogoMark} />
        <h3> <b> Coding Conf</b>
        </h3>
      </div>
      <h1>  Your Journey to Coding Conf <br /> 2025 Starts Here!</h1>
      <p>  Secure your spot at next year's biggest coding conference.</p>
      <form>
        <div>
          <h4>  Upload Avatar </h4>
          <input type='file' />
        </div>
        <div>
          <h4>  Full Name </h4>
          <input type='text' />
        </div>
        <div>
          <h4>  Email Address          </h4>
          <input type='email' placeholder='  example@email.com' />
        </div>
        <div>
          <h4>  GitHub Username          </h4>
          <input type='text' placeholder='  @yourusername' />
        </div>
        <button>  Generate My Ticket
        </button>
      </form>

    </div>
  )
}

export default App
