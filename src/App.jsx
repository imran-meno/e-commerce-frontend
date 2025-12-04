import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Login from './components/Login';
import Profile from './components/Profile';
import Admin from './components/Admin';
import Cart from './components/Cart'
import Logout from './components/Logout';
import Shop from './components/Shop';
import Address from './components/Address';

function App() {
  return (
   <BrowserRouter>
  <Routes>
    
    <Route path="/admin" element={<Admin />} />

   
    <Route
      path="/*"
      element={
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path='/viewcart' element={<Cart />} />
            <Route path="/logout" element={<Logout />} />
            <Route path='/product/:id' element={<Shop/>}/>
            <Route path='/address' element={< Address/>} />
          </Routes>
          <Footer />
        </>
      }
    />
  </Routes>
</BrowserRouter>


  );
}

export default App;
