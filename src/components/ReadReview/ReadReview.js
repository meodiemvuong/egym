import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { AdminHeader,} from './../'
import styles from './ReadReview.css'
import { Link } from 'react-router-dom'



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
    return (
        <div className={clsx(styles.wrapper)}>
            
            
            <div className={clsx(styles.content)}>
                {   
                    
                    
                    <div className="contentHeader">
                        {/* <AdminHeader heading="Danh sách Sự kiện" />
                    <div className="heading">Danh sách Đánh giá</div> */}
                    <div className="option">
                        <Link to='/' className="optionBtn">
                            <i class={clsx(styles.optionIcon, "fas fa-search")}></i>
                            Tìm kiếm
                        </Link>
                        <Link to='/review/add' className="optionBtn">
                            <i className={clsx(styles.optionIcon, "fas", "fa-file-plus")}></i>
                            
                            Thêm
                        </Link>
                    </div>
                </div>}
                <div className="grid">
                    <div className="container">
                    {admin && console.log("hello") }
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
                            {admin && <AdminHeader heading="Thông tin phản hồi" />}
                            <div className="info-wrapper">
                            
                                <div className="red-dot" style={{fontWeight:'bold'}}>Đánh giá của {item.name}</div>
                                <div className="date">
                                    
                                    <h4>Ngày đánh giá: {(item.date.split('-').reverse()+"").replace(/,/g,'-')}</h4>
                                </div>
                                <div>
                                {/* {
                                <Link to={`/admin/events/detail/${item.id}`} >
                                    <a className="title" href ={`/admin/events/detail/${item.id}`} title={item.title} >
                                    <p >{item.title}</p>
                                    
                                </a>
                                </Link>} */}
                                {
                                <div  >
                                    <a className="title"  title={item.title} >
                                    <p >Đánh giá {item.rate} sao</p>
                                    
                                </a>
                                </div>}
                                </div>
                                <a> {item.review} </a>
                            </div>
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
