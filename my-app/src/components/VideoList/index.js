import styles from './VideoList.module.css';
import Card from '../Card';

function VideoList({videos, emptyHeading}){
    //Aqui controlamos o valor do emptyHeading de acordo com a quantidade de vídeos 
    const count = videos.length
    let heading = emptyHeading
    if(count > 0){
        const noun = count > 1 ? 'vídeos' : 'vídeo'
        heading = `${count} ${noun}`
    }
    

    // Aqui temos o card que irá mapear o videos.json para a exibição da lista de vídeos

    return(
        <>
            <h2>{heading}</h2>
            <section className={styles.videos}>
            { videos.map((video) => <Card id={video.id} key={video.id}/>)}
            </section>
        </>
    );
}

export default VideoList;