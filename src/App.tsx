import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import LoginPage from "./pages/auth";
import HomePage from "./pages/home";
import PostsPage from "./pages/posts";
import ProductPage from "./pages/products/index";
import ProductDetailPage from "./pages/products/ProductDetail";
import TodoPage from "./pages/todos";
import UsersPage from "./pages/users";
import NotFoundPage from "./components/not-found/NotFoundPage";
import DevelopmentPage from "./components/under-development/DevelopmentPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:productId" element={<ProductDetailPage />} />
        <Route path="/todos" element={<TodoPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin-dashboard" element={<DevelopmentPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
