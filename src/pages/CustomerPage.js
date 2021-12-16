import React from 'react'
import { Header, CustomerDetail, Footer } from './../components/'
function CustomerPage() {
    return (
        <>
            <Header />
            <div style={{
                marginTop: 'var(--header-height)'
            }}>
                <div className="grid">
                    <div className="row">
                        <div className="col l-10 l-o-1">
                            <CustomerDetail />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default CustomerPage
