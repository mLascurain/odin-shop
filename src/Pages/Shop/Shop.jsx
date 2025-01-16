import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import ProductCard from "../../Components/ProductCards/ProductCard.jsx";
import styles from "./Shop.module.css";
import { CartContext } from "../../Context/CartContext.jsx";
import { useContext } from "react";

export default function Shop() {
  const { addItemToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    addItemToCart(product);
  };

  function useGetProducts(limit = 20) {
    const [products, setProducts] = useState([]);
    let url = `https://fakestoreapi.com/products?limit=${limit}`;

    useEffect(() => {
      async function fetchData(url) {
        try {
          const response = await fetch(url);
          if (!response.ok)
            throw new Error(
              `Error: ${response.status} - ${response.statusText}`
            );
          const data = await response.json();
          setProducts(data);
        } catch (error) {
          console.error("Fetching data failed:", error);
        }
      }
      fetchData(url);
    }, [url]);

    return products;
  }

  const products = useGetProducts(16);

  return (
    <>
      <Header />
      <div>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Shop Section</h1>
        </div>
        <div>
          {products.length > 0 ? (
            <div className={styles.cardContainer}>
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  image={product.image}
                  category={product.category}
                  onAddToCart={handleAddToCart}
                  product={product}
                />
              ))}
            </div>
          ) : (
            <p>...Loading</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
