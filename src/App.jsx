import React from 'react'
import { GifDetail, Home, SearchResults } from './pages/index'
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
      <section>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search/:keyword' element={<SearchResults />} />
          <Route path='/gif/:id' element={<GifDetail />} />
        </Routes>
      </section>
    </div>
  )
}

export default App
