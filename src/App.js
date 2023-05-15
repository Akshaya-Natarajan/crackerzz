import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Pricelist from './components/Pricelist';
import Contact from './components/Contact';
import Safety from './components/Safety';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/About us' element={<About/>}/>
      <Route path='/Pricelist' element={<Pricelist/>}/>
      <Route path='/Safety tips' element={<Safety/>}/>
      <Route path='/Contact us' element={<Contact/>}/>
      </Routes>

      </BrowserRouter>
     
    </div>
  );
}

export default App;
