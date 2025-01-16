import ErrorPage from "./ErrorPage/ErrorPage.jsx";
import Home from "./Home/Home.jsx";
import Shop from "./Shop/Shop.jsx";
import { CartProvider } from "../Context/CartContext.jsx";
import styles from "../index.module.css";

const routes = [
  {
    path: "/",
    element: (
      <CartProvider>
        <Home className={styles.app} />
      </CartProvider>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/shop",
    element: (
      <CartProvider>
        <Shop />
      </CartProvider>
    ),
  },
];

export default routes;
