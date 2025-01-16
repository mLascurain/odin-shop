import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Bienvenido a KiwStore</h1>
          <p className={styles.subtitle}>
            Encuentra lo mejor al alcance de tus manos.
          </p>
        </section>

        <section className={styles.features}>
          <h2 className={styles.featuresTitle}>¿Por qué elegir KiwStore?</h2>
          <div className={styles.cards}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Precios Increíbles</h3>
              <p className={styles.cardText}>
                Ofrecemos los mejores precios en productos de calidad.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Envíos Rápidos</h3>
              <p className={styles.cardText}>
                Recibe tus productos en tiempo récord en la puerta de tu hogar.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Atención Personalizada</h3>
              <p className={styles.cardText}>
                Estamos aquí para ayudarte en cada paso del proceso de compra.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2 className={styles.ctaTitle}>¿Qué esperas?</h2>
          <p className={styles.ctaText}>
            Explora nuestra tienda y encuentra lo que siempre has querido.
          </p>
          <Link to="/shop" className={styles.ctaButton}>
            Comprar Ahora
          </Link>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Home;
