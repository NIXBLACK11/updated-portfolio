import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from './Pages/Landing';
import MouseLight from './components/MouseLight';

function App() {
  return (
    <div className='bg-[#000000] h-screen w-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          {/* <Route path='/game' element={<GamePage />} /> */}
        </Routes>
        <MouseLight color="22, 240, 150" size={1000} opacity={0.1} />
      </BrowserRouter>
    </div>
  );
}

export default App;
