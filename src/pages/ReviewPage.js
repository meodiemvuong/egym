import React from "react";
import { Header,Footer } from "../components";
import { useEffect } from "react";
import ReadReview from "../components/ReadReview/ReadReview";

function ReviewPage(){
    useEffect(() => {
        window.document.title = 'Review'
    }, [])
    return (
        <>
            <Header/>
            <div style={{
                marginTop: 'var(--header-height)'
            }}>
                <div className="grid">
                    <div className="row">
                        <div className="col l-10 l-o-1">
                            <ReadReview/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default ReviewPage