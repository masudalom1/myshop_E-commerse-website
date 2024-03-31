import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Card from './pages/Card';
import Category from './pages/Category';
import Login from './pages/Login';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Footer from './components/Footer/Footer';
import ShopContectProvider from './Shopcontext/Shopcontext';
import men_banner from "../src/assets/men_banner.png";
import women_banner from "../src/assets/women_banner.png";

function App() {
  return (
    <>
      <ShopContectProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/men' element={<Category banner={men_banner} Category="men" />} />
            <Route path='/women' element={<Category banner={women_banner} Category="women" />} />
            <Route path='/kids' element={<Category banner={women_banner} Category="kid" />} />
          
            <Route path='/product' element={<Product />}> 
              <Route path=':productId' element={<Product />} />
            </Route>
            
            <Route path='/card' element={<Card />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContectProvider>
    </>
  );
}

export default App;
