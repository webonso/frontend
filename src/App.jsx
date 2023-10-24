import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
