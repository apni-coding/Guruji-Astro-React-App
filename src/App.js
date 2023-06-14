import * as React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import Homepage from './pages/Homepage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <ChakraProvider>
      <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  )
}