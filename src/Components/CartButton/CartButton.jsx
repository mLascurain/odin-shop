import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext.jsx";
import styles from "./CartButton.module.css";

const CartButton = () => {
  const { cart, addItemToCart, decrementItemFromCart, clearItemFromCart } =
    useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div>
      <button onClick={toggleModal} className={styles.button}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path d="M6 2L3 6l1 10h14l1-10-3-4h-9z" />
        </svg>
        <span className={styles.badge}>{cart.length}</span>
      </button>

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Carrito de compras</h2>
            {cart.length === 0 ? (
              <p className={styles.emptyCart}>El carrito está vacío</p>
            ) : (
              <>
                <div className={styles.total}>
                  Total: ${calculateTotal().toFixed(2)}
                </div>
                <ul className={styles.list}>
                  {cart.map((item) => (
                    <li key={item.id} className={styles.listItem}>
                      <div className={styles.itemDetails}>
                        <span className={styles.itemName}>{item.title}</span>
                        <span className={styles.itemPrice}>
                          ${item.price.toFixed(2)} x {item.quantity}
                        </span>
                      </div>
                      <div className={styles.quantityControls}>
                        <button
                          onClick={() => decrementItemFromCart(item)}
                          className={styles.quantityButton}
                        >
                          -
                        </button>
                        <span className={styles.quantity}>{item.quantity}</span>
                        <button
                          onClick={() => addItemToCart(item)}
                          className={styles.quantityButton}
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => clearItemFromCart(item)}
                        className={styles.removeButton}
                      >
                        Eliminar
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
            <button onClick={toggleModal} className={styles.closeButton}>
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartButton;
