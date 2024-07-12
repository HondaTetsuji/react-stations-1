import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header'
import { ThreadList } from './ThreadList'
import { ThreadCreate } from './ThreadCreate'
import { ThreadPosts } from './ThreadPosts'
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ThreadList />} />
        <Route path="/thread/new" element={<ThreadCreate />} />
        <Route path="/thread/:thread_id" element={<ThreadPosts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
