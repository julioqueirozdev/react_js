import './Button.css';

function Button(){
    function handleClick(){
        alert('Você clicou no botão!')
    }


    return(
        <button className='button' onClick={handleClick}>Eu sou um botão!</button>
    );
}

export default Button;