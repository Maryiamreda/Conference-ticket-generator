// import { useState } from 'react'
// import b from"./assets/images/background-desktop.png
import { useSelector } from 'react-redux';
import './App.css'
import Form from './components/form'

function App() {
  const { fullName, email, github, submit } = useSelector((state: any) => state.ticket);

  return (
    <div>
      {submit ? <div>NAME IS {fullName} , EMAIL IS {email} , GIHUB IS {github}</div> : <Form />}

    </div>
  )
}

export default App
