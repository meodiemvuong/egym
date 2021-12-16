import React, { useEffect } from 'react'
import { Login, Footer } from '../components'

function Loginpage() {

    useEffect(() => {
        window.document.title = 'Login'
        
    }, [])

    return (
        <>
            <Login />
            <Footer />
        </>
    )
}

export default Loginpage
