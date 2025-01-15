import './MyButton.css'

function MyButton({count, onClick}){
return(
    <button onClick={onClick}>
        Clicado {count} vezes
    </button>
);

}

export default MyButton;