import styles from './Banner.module.css';

function Banner({ image }){
    return(
        <div 
            className={styles.Banner}
            style = {{ backgroundImage: `url('/images/banner-${image}.png')` }}
        ></div>
    );
}

export default Banner;