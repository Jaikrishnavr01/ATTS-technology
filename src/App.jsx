import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Aupass from './Components/Aupass';
import Home from './Pages/Home';

function App() {
  

  return (
    <BrowserRouter>
      <Navbar />
      

      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="aupass" element={<Aupass />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
