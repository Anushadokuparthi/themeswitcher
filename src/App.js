import { useState } from 'react';
import Header from './components/Header';
import Product from './components/Product';
// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeContext  from './context/ThemeContext';
import './App.css';

function App() {
  const themeHook = useState("dark");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div className="App">
        <Header/>
        <Product/>
      </div>
    </ThemeContext.Provider>    
  );
}

export default App;
