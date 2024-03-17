import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';


function App() {
  return (
    <div className="App">
   
   <BrowserRouter>
   
   <Routes>

<Route path='/' element={<Home/>}></Route>
<Route path='/cart' element={<Cart/>}></Route>

   </Routes>
   
   </BrowserRouter>
   
    
  


    </div>
  );
}

export default App;
