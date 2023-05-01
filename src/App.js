import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/About';
import Contact from './component/Contact';

import Home from './component/Home';
import Service from './component/Service';
import Tips from './component/Tips';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/tips' element={<Tips />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>


    </>
  );
}

export default App;
