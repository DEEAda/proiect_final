import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Home from './Home/Home';
import ProductDetails from './ProductDetails/ProductDetails';
import Products from './Products/Products';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:productId' element={<ProductDetails />} />
        <Route path='/categories' element={<div>Categories</div>} />
        <Route path='/cart' element={<div>Cart</div>} />
        <Route path='/faq' element={<div>FaQ</div>} />
        <Route path='/contact' element={<div>Contact</div>} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
      
      </BrowserRouter>

      <footer> Footer </footer>

    </div>
  );
}

export default App;
