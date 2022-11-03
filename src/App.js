import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import PodcastInfo from './components/PodcastInfo'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <br />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast/:id" element={<PodcastInfo />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
