import React from 'react'
import { GifDetail, Home, SearchResults, NotFound } from './pages/index'
import { Header, Footer } from './components/index'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='App min-h-screen flex flex-col bg-slate-700	'>
      <Header />
      <div className='max-w-6xl mx-auto my-0 p-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:keyword' element={<SearchResults />} />
          <Route path='/gif/:id' element={<GifDetail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
