import Slider from 'react-slick';
import './carousel.css';

function Carousel({children}){
    
    //primeiro passamos as configurações do carousel com uma variável de acordo com a documentação da lib

    const settings = {
        dots: false,
        infinite: false, //true
        speed: 300,
        centerMode: false,
        variableWidth: true,
        adaptiveHeight: true,
        //slidesToShow: 5,
        slidesToScroll: 1,
    }
    
    return(
        <div>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    );
}

export default Carousel;