import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { Landing } from './Pages/Landing';
import MouseLight from './components/MouseLight';
import { AllProjects } from './Pages/AllProjects';

function App() {
  return (
    <div className='bg-[#000000] min-h-screen'>
      <Analytics/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/projects' element={<AllProjects />} />
        </Routes>
        <MouseLight color="22, 240, 150" size={1000} opacity={0.2} />
      </BrowserRouter>
    </div>
  );
}

export default App;
