import React, { useEffect, useState } from 'react'
import { Banner, CustomerDetail, Footer, Header  } from '../components'
import Calendar from 'react-calendar'

function Homepage() {

    let [date, setDate] = useState(new Date());



    useEffect(() => {
        window.document.title = 'Home'
    }, [])

    return (
        <>
            <Header />
            <Banner />
            <Footer />
        </>
    )
}

export default Homepage
