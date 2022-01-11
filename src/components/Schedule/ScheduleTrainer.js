import React, { useState, useEffect } from 'react'
import TimeTable from 'react-timetable-events'
// thoi khoa bieu cho student
function ScheduleTrainer(id) {
    let [schedule, setSchedule] = useState([{
        "dayOfWeek": null,
        "start": "",
        "finish":"",
        "studentNames": [],
        "timeId": null,
    }])
    
    
    
    
    let url=`http://localhost:8080/cnpm/schedule-trainer/${id}`;  
    useEffect(() => {

        fetch(url)
            .then (response =>response.json())
            .then (data => {
                // console.log(data)
                if(data.error[0]!=null){
                    console.log("loi roi bro")
                    alert(data.error)
                    return ;
                } else if(data.data[0].message){
                    alert(data.data[0].message)
                }else{
                console.log("lay du lieu")
                setSchedule(data.data); 
                }}).catch(e=>console.log(e))
        },[]);
    var arr = []
    var t2=[], t3=[],t4=[],t5=[],t6=[], t7 =[], t8 =[]
    // console.log(schedule)
    var event ={2:[],
        3:[],
        4:[],
        5:[],
        6:[],
        7:[],
        8:[],};
    schedule.map((sche,index) => {
        arr.push({
            date: sche.dayOfWeek,
            endTime: new Date(`2018-02-23T${schedule[index].finish}`),
            id: index+1,
            name: `Student ${schedule[index].studentNames}` ,
            startTime: new Date(`2018-02-23T${schedule[index].start}`),
            type: 'error'
        })
        
        if(arr[index].date===2){
            event = {...event,
                2: t2 = t2.concat([arr[index]])
            }
        }
        if(arr[index].date===3){
            event = {...event,
                3: t3 = t3.concat([arr[index]])
            }
        }
        if(arr[index].date===4){
            event = {...event,
                4: t4 = t4.concat([arr[index]])
            }
        }
        if(arr[index].date===5){
            event = {...event,
                5: t5 = t5.concat([arr[index]])
            }
        }
        if(arr[index].date===6){
            event = {...event,
                6: t6 = t6.concat([arr[index]])
            }
        }
        if(arr[index].date===7){
            event = {...event,
                7: t7 = t7.concat([arr[index]])
            }
        }
        if(arr[index].date===8){
            event = {...event,
                8: t8 = t8.concat([arr[index]])
            }
        }
    })
    // console.log(event)
    
    
    
    
    
    
    
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

export default ScheduleTrainer
