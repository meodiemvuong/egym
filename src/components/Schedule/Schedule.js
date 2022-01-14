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
    var arr = []
    var t2=[], t3=[],t4=[],t5=[],t6=[], t7 =[], t8 =[]
    
    let url=`http://localhost:8080/cnpm/period-student/${id}`;  
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
    var event ={
    "Thứ 2":[],
    "Thứ 3":[],
    "Thứ 4":[],
    "Thứ 5":[],
    "Thứ 6":[],
    "Thứ 7":[],
    "Chủ nhật":[],};
    schedule.map((sche,index) => {
        arr.push({
            date: sche.dayOfWeek,
            endTime: new Date(`2018-02-23T${schedule[index].finish}`),
            id: index+1,
            name: `${schedule[index].content==null?"Không có nội dung":schedule[index].content} `,
            startTime: new Date(`2018-02-23T${schedule[index].start}`),
            type: 'error'
        })
        
        if(arr[index].date===2){
            event = {...event,
                "Thứ 2": t2 = t2.concat([arr[index]])
            }
        }
        if(arr[index].date===3){
            event = {...event,
                "Thứ 3": t3 = t3.concat([arr[index]])
            }
        }
        if(arr[index].date===4){
            event = {...event,
                "Thứ 4": t4 = t4.concat([arr[index]])
            }
        }
        if(arr[index].date===5){
            event = {...event,
                "Thứ 5": t5 = t5.concat([arr[index]])
            }
        }
        if(arr[index].date===6){
            event = {...event,
                "Thứ 6": t6 = t6.concat([arr[index]])
            }
        }
        if(arr[index].date===7){
            event = {...event,
                "Thứ 7": t7 = t7.concat([arr[index]])
            }
        }
        if(arr[index].date===8){
            event = {...event,
                "Chủ nhật": t8 = t8.concat([arr[index]])
            }
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
