import React, { useState, useRef } from 'react'
import clsx from 'clsx'
import getEvent from '../../api/EventAPI';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import styles from './EventDetail.module.css'
import { Popup } from './../'
import { useNavigate } from "react-router-dom";
import AdminHeader from '../AdminHeader/AdminHeader';

function EventDetail({ admin }) {
    const id = useParams();
    var ID ;
    ID = id.id;
    //console.log(ID)
    const navigate = useNavigate();
    const [item, setItems] = useState([])
    let [showPopup, setShowPopup] = useState(false);
    
    let url=`http://localhost:8080/cnpm/event?id=${ID}`;
    let params = {
        "id": parseInt(ID),
        "title": "",
        "description": "",
        "expire": "",
    }
    
    
    let [titleUpdating, settitleUpdating] = useState(false); 
    let [expireUpdating, setexpireUpdating] = useState(false);
    let [descriptionUpdating, setdescriptionUpdating] = useState(false);
    let expireRef = useRef(null);
    let titleRef = useRef(null);
    let descriptionRef = useRef(null);

    // sua su kien
    const handleUpdate = async () => {
        setShowPopup(prev => !prev)
        console.log("click update")
        const response = await  getEvent.updateEvent(params)
        if(response && response.status) setShowPopup(prev => !prev);
        if(response && response.data.error) {
            alert(response.data.error)
        }
    }
    
    // xoa su kien
    useEffect(() => {

    fetch(url)
        .then (response =>response.json())
        .then (data => setItems(data.data[0]))
    },[]);
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
    const handleDeleteEvent = async(e)=>{
        setShowPopup(prev => !prev)
        const response = await getEvent.deleteEvent(params); 
        console.log(response)
    }
    
    params = {
        ...item,
    }
    console.log(params)
    return (
        <div className="container_newfeed">
        <AdminHeader heading="Danh s??ch h???c vi??n" />
        <div className="page_top"></div>
        <div className="newfeed">
            <div className="page-link">
                
                </div>
            <div className="header_newfeed">
             {
                <h1 className="header_title">
                      
                    B??I VI???T M???I NH???T</h1>
             }
        </div>
        <div className="content_newfeed">
           
                        <div className="section">
                            <div className="image-wrapper">
                                <img className="image_link" src={item.picture} alt="" onClick={()=>{
                                     window.open('#');
                                }}/>      
                            </div>
                            <div className="info-wrapper">
                                <div className="red-dot"> Tin t???c &amp; S??? ki???n</div>
                                <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>K???t th??c</h3>
                                    <input
                                        readOnly={!expireUpdating}
                                        ref={expireRef}
                                        type="date"
                                        className={clsx(styles.contentText)}
                                        value={item.expire}
                                        onChange={(e) => {
                                            setItems(prev => ({
                                                ...item,
                                                expire: e.target.value
                                            }))
                                        }}
                                        id='trainer-expire' />
                                </div>
                                <div>
                                {
                                    !expireUpdating &&
                                    <label
                                        htmlFor='trainer-expire'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            expireRef.current.focus();
                                            setexpireUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Ch???nh s???a
                                    </label>
                                }
                                {
                                    expireUpdating &&
                                    <label
                                        htmlFor='trainer-expire'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setexpireUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        L??u l???i
                                    </label>
                                }
                                {
                                    expireUpdating &&
                                    <label
                                        htmlFor='trainer-expire'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setexpireUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        H???y
                                    </label>
                                }
                                </div>
                            </div>
                                {/* Tieu de */}
                                <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Ti??u ?????</h3>
                                    <input
                                        readOnly={!titleUpdating}
                                        ref={titleRef}
                                        type="text"
                                        className={clsx(styles.contentText)}
                                        value={item.title}
                                        onChange={(e) => {
                                            setItems(prev => ({
                                                ...item,
                                                title: e.target.value,
                                            }))
                                        }}
                                        id='trainer-name' />
                                </div>
                                {
                                    !titleUpdating &&
                                    <label
                                        htmlFor='trainer-name'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            titleRef.current.focus();
                                            settitleUpdating(prev => !prev)
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Ch???nh s???a
                                    </label>
                                }
                                {
                                    titleUpdating &&
                                    <label
                                        htmlFor='trainer-name'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            settitleUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        L??u l???i
                                    </label>
                                }
                                {
                                    titleUpdating &&
                                    <label
                                        htmlFor='trainer-name'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            settitleUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        H???y
                                    </label>
                                }
                            </div>
                                
                                {/* Mo ta su kien */}
                                <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>M?? t???</h3>
                                    <input
                                        readOnly={!descriptionUpdating}
                                        ref={descriptionRef}
                                        type="text"
                                        className={clsx(styles.contentText)}
                                        value={item.description}
                                        onChange={(e) => {
                                            setItems(prev => ({
                                                ...item,
                                                description: e.target.value,
                                            }))
                                        }}
                                        id='trainer-name' />
                                </div>
                                {
                                    !descriptionUpdating &&
                                    <div>
                                        <label
                                        htmlFor='trainer-name'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            descriptionRef.current.focus();
                                            setdescriptionUpdating(prev => !prev)
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Ch???nh s???a
                                    </label>
                                    </div>
                                }
                                {
                                    descriptionUpdating &&
                                    <label
                                        htmlFor='trainer-name'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setdescriptionUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        L??u l???i
                                    </label>
                                }
                                {
                                    descriptionUpdating &&
                                    <label
                                        htmlFor='trainer-name'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setdescriptionUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        H???y
                                    </label>
                                }
                            </div>
                            <div className={clsx(styles.contentField)}  >
                                
                                <i class="fas fa-save"></i>
                                <button
                                    onClick={() => {
                                        // showPopup = true;
                                        // setShowPopup(showPopup);
                                        let choice = window.confirm("b???n ch???c kk")
                                        if(choice==true){
                                            handleDeleteEvent();
                                        } else {
                                            return
                                        }
                                        
                                    }}
                                    className={clsx(styles.trainerAddBtn)}>
                                    Xo?? S??? ki???n
                                </button>
                            </div>    
                            </div>
                            
                            
                        </div>
                    
                
                        <Popup trigger={showPopup} message="Thay ?????i th??nh c??ng" />
        </div>
         <div className="page_bottom"></div>
    </div> 
    
    </div> 
    )
}

export default EventDetail