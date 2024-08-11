import { useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Category, {categories, filtercategory} from "../../components/Category";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";



function Home() {

  //let nomeDigitado = ""
  function pegarNome(event){
    console.log(event.target.value)
    //nomeDigitado = event.target.value
    setNome(event.target.value)
  }

  //Hook = gancho -> useState

  const [nome, setNome] = useState();

  return (
    <>
    <Header />
    <Banner image="home" />
    <Container>    
    
      <input
      type= 'text'
      placeholder="Nome"
      // value='' impede que seja digitado texto na caixa de texto
      onChange={pegarNome}
      />

      <h2>{nome}</h2>

    {/* { categories.map((category, index)=> 
        <Category category={category}>
      {filtercategory(index).map((video) => {
          return <Card id={video.id} key={video.id}/> })}
      </Category>
      )} */}

    </Container>
    <Footer/>
    </>
  );
}

export default Home;
