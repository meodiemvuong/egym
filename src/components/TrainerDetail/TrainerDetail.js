import React from 'react'
import clsx from 'clsx'
import { AdminHeader,} from './../'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import styles from './TrainerDetail.module.css'
import TrainerInfor from '../TrainerInfor/TrainerInfor'
import ScheduleTrainer from '../Schedule/ScheduleTrainer'
import RequirementItem from '../RequirementItem/RequirementItem'
import Period from '../Period/Period'

function TrainerDetail({ admin }) {
    const id = useParams();
    var ID ;
    if(id.id){
        ID = id.id;
    } else if(localStorage.getItem('ID')!='null'){
        ID = localStorage.getItem('ID');
    }
    else {
        ID = localStorage.getItem('IDT');
    }
    let [schedule, setSchedule] = useState([{
        "route": null,
        "student_id": null,
        "comment":"",
        "id": null,
        "trainer_id": null,
    }])
    let url=`http://localhost:8080/cnpm/trainer-student?trainerId=${ID}`
    useEffect(() => {
        
        fetch(url)
            .then (response =>response.json())
            .then (data => {
                // console.log(data)
                
                console.log("lay schedu")
                setSchedule(data.data); 
            }).catch(e=>console.log(e))
        },[]);
    console.log(schedule)
    return (
        <div className={clsx(styles.wrapper)}>
            {admin && <AdminHeader heading="Thông tin huấn luyện viên" />}
            <div className={clsx(styles.content)}>
                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Thông tin cá nhân</h2>
                    {TrainerInfor(ID)}
                    
                </section>

                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Lịch huấn luyện</h2>
                    {ScheduleTrainer(ID)}
                </section>

                <section className={clsx(styles.contentField)}>
                </section>
                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Lịch tập</h2>
                    {Period(ID)}
                </section>
                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Yêu cầu thêm hoặc sửa lịch tập</h2>
                    {RequirementItem(ID)}
                </section>
                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Học viên</h2>
                    <table id="t01" >
        <tbody><tr>
          <th>Số thứ tự</th>
          <th>Tên học viên</th>
          {localStorage.getItem('role')==="trainer"&&<th>Height</th>}		
          {localStorage.getItem('role')==="trainer"&&<th>Weight</th>}
          {localStorage.getItem('role')==="trainer"&&<th>Bmi</th>}
        </tr>
    {schedule.map((sche,index) => {   
        return(
        <tr>
        <td>{index+1}</td>
        <td>{sche.name}</td>
        <td>{sche.height==null?"Chưa cập nhật":sche.height}</td>
        <td>{sche.height==null?"Chưa cập nhật":sche.weight}</td>
        <td>{sche.height==null?"Chưa cập nhật":sche.bmi}</td>
        {localStorage.getItem('role')!=="trainer"&&<td>
        
        
        
        <button className='trainerAddBtn'
            onClick={()=>{
                // setScheId(sche.scheduleId)
                
                
        }}>
        Sửa
        </button> 
        
        <button className='trainerAddBtn'
        onClick={()=>{
            // setScheId(sche.scheduleId)
            // handleClick3();
            // setIsClicked1(false);
            // setIsClicked2(false);
            // setIsClicked3(false);
        }}>
        Xoá
        </button>        
        </td>}
        
      </tr>)    
    })}    
    </tbody></table>
                </section>
            </div>
        </div>
    )
}

export default TrainerDetail
