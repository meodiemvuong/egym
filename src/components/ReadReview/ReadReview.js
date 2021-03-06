import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { AdminHeader,} from './../'
import styles from './ReadReview.css'
import { Link } from 'react-router-dom'
import Review from '../../api/Review'
function ReadReview({admin}) {
    const [items, setItems] = useState([])
    let url=`http://localhost:8080/cnpm/review-admin`;
    if(admin){
        url=`http://localhost:8080/cnpm/read-review`;
    }
    useEffect(() => {

    fetch(url)
        .then (response =>response.json())
        .then (data => setItems(data.data))
    },[]);
    const handleAccept = async(id)=>{
        console.log("hello")
        let res = await Review.Accept({
            studentId: id,
            action: true
        })
        if(res.data[0]){
            console.log(res)
            window.location.reload();
        }
    }
    const handleDeny = async(id)=>{
        let res = await Review.Accept({
            studentId: id,
            action: false
        })
        if(res.data[0]){
            window.location.reload();
        }
    }
    return (
        <div className={clsx(styles.wrapper)}>
            
            
            <div className={clsx(styles.content)}>
                {   
                    <div className="contentHeader">
                    <div className="option">
                    {admin && <AdminHeader heading="Thông tin phản hồi" />}
                        <Link to='/review/add' className="optionBtn">
                            <i className={clsx(styles.optionIcon, "fas", "fa-file-plus")}></i>
                            Thêm
                        </Link>
                    </div>
                </div>}
                <div className="grid">
                    <div className="container">
                    <div className="container_newfeed">
        <div className="page_top"></div>
        <div className="newfeed">
            <div className="page-link">
                
                </div>
            <div className="header_newfeed">
             {
                <h1 className="header_title">
                      
                    Các bài đánh giá</h1>
             }
             
        </div>
        <div className="content_newfeed">
            {
                
                items.map((item , index)=>{
                    return(
                        <div className="section">
                            <div className="image-wrapper">
                                <img className="image_link" src={item.picture} alt="" onClick={()=>{
                                    window.open('#');
                                }}/>      
                            </div>
                            <div className="info-wrapper">
                                <div className="red-dot" style={{fontWeight:'bold'}}>Đánh giá của {item.name}</div>
                                <div className="date">
                                    
                                    <h4>Ngày đánh giá: {(item.date.split('-').reverse()+"").replace(/,/g,'-')}</h4>
                                </div>
                                <div>
                                {
                                <div  >
                                    <a className="title"  title={item.title} >
                                    <p >Đánh giá {item.rate} sao</p>
                                    
                                </a>
                                </div>}
                                </div>
                                <a> {item.review} </a>
                            </div>
                            {admin && 
                            <div>
                                <button
                                onClick={()=>{
                                    handleAccept(item.studentId);
                                }}
                                >Duyệt</button>
                                <button
                                onClick={()=>{
                                    handleDeny(item.studentId);
                                }}
                                >Xoá</button>
                            </div>
                            }
                        </div>
                    )
                
                }
                )
            }
        </div>
         <div className="page_bottom"></div>
    </div> 
    </div> 
                                                              
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadReview
