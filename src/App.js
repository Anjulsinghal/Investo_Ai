import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Investo from './components/Investo';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exect path='/app' element={<Investo/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
