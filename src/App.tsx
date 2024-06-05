import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import ListingBody from './components/ListingBody'
import { ContextCountProduct } from './utils/context-count-product';

function App() {

  const [contextCountProduct, setContextCountProduct] = useState<number>(0);

  return (
    <ContextCountProduct.Provider value={{ contextCountProduct, setContextCountProduct }}>
      <Header />
      <ListingBody />
    </ContextCountProduct.Provider>
  )

}

export default App
