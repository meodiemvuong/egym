import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import styles from './CustomerDetail.module.css'
import { useParams, } from 'react-router-dom'
import { AdminHeader, CustomerInfor } from './../';
import Timetablee from '../Schedule/Schedule';
import { Popup } from './../'
import addProfile from '../../api/addProfile';
import Schedule from './../../api/Schedule'
import  avat from './../../store/imgs/trainer1.jpg'
import RequirementItem from '../RequirementItem/RequirementItem';
import Period from '../Period/Period';
import axiosClient from '../../api/axiosClient';
// Trang này ở trong trang admin
// CustomerDetail sẽ gồm Header + CustomerInfor

function CustomerDetail({ admin }) {
    const id = useParams();
    
    let [showPopup, setShowPopup] = useState(false);
    useEffect(() => {
        if (showPopup) {
            var id1 = setTimeout(() => {
                setShowPopup(prev => !prev);
            }, 1000)
        }
        return () => {
            clearTimeout(id1);
        }
    }, [showPopup])
    let  [service,setService] = useState([{
        period_per_week: null,
        n_months: null,
        id: null,
        category: ""
    }])
    
    var ID ;
    if(id.id && localStorage.getItem('ID')==null){
        ID = id.id;
    } else if(localStorage.getItem('ID')!=null){
        ID = localStorage.getItem('ID');
    }
    else {
        ID = localStorage.getItem('IDS');
    }
    
    let [mychoice,setMychoice] = useState({
        category: "",
        id: parseInt(ID),
        service_id: null,
    })
    const handleAddservice = async(e)=>{
        setShowPopup(prev => !prev)
        var res = await addProfile.addService(mychoice);
        
    }
    const [items, setItems] = useState([])
    const hadndleAddtrainerID = async(e)=>{
        setShowPopup(prev => !prev)
        let params ={
            trainer_id: parseInt(localStorage.getItem('IDT')),
            student_id: parseInt(ID),
        }
        let response = Schedule.addTrainerId(JSON.stringify(params))
        console.log(response)
        if(response.error===null){
            alert(`Bạn đã đăng kí với HLV thành công`)
        }
    }
    var trainerID = null
    let [stutra, setStutra]= useState([
        {
            trainer_id:null
        }
    ])
    // const handleContent = async(e)=>{
    //     let url=`http://localhost:8080/cnpm/trainer-student?studentId=${ID}`
    //     console.log("click it")
    //     let res = await Schedule.getTrainerStudent(url)
    //     res.json()
    //     console.log(res)
    //     // var res = await addProfile.addService(mychoice);
    // }
    // useEffect(() => {
    //     let url=`http://localhost:8080/cnpm/trainer-student?studentId=${ID}`
    //     console.log("click it")
    //     let res =  Schedule.getTrainerStudent(url)
    //     console.log(res)
        
        
    //     },[]);
        
    useEffect(() => {
        let url=`http://localhost:8080/cnpm/trainer-student?studentId=${ID}`
        fetch(url)
            .then (response =>response.json())
            .then (data => setStutra(data.data))
        },[]);

    useEffect(() => {
    let url=`http://localhost:8080/cnpm/trainer`;
    fetch(url)
        .then (response =>response.json())
        .then (data => setItems(data.data))
    },[]);
    useEffect(() => {
        let url=`http://localhost:8080/cnpm/service`; 
        fetch(url)
            .then (response =>response.json())
            .then (data => {
                //console.log(data)
                if(data.error!="null"){
                    console.log("loi roi bro")
                    alert(data.error)
                    return ;
                } else{
                console.log("lay du lieu")
                setService(data.data); 
                }}).catch(e=>console.log(e))
            
        },[]);
        service.map((sev)=>{
            if(mychoice.category === sev.category){
                
                mychoice.service_id = sev.id
            }
        })
        
        if(stutra[0].trainer_id === null){
            trainerID = null;
        } else {
            trainerID = stutra[0].trainer_id;
        }
        console.log(stutra) 
    return (
        
        <div className={clsx(styles.customerWrapper)}>
            {admin && <AdminHeader heading="Thông tin học viên" />}
            <div className={clsx(styles.content)}>
                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Thông tin cá nhân</h2>
                    {CustomerInfor(ID)}
                    
                </section>
            <div>
            <section className={clsx(styles.contentField)}>
                { admin && 
                    <div className='Goitap' >
                        <h2 className={clsx(styles.heading)}>Chọn gói tập</h2>
                        <div className={clsx(styles.inforWrapper)} >
                                <div className={clsx(styles.inforContent)} >
                                    <select
                                        className={clsx(styles.inforText)}
                                        value={mychoice.category}
                                        onChange={(e) => {
                                            setMychoice(prev => ({
                                                ...mychoice,
                                                category: e.target.value
                                            }))
                                        }}
                                    >
                                        <option>RB3M</option>
                                        <option>RB6M</option>
                                        <option>RB12M</option>
                                        <option>PT3M</option>
                                        <option>PT6M</option>
                                        <option>PT12M</option>
                                        <option>VIP3M</option>
                                        <option>VIP6M</option>
                                        <option>VIP12M</option>
                                    </select>
                                    
                                </div>
                                <div className={clsx(styles.contentField)}  >
                                <button
                                    onClick={() => {
                                        let choice = window.confirm("bạn chắc kk")
                                        if(choice==true){
                                            handleAddservice(); 
                                            window.location.reload();
                                        } else {
                                            return
                                        }                                             
                                    }}
                                    className={clsx(styles.trainerAddBtn)}>
                                    Thêm gói tập
                                </button>
                                </div>
                        <div className='' >
                        
                        <div>
                            

                        </div>               
                        </div>
                            <Popup trigger={showPopup} message="Thêm thành công" />
                        </div>
                    </div>
                    
                }    
                <div>
                        {!trainerID && 
                            <div>
                                
                                    <div className={clsx(styles.inforContent)} >
                                
                                    <h2 className={clsx(styles.heading)}>Chọn huấn luyện viên</h2>
                                    <div className="row">
                                    {items.map((item,index)=>
                                    
                                        
                                    <div key ={index} classname="col-md-12">
                                    <div className="trainer-link" onClick={()=>{localStorage.setItem('IDT',item.id); }}>
                                    
                                        <div className="col">
                                        <div className="trainer-wrapper "
                                            style={{
                                            background: `url(${item.avatar!==null?item.avatar:avat}) no-repeat center / cover`,
                                            }} >
                                            
                                            <div className="trainer-infor" >
                                                <div className="trainer-name col">{item.name}</div>
                                                <div className="trainer-age col">{item.id}</div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            
                            )}
                            </div>
                            <div className={clsx(styles.contentField)}  >
                                    <button
                                        onClick={() => {
                                            hadndleAddtrainerID();                                        
                                        }}
                                        className={clsx(styles.trainerAddBtn)}>
                                        Chọn Huấn luyện viên
                                    </button>
                                </div>               
                            </div>
                                
                            </div>}
                        {items.map((item,index)=>{
                            return(
                            <div>
                                {trainerID===item.id &&
                            
                            <div>
                                <div className={clsx(styles.inforContent)} >
                                <h2 className={clsx(styles.heading)}>Huấn luyện viên của bạn</h2>
                                <div className="row">
                                <div classname="col-md-12">
                                <div className="trainer-link">
                                
                                    <div className="col">
                                    <div className="trainer-wrapper "
                                        style={{
                                        background: `url(${item.avatar!==null?item.avatar:avat}) no-repeat center / cover`,
                                        }}>
                                        
                                        <div className="trainer-infor" >
                                            <div className="trainer-name col">{item.name}</div>
                                            <div className="trainer-age col">{item.id}</div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        </div>
                        }
                            </div>)
                        })}
                </div>
                </section>
            </div>
                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Lịch tập luyện</h2>
                    {Timetablee(ID)}
                    
                </section>
            </div>
            <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Lịch tập</h2>
                    {Period(ID)}
                    
                </section>
            <div>
                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Yêu cầu của bạn</h2>
                    {RequirementItem(ID)}
                    
                </section>
            </div>
            
            <div>
            </div>
        </div>
    )
}

export default CustomerDetail