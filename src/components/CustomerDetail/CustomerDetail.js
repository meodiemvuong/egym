import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import styles from './CustomerDetail.module.css'
import { useParams, } from 'react-router-dom'
import { AdminHeader, CustomerInfor } from './../';
import Timetablee from '../Schedule/Schedule';
import { Popup } from './../'
import addProfile from '../../api/addProfile';
import Schedule from './../../api/Schedule'
import Requirement from '../Requirement/Requirement';
import RequirementItem from '../RequirementItem/RequirementItem';
import Period from '../Period/Period';
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
    let url=`http://localhost:8080/cnpm/service`; 
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
        if(response.error===null){
            alert(`Bạn đã đăng kí với HLV thành công`)
        }
    }
    
    let [stutra, setStutra]= useState([
        {
            trainer_id: null
        },
    ])
    useEffect(() => {
        let url=`http://localhost:8080/cnpm/trainer-student?studentId=${ID}`;
        fetch(url)
            .then (response =>response.json())
            .then (data => {
            
            setStutra(data.data)
        })
        },[]);
    useEffect(() => {
    let url=`http://localhost:8080/cnpm/trainer`;
    fetch(url)
        .then (response =>response.json())
        .then (data => setItems(data.data))
    },[]);
    useEffect(() => {

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
        // console.log(stutra[0])
        var trainerID = null
        if(stutra[0]===undefined){
            // console.log("Th nay")
            trainerID = null
        } else {
            // console.log("co Id")
            trainerID = stutra[0].trainer_id;
        }
        // trainerID = stutra[0].trainer_id;
        
        
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
                                
                                <i class="fas fa-save"></i>
                                <button
                                    onClick={() => {
                                        let choice = window.confirm("bạn chắc kk")
                                        if(choice==true){
                                            handleAddservice(); 
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
                            {!trainerID && 
                            <div>
                                
                                    <div className={clsx(styles.inforContent)} >
                                
                                    <h2 className={clsx(styles.heading)}>Chọn huấn luyện viên</h2>
                                    <div className="row">
                                    {items.map((item,index)=>
                                    
                                        
                                    <div key ={index} classname="col-md-12">
                                    <div className="trainer-link" onClick={()=>{localStorage.setItem('IDT',item.id); }}>
                                    
                                        <div className="col">
                                        <div className="trainer-wrapper ">
                                            
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
                                    
                                    <i class="fas fa-save"></i>
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
                                {trainerID===item.id && items[trainerID-1] &&
                            
                            <div>
                                <div className={clsx(styles.inforContent)} >
                                <h2 className={clsx(styles.heading)}>Huấn luyện viên của bạn</h2>
                                <div className="row">
                                <div classname="col-md-12">
                                <div className="trainer-link">
                                
                                    <div className="col">
                                    <div className="trainer-wrapper ">
                                        
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
                        </div>
                            <Popup trigger={showPopup} message="Thêm thành công" />
                            </div>
                    </div>
                    
                }    
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