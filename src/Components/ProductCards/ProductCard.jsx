import styles from "./ProductCard.module.css";
import PropTypes from "prop-types";

const ProductCard = ({
  title,
  price,
  image,
  category,
  onAddToCart,
  product,
}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.category}>{category}</p>
        <p className={styles.price}>${price.toFixed(2)}</p>
        <button className={styles.button} onClick={() => onAddToCart(product)}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
  category: PropTypes.string,
  onAddToCart: PropTypes.func,
  product: PropTypes.object,
};

export default ProductCard;
