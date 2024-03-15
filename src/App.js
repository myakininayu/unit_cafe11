import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Workers from './components/Workers/Workers';
import ProductsForm from './components/ProductsForm/ProductsForm';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/products" element={<Products/>} />
        <Route path="/workers" element={<Workers/>} />
        <Route path="/products_form" element={<ProductsForm/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
