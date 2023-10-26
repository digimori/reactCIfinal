import { useState } from 'react'
import NavBarForm from './components/NavBarForm';
import css from './App.module.css';
import Sidebar from './components/SideBar';
import ContentAPIHooks from './components/ContentAPIHooks';


function App() {

  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <ContentAPIHooks />
    </div>

  )
}

export default App
