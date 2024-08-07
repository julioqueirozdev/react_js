import Banner from "./components/Banner";
import Card from "./components/Card";
import Category from "./components/Category";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import videos from './json/videos.json';

const categories = [
  'Geografia',
  'Como fazer e usar',
  'Astronomia e Geografia',
  'Climatologia, Meteorologia, Vegetação',
  'Geologia e Hidrografia'
]

function filtercategory(id){
  return videos.filter(video => video.category === categories[id])
}

function App() {
  return (
    <>
    <Header />
    <Banner image="home" />
    <Container>
      <Category category={categories[0]}>
      { filtercategory(0).map((video) => {
          return <Card id={video.id} key={video.id}/> })}
      </Category>
      
      <Category category={categories[1]}>
      { filtercategory(1).map((video) => {
          return <Card id={video.id} key={video.id}/> })}
      </Category>
        
      <Category category={categories[2]}>
      { filtercategory(2).map((video) => {
          return <Card id={video.id} key={video.id}/> })}
      </Category>
        
      <Category category={categories[3]}>
      { filtercategory(3).map((video) => {
          return <Card id={video.id} key={video.id}/> })}
      </Category>
        
      <Category category={categories[4]}>
      { filtercategory(4).map((video) => {
          return <Card id={video.id} key={video.id}/> })}
      </Category>

    </Container>
    <Footer/>
    </>
  );
}

export default App;
