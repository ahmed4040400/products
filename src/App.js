import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";
import ShoppingList from "./pages/shoping";
import Login from "./pages/login";
import Register from "./pages/register";
import Products from "./pages/admin/products";
import Orders from "./pages/admin/order";
import AdminLogin from "./pages/admin/adminLogin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shopping" element={<ShoppingList />} />
        <Route path="/adminProducts" element={<Products />} />
        <Route path="/adminOrders" element={<Orders />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
