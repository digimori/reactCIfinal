import { useState } from 'react'
import NavBarForm from './components/NavBarForm';
import css from './App.module.css';
import Sidebar from './components/SideBar';
import ContentAPI from './components/ContentAPI';


function App() {

  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <ContentAPI />
    </div>

  )
}

export default App
