import React, { useState, useEffect } from 'react'
import Requirement from '../Requirement/Requirement';
import './Period.css'
// thoi khoa bieu cho student
function Period(id) {
    let [isClicked1, setIsClicked1]= useState(false);
    let [isClicked2, setIsClicked2]= useState(false);
    let [isClicked3, setIsClicked3]= useState(false);
    let [scheId, setScheId] = useState()
    let [schedule, setSchedule] = useState([{
        "dayOfWeek": null,
        "start": "",
        "finish":"",
        "studentNames": [],
        "timeId": null,
    }])
    let url=`http://localhost:8080/cnpm/schedule-trainer/${id}`;
    if(localStorage.getItem('role')==="student"){
        url=`http://localhost:8080/cnpm/schedule-student/${id}`;
    }
    const handleClick1 = ()=>{
        setIsClicked1(!isClicked1);
        
    }
    const handleClick2 = ()=>{
        setIsClicked2(!isClicked2);
        
    }
    const handleClick3 = ()=>{
        setIsClicked3(!isClicked3);
        
    }  
    useEffect(() => {
        console.log(url)
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
    return (
        
    <div  >
        <div>
            
            {localStorage.getItem('role')!=="trainer"&&
            <div>
            <h5 className="heading1">Thêm lịch tập</h5>
            <button className='trainerAddBtn'
            onClick={()=>{
                handleClick1();
                // setIsClicked1(false);
                setIsClicked2(false);
                setIsClicked3(false);
                
        }}>
        Thêm
        </button> 
        </div>
        }
        </div>
        <div>
        <table id="t01" >
        <tbody><tr>
          <th>Thứ</th>
          <th>Thời gian</th>
          {localStorage.getItem('role')==="trainer"&&<th>Học viên</th>}		
          {localStorage.getItem('role')==="student"&&<th>Yêu cầu</th>}
        </tr>
    {schedule.map((sche,index) => {   
        return(
        <tr>
        <td>{sche.dayOfWeek}</td>
        <td>{sche.start}-{sche.finish}</td>		
        {localStorage.getItem('role')==="trainer"&&<td>{sche.studentNames}</td>}
        {localStorage.getItem('role')!=="trainer"&&<td>
        
        
        
        <button className='trainerAddBtn'
            onClick={()=>{
                setScheId(sche.scheduleId)
                handleClick2();
                setIsClicked1(false);
                // setIsClicked2(false);
                setIsClicked3(false);
                
        }}>
        Sửa
        </button> 
        
        <button className='trainerAddBtn'
        onClick={()=>{
            setScheId(sche.scheduleId)
            handleClick3();
            setIsClicked1(false);
            setIsClicked2(false);
            // setIsClicked3(false);
        }}>
        Xoá
        </button>        
        </td>}
        
      </tr>)    
    })}    
    </tbody></table>
      </div>
      <div className = {(isClicked3)?"pop-up clicked":"pop-up"}>
            {Requirement(id,scheId,-1)}

        </div>
      <div className = {(isClicked2)?"pop-up clicked":"pop-up"}>
            {Requirement(id,scheId)}

        </div>
        <div className = {(isClicked1)?"pop-up clicked":"pop-up"}>
            {Requirement(id)}

        </div>
    </div>
    )
}
export default Period