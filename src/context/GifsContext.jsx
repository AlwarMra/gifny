import React, { useState } from 'react'

const Context = React.createContext({})

export function GifsContextProvider({ children }) {
  const [gifsSeen, setGifsSeen] = useState([])

  return (
    <Context.Provider value={{ gifsSeen, setGifsSeen }}>
      {children}
    </Context.Provider>
  )
}

export default Context
