import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import ProductList from './pages/ProductList';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';

function App() {
  return (
    <>
      <Navbar />
      <div className="conatainer mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/" element={<ProductList />}/>
          <Route path="/products/:id" element={<ProductDetails/>} />
          <Route path="/add-product" element={<AddProduct/>} />
          <Route path="/edit-product/:id" element={<EditProduct/> } />
        </Routes>
      </div>
    </>
  );
}

export default App;