import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { AdminHeader,} from './../'
import styles from './Event.css'
import { Link } from 'react-router-dom'



function EventList({admin}) {
    const [items, setItems] = useState([])
    let url=`http://localhost:8080/cnpm/event`;
    
    useEffect(() => {

    fetch(url)
        .then (response =>response.json())
        .then (data => setItems(data.data))
    },[]);
    return (
        <div className={clsx(styles.wrapper)}>
            
            
            <div className={clsx(styles.content)}>
                {   admin && 
                    
                    
                    <div className="contentHeader">
                        <AdminHeader heading="Danh sách Sự kiện" />
                    <div className="heading">Danh sách Sự kiện</div>
                    <div className="option">
                        <Link to='/' className="optionBtn">
                            <i class={clsx(styles.optionIcon, "fas fa-search")}></i>
                            Tìm kiếm
                        </Link>
                        <Link to='/admin/events/add' className="optionBtn">
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
                      
                    BÀI VIẾT MỚI NHẤT</h1>
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
                            {admin && <AdminHeader heading="Thông tin học viên" />}
                            <div className="info-wrapper">
                            
                                <div className="red-dot"> Tin tức &amp; Sự kiện</div>
                                <div className="date">
                                    
                                    <h4>Sự kiện kết thúc: {(item.expire.split('-').reverse()+"").replace(/,/g,'-')}</h4>
                                </div>
                                <div>
                                {admin &&
                                <Link to={`/admin/events/detail/${item.id}`} >
                                    <a className="title" href ={`/admin/events/detail/${item.id}`} title={item.title} >
                                    <p >{item.title}</p>
                                    
                                </a>
                                </Link>}
                                {!admin &&
                                <div  >
                                    <a className="title"  title={item.title} >
                                    <p >{item.title}</p>
                                    
                                </a>
                                </div>}
                                </div>
                                <a> {item.description} </a>
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

export default EventList
