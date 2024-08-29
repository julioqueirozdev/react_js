import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Category, {
  categories,
  filtercategory,
} from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Carousel from "../../components/Carousel";
import ScrollToTopButton from "../../components/ScrollToTopButton";

function Home() {
  return (
    <>
    <ScrollToTopButton/>
      <Header />
      <Banner image="home" />
      <Container>
        {categories.map((category, index) => (
          <Category category={category}>
            <Carousel>
              {filtercategory(index).map((video) => {
                return <Card id={video.id} key={video.id} />;
              })}
            </Carousel>
          </Category>
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
