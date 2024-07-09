import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header'
import { ThreadList } from './ThreadList'
import { ThreadCreate } from './ThreadCreate'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ThreadList />} />
        <Route path="/thread" element={<ThreadCreate />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
