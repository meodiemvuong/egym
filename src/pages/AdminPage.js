import React, { useEffect } from 'react'
import { Admin, Footer } from './../components'
import { useNavigate } from 'react-router-dom'

function AdminPage() {
    const navigate = useNavigate();
    useEffect(() => {
        if(0) navigate('/');
    }, [])
    return (
        <>
            <Admin />
            {/* <Footer /> */}
        </>
    )
}

export default AdminPage
