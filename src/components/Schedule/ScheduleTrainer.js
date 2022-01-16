import React, { useState, useEffect } from 'react'
import TimeTable from 'react-timetable-events'
import Schedule from '../../api/Schedule'
// thoi khoa bieu cho student
function ScheduleTrainer(id) {
    let [schedule, setSchedule] = useState([{
        "dayOfWeek": null,
        "start": "",
        "finish":"",
        "studentNames": [],
        "timeId": null,
    }])
    let [params, setParams]=useState({
        id: parseInt(id),
        content:null,
        note:"",
        periodId: null,
    })
    let [content,setContent]=useState(null)
    const handleContent = async(e)=>{
        console.log("click it")
        let res = await Schedule.changeContent(params)
        window.location.reload()
        console.log(res)
        // var res = await addProfile.addService(mychoice);
    }
    
    let url=`http://localhost:8080/cnpm/period-trainer/${id}`;  
    useEffect(() => {

        fetch(url)
            .then (response =>response.json())
            .then (data => {
                // console.log(data)
                if(data.error[0]!=null){
                    console.log("loi roi bro")
                    // alert(data.error)
                    return ;
                } else if(data.data[0].message){
                    // alert(data.data[0].message)
                }else{
                console.log("lay du lieu")
                setSchedule(data.data); 
                }}).catch(e=>console.log(e))
        },[]);
    var arr = []
    var na = []
    var t2=[], t3=[],t4=[],t5=[],t6=[], t7 =[], t8 =[]
    // console.log(schedule)
    var event ={"Thứ 2":[],
        "Thứ 3":[],
        "Thứ 4":[],
        "Thứ 5":[],
        "Thứ 6":[],
        "Thứ 7":[],
        "Chủ nhật":[],};
    
    // console.log(arr)
    return (
        <div>
            {
                schedule.map((sche,index) => {
                    arr.push({
                        date: sche.dayOfWeek,
                        endTime: new Date(`2018-02-23T${schedule[index].finish}`),
                        id: index+1,
                        name: (schedule[index].studentName),
                        startTime: new Date(`2018-02-23T${schedule[index].start}`),
                        type: 'error',
                        periodId: sche.periodId
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
            }
            <div className=''>
                    
            {params.content && <button
                        className='trainerAddBtn'
                        onClick={()=>{
                            handleContent();
                        }}
                        >Lưu</button>}       
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
                        
                        
                        
                        <div>
                        { event.name.map((ev,index)=>{
                            return(
                            <button
                            style={{
                                
                                fontSize: '15px'
                            }}
                            className='trainerAddBtn'
                            onClick={()=>{
                            var cont = prompt(`Content mới`,'');
                            setContent(cont)
                            setParams({...params,content:cont,periodId: event.periodId[index] })
                        if(content != null)  {
                            // console.log(params)
                            
                        } 
                        }}
                        >
                            {event.name[index]}
                        </button>)
                        })
                        }

                        </div>
                        
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
