import React, { useEffect, useState } from 'react'
import { Banner, CustomerDetail, Footer, Header  } from '../components'
import Calendar from 'react-calendar'
import Content from '../components/Content/Content';

function Homepage() {

    let [date, setDate] = useState(new Date());



    useEffect(() => {
        window.document.title = 'Home'
    }, [])

    return (
        <>
            <Header />
            <Banner />
            <Content/>
            <Footer />
        </>
    )
}

export default Homepage
