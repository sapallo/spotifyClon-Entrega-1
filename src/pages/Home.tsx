import { songs } from '../data/songs'
import { SongCard } from '../components/SongCard'
import { Container } from '../components/Container'

export const Home = () => {
    return (
    <Container>
    {songs.map(song => (
        <SongCard key={song.id} song={song} />
    ))}
    </Container>
    )
}
