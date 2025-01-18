// import { useState } from 'react'
// import b from"./assets/images/background-desktop.png
import { useSelector } from 'react-redux';
import './App.css'
import Form from './components/form'
import Ticket from './components/ticket';

function App() {
  const { submit } = useSelector((state: any) => state.ticket);

  return (
    <div>
      {submit ? <Ticket /> : <Form />}

    </div>
  )
}

export default App
