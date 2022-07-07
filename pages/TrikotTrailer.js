import styles from '../styles/Trailer.module.css'

export default function TrikotTrailer() {
    return (
        <div className={styles.BackgroundImage}>
            <h1 className={styles.TrikotTrailerTitle}>Trikot Trailer</h1>
            <div className={styles.video}>
                <iframe className={styles.iframe} src="https://www.youtube.com/embed/GVd9wGtt-ww" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
            </div>
        </div>
    )
}