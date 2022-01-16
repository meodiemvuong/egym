import React, { useState } from 'react'
import clsx from 'clsx'
import { useEffect } from 'react'
import styles from './AddReview.module.css'
import { Popup } from './../'
import { useNavigate } from "react-router-dom";
import getEvent from '../../api/EventAPI';
import AdminHeader from '../AdminHeader/AdminHeader'

// Trang thêm huấn luyện viên

function AddReview(id) {
    let [userState, setUserState] = useState({});  
    let params = {
        "id": localStorage.getItem('ID'),
        "rate": userState.rate,
        "review": userState.review,
        "date": '2022-01-14',
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
    const handleAddReview = async(e)=>{
        console.log(params)
        // setShowPopup(prev => !prev)
        const response = await getEvent.addReview(params);
        if(response.error[0]){
            alert(response.error[0])
        }
        else{
        alert(response.data[0])
        window.location.reload();
        }
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
                      
                    Đánh giá chúng tôi</h1>
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
                                    <h3 className={clsx(styles.inforLabel)}>Thời gian</h3>
                                    <input
                                        className={clsx(styles.contentText)}
                                        type="date"
                                        name = 'expire'
                                        id = 'expire'
                                        onChange={(e)=>{
                                            const date = e.target.value.toString()
                                            setUserState({ ...userState, date });
                                        }                                           
                                        }
                                    />
                                </div>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Đánh giá</h3>
                                    <input
                                      className={clsx(styles.contentText)}
                                      type="text"
                                      name = 'title'
                                      id = 'title'
                                      onChange={(e)=>{
                                          const review = e.target.value
                                          setUserState({ ...userState, review });
                                      }                                           
                                      }  
                                    />
                                </div>
                                
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Số sao</h3>
                                    <select
                                        className={clsx(styles.contentText)}
                                        type="number"
                                        name = 'description'
                                        id = 'description'
                                        onChange={(e)=>{
                                            const rate = parseInt(e.target.value)
                                            setUserState({ ...userState, rate });
                                        }                                           
                                        }
                                    >
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        
                                    </select>
                                {/* <input
                                    className={clsx(styles.contentText)}
                                    type="number"
                                    name = 'description'
                                    id = 'description'
                                    onChange={(e)=>{
                                        const rate = parseInt(e.target.value)
                                        setUserState({ ...userState, rate });
                                    }                                           
                                    }
                                    /> */}
                            </div>
                            <div className={clsx(styles.contentField)}>
                                <button
                                    onClick={() => {
                                        handleAddReview();  
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
export default AddReview