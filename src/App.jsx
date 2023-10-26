import { useState } from 'react'
import NavBarForm from './components/NavBarForm';
import css from './App.module.css';
import Sidebar from './components/SideBar';
import Content from './components/Content';


function App() {

  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <Content />
    </div>

  )
}

export default App
