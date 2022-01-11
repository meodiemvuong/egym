import React from "react";
import { Header,Footer } from "../components";
import { useEffect } from "react";
import EventList from "../components/EventList/EventList";


function EventPage(){
    useEffect(() => {
        window.document.title = 'Event'
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
                            <EventList/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default EventPage