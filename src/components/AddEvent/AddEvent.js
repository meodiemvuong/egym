import React, { useState } from 'react'
import clsx from 'clsx'
import { useEffect } from 'react'
import styles from './AddEvent.module.css'
import { Popup } from './../'
import { useNavigate } from "react-router-dom";
import getEvent from '../../api/EventAPI';


// Trang thêm huấn luyện viên

function AddEvent() {
    let [userState, setUserState] = useState({});  
    let params = {
        "title": userState.title,
        "description": userState.description,
        "expire": userState.expire,
        // "category": userState.category,
    }
    const navigate = useNavigate();
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
    const handleAddEvent = async(e)=>{
        setShowPopup(prev => !prev)
        const response = await getEvent.addEvent(JSON.stringify(params));
        
    }
    return (
        
        <div className="container_newfeed">
        <div className="page_top"></div>
        <div className="newfeed">
            <div className="page-link">
                
                </div>
            <div className="header_newfeed">
             {
                <h1 className="header_title">
                      
                    BÀI VIẾT MỚI</h1>
             }
        </div>
        
        <div className="content_newfeed">
            
                        <div className="section">
                            <div className="image-wrapper">
                                <img className="image_link"  alt="" onClick={()=>{
                                     window.open('#');
                                }}/>      
                            </div>
                            <div className="info-wrapper">
                                <div className="red-dot"> Tin tức &amp; Sự kiện</div>
                                
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Kết thúc</h3>
                                    <input
                                        className='timeinput'
                                        type="date"
                                        name = 'expire'
                                        id = 'expire'
                                        onChange={(e)=>{
                                            const expire = e.target.value.toString()
                                            setUserState({ ...userState, expire });
                                        }                                           
                                        }
                                    />
                                </div>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Tiêu đề</h3>
                                    <input
                                      className='title'
                                      type="text"
                                      name = 'title'
                                      id = 'title'
                                      onChange={(e)=>{
                                          const title = e.target.value
                                          setUserState({ ...userState, title });
                                      }                                           
                                      }  
                                    />
                                </div>
                                
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Mô tả</h3>
                                <input
                                    className='description'
                                    type="text"
                                    name = 'description'
                                    id = 'description'
                                    onChange={(e)=>{
                                        const description = e.target.value
                                        setUserState({ ...userState, description });
                                    }                                           
                                    }
                                    />
                            </div>
                            <div className={clsx(styles.contentField)}>
                                
                                <i class="fas fa-save"></i>
                                <button
                                    onClick={() => {
                                        handleAddEvent();  
                                    }}
                                    className={clsx(styles.trainerAddBtn)}>
                                    Thêm Sự kiện
                                </button>
                            </div>
                            </div>
                            
                        </div>
                        
            
            
        </div>
        <Popup trigger={showPopup} message="Thêm thành công" />
         <div className="page_bottom"></div>
    </div> 
    
    </div> 
            
    )
}
export default AddEvent