import React from 'react'
import { Header, Footer, TrainerDetail } from '../components'


function TrainerPage() {
    return (
        <>
            <Header />
            <div style={{
                marginTop: 'var(--header-height)'
            }}>
                <div className="grid">
                    <div className="row">
                        <div className="col l-10 l-o-1">
                            <TrainerDetail />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TrainerPage

