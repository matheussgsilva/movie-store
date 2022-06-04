import { useParams } from 'react-router-dom'
import * as C from './styles'

const MovieDetail = () => {
    const params = useParams()
    
    return (
        <C.Container>
            Detalhe
        </C.Container>
    )
}

export default MovieDetail