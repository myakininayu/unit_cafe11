import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Workers from './components/Workers/Workers';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/products" element={<Products/>} />
        <Route path="/workers" element={<Workers/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
