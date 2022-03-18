import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Cart from './Cart/Cart';
import Categories from './Categories/Categories';
import Contact from './Contact/Contact';
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
        <Route path='/categories' element={<Categories />} />
        <Route path='/categories/:categoryName' element={<div>Category details</div>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/faq' element={<div>FaQ</div>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
      
      </BrowserRouter>

      <footer> ©SDA Copyright </footer>

    </div>
  );
}

export default App;
