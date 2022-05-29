import * as C from './styles'

const Home = () => {
    const movies = [
        {
            id: 0,
            name: 'Spider Man',
            release: 'março 2022',
            rating: 5,
            genre: 'Ação',
            price: 'R$9,90',
            poster: 'https://terrigen-cdn-dev.marvel.com/content/prod/1x/snh_online_6072x9000_posed_01.jpg'
        },
        {
            id: 1,
            name: 'Star Wars',
            release: 'fev 2020',
            rating: 6,
            genre: 'Ficção',
            price: 'R$19,90',
            poster: 'https://www.merchandisingplaza.com.br/280331/2/Posters-Star-Wars-Poster-Star-Wars-280331-l.jpg'
        },
        {
            id: 2,
            name: 'O Senhor dos Anéis',
            release: 'fev 2018',
            rating: 7,
            genre: 'Fantasia',
            price: 'R$19,00',
            poster: 'https://img.elo7.com.br/product/zoom/2692717/poster-o-senhor-dos-aneis-a-sociedade-do-anel-lo02-90x60-cm-presente-geek.jpg'
        }
    ]
    return (
        <C.Container>
            <ul>
            {movies.map(( movie ) => (
                <li key={movie.id}>{movie.name}</li>
                ))}
            </ul>
        </C.Container>
    )
}

export default Home