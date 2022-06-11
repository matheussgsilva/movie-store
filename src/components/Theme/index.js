import { useState } from 'react'
import Navbar from '../Navbar'
import * as C from './styles'

const Theme = ({ children }) => {
    const [searchValue, setSearchValue] = useState('')
    console.log(searchValue)  

    return (
        <C.Container>
            <Navbar 
                search={value => setSearchValue(value)}
                onCartScreen={() => console.log('open Cart screen')}       
            />
            <C.Page>
                {children}
            </C.Page>
        </C.Container>
    )
}

export default Theme