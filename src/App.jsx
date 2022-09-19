import React from 'react'
import { GifDetail, Home, SearchResults, NotFound } from './pages/index'
import { Header } from './components/index'
import { Routes, Route } from 'react-router-dom'
import { GifsContextProvider } from './context/GifsContext'

function App() {
  return (
    <div className='App min-h-screen flex flex-col bg-slate-700	'>
      <Header />
      <div className='max-w-6xl mx-auto my-0 p-4'>
        <GifsContextProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search/:keyword/' element={<SearchResults />} />
            <Route
              path='/search/:keyword/:rating'
              element={<SearchResults />}
            />
            <Route path='/gif/:id' element={<GifDetail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </GifsContextProvider>
      </div>
    </div>
  )
}

export default App
