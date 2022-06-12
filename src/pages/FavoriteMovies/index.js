import * as C from './styles'
import Theme from '../../components/Theme'
import { useApp } from '../../provider/AppProvider'

const FavoriteMovies = () => {
    const { favoriteMovies } = useApp()

    console.log(favoriteMovies)

    return (
        <Theme>
            <C.Container>
                Lista de Favoritos
            </C.Container>
        </Theme>
    )
}

export default FavoriteMovies