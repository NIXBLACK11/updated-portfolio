import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing } from './Pages/Landing';

function App() {
  return (
    <div className='bg-[#000000] h-screen w-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          {/* <Route path='/game' element={<GamePage />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
