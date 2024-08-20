import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Favourites.module.css";

function Favourites() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.favorites}>
           <h2>Meus Favoritos</h2> 
            Lista de Favoritos
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Favourites;
