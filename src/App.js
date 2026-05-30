import {BrowserRouter, Routes,Route} from "react-router-dom"
import './App.css';
import HomePage from "./pages/homepage";
import AboutPage from "./pages/about";
import CheckoutPage from "./pages/checkout";
import ProductPage from "./pages/product";

function App() {
  return (
   <BrowserRouter>
   <Routes>

    <Route path="/" element={<HomePage/>} />
    <Route path="/product" element={<ProductPage/>} />
    <Route path="/checkout" element={<CheckoutPage/>} />
    <Route path="/about" element={<AboutPage/>} />

    

   </Routes>
   </BrowserRouter>
  );
}

export default App;
