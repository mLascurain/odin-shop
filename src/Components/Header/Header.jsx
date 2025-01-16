import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import CartButton from "../CartButton/CartButton";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link to="/shop" className={styles.navLink}>
              Shop
            </Link>
          </li>
        </ul>
        <div className={styles.cartIcon}>
          <CartButton className={styles.cart} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
