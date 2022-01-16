import React, { useEffect, useState } from 'react'
import AddReview from '../components/AddReview/AddReview';
import { Footer, Header } from './../components'
function AddReviewPage() {
    useEffect(() => {
        window.document.title = 'Review'
    }, [])

    return (
        <>
            <Header/>
            {AddReview(localStorage.getItem('ID'))}
            <Footer/>
        </>
    )
}

export default AddReviewPage