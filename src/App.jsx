import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Counter from './components/Counter'

function App() {
  return (
    <>
      <ChakraProvider>
       <Counter/>
      </ChakraProvider>
    </>
  )
}

export default App
