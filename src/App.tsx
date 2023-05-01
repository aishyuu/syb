import './App.css'
import Header from './components/header';
import Banner from './components/banner'
import { useEffect } from 'react';

function App() {

  return (
    <div className="homepage-main">
      <Header />
      <div className="banner-container">
        <Banner />
      </div>
    </div>
  )
}

export default App
