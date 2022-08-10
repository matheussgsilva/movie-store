import { useState } from 'react'
import * as C from './styles'
import Navbar from '../Navbar'
import CartSidebar from '../CartSidebar'
import OrderPopUp from '../OrderPopUp'

const Theme = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false)
    
    const handleShowSidebar = () => {
        setShowSidebar(!showSidebar)
    }

    return (
        <C.Container>
            <Navbar
                showCartSidebar={handleShowSidebar}       
            />
            <C.PopUp>
                <OrderPopUp />
            </C.PopUp>
            <C.Sidebar showSidebar={showSidebar} >
                <CartSidebar onHidden={handleShowSidebar} />
            </C.Sidebar>
            <C.Page>
                {children}
            </C.Page>
            <C.Footer></C.Footer>
        </C.Container>
    )
}

export default Theme