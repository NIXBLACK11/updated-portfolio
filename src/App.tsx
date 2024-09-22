import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from './Pages/Landing';
import MouseLight from './components/MouseLight';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className='bg-[#000000] min-h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/game' element={<Projects />} />
        </Routes>
        <MouseLight color="22, 240, 150" size={1000} opacity={0.2} />
      </BrowserRouter>
    </div>
  );
}

export default App;
