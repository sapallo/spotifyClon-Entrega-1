import styles from './SongCard.module.css'
import type { Song } from '../data/songs'

interface Props {
    song: Song
}

export const SongCard = ({ song }: Props) => {
    return (
    <div className={styles.card}>
    <img src={song.cover} alt={song.title} />
    <h3>{song.title}</h3>
    <p>{song.artist}</p>
    </div>
)
}
