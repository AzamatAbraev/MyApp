import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import PostsPage from "./pages/posts";
import ProductPage from "./pages/products/index";
import TodoPage from "./pages/todos";
import UsersPage from "./pages/users";
import ProductDetailPage from "./pages/products/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <h1>Page Not Found</h1>
  },
  {
    path: "/posts",
    element: <PostsPage />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
  {
    path: "/products/:productId",
    element: <ProductDetailPage />
  },
  {
    path: "/todos",
    element: <TodoPage />,
  },
  {
    path: "/users",
    element: <UsersPage />,
  },

]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
