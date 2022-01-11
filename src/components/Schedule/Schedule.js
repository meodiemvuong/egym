import React, { useState, useEffect } from 'react'
import TimeTable from 'react-timetable-events'
// thoi khoa bieu cho student
function Timetablee(id) {
    let [schedule, setSchedule] = useState([{
        "dayOfWeek": 0,
        "start": "",
        "finish":"",
        "scheduleId": null,
        "trainerId": null,
        "message":"",
    }])
    
    
    
    let url=`http://localhost:8080/cnpm/schedule-student/${id}`;  
    useEffect(() => {

    fetch(url)
        .then (response =>response.json())
        .then (data => {
            if(data.error[0]!=null){
                console.log(data.error)
                return ;
            } else{
            if(data.data[0].message){
                console.log(data.data[0].message)
                return
            }
            setSchedule(data.data); 
            }}).catch(e=>console.log(e))   
    },[]);
    var event ={2:[],
        3:[],
        4:[],
        5:[],
        6:[],
        7:[],
        8:[],};
    
        schedule.map((sche,index) => {
        
            let thu = sche.dayOfWeek
            event = {...event,
                [thu]: [{
                    endTime: new Date(`2018-02-23T${schedule[index].finish}`),
                    id: index+1,
                    name: `ID Trainer ${schedule[index].trainerId} `,
                    startTime: new Date(`2018-02-23T${schedule[index].start}`),
                    type: 'error'
                }],
            }
        })
    return (
        <div>
            
            <div className=''>
                    
                    
            <TimeTable 
            
            events={{...event}}
            hoursInterval={{
                from: 5,
                to: 21
            }}
            renderEvent={({ event, defaultAttributes, classNames }) => {
                return (
                    <div {...defaultAttributes} title={event.name} key={event.id}
                        style={{
                            ...defaultAttributes.style,
                            borderRadius: '5px',
                            backgroundColor: 'var(--primary-color)',
                            
                        }}
                    >
                        <span 
                            className={classNames.event_info} 
                            style={{
                                color: 'white', 
                                fontSize: '15px'
                            }}
                        >
                            {event.name}
                        </span>
                    </div>
                );
            }}
            renderHour={({ hour, defaultAttributes }) => (
                <div
                    {...defaultAttributes}
                    key={hour}
                    style={{
                        ...defaultAttributes.style,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'var(--primary-color)',
                        fontSize: '13px'
                    }}
                >
                    {hour}
                </div>
            )}
            getDayLabel={(day) => day}
            timeLabel="Time"
        />           
            </div>
            
        </div>
    )
}

export default Timetablee
