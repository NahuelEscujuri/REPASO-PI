import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx'
import CreateCharacter from './components/CreateCharacter.jsx';
import './App.css';
function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route exact path={"/"} element={<Home />}/>
      <Route exact path={"/create"} element={<CreateCharacter />}/>
    </Routes>
    </>
  )
}

export default App;
