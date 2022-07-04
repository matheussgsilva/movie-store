import { useState } from 'react'
import * as C from './styles'
import Navbar from '../Navbar'
import CartSidebar from '../CartSidebar'

const Theme = ({ children }) => {
    const [searchValue, setSearchValue] = useState('')
    const [showSidebar, setShowSidebar] = useState(true)
    
    const handleShowSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    return (
        <C.Container>
            <Navbar 
                search={value => setSearchValue(value)}
                showCartSidebar={handleShowSidebar}       
            />
            <C.Sidebar showSidebar={showSidebar} >
                <CartSidebar />
            </C.Sidebar>
            <C.Page>
                {children}
            </C.Page>
        </C.Container>
    )
}

export default Theme