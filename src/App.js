import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route,Routes } from 'react-router-dom';

import Chat from './screens/chat';
import Login from './screens/login';
import Register from './screens/register';
import Home from './screens/Home';

function App() {


  
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/chat' element={<Chat/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
