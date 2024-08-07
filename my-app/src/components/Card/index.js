import styles from "./Card.module.css";

function Card ({id}){
    return(
        <section className={styles.card}>
            <a  
            href={`https://youtu.be/${id}?si=ZWI6teMJWdfv1UV0`}
            rel='noreferrer noopener' /*evita que as pessoas usem o link de forma inadequada*/
            target='_blank'>
                <img src={`https:img.youtube.com/vi/${id}/mqdefault.jpg`} alt='capa' />
            </a>
        </section>
    );
}

export default Card;