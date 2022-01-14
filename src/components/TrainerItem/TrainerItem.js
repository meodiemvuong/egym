import { render } from '@testing-library/react';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import './TrainerItem.css'
import  avat from './../../store/imgs/trainer1.jpg'




function TrainerItem(name) {

    const [items, setItems] = useState([])
    let url=`http://localhost:8080/cnpm/trainer`;
    useEffect(() => {

    fetch(url)
        .then (response =>response.json())
        .then (data => setItems(data.data))
    },[]);
        return (
            <div className="row">                              
                    {items.map((item, index) =>
                            <div key ={index} classname="col-md-12">
                                
                                {localStorage.setItem('role',"trainer")}
                                {    name=='' &&
                                    <Link to={`detail/${item.id}`} className="trainer-link" onClick={()=>{localStorage.setItem('IDT',item.id);console.log("hello")}} >
                                
                                    <div className="col">
                                    <div className="trainer-wrapper " 
                                    style={{
                                    background:  `url(${item.avatar!==null?item.avatar:avat}) no-repeat center / cover`,
                                    }} >
                                        
                                        <div className="trainer-infor" >
                                            <div className="trainer-name col">{item.name}</div>
                                            <div className="trainer-age col">{item.id}</div>
                                        </div>
                                    </div>
                                    </div>
                                </Link>
                                }
                                {  name!='' && item.name.toLowerCase().includes(name.toLowerCase())  &&
                                    <Link to={`detail/${item.id}`} className="trainer-link" onClick={()=>{localStorage.setItem('IDT',item.id);console.log("hello")}} >
                                
                                    <div className="col">
                                    <div className="trainer-wrapper "
                                    style={{
                                        background:  `url(${item.avatar!==null?item.avatar:avat}) no-repeat center / cover`,
                                        }} 
                                    >
                                        
                                        <div className="trainer-infor" >
                                            <div className="trainer-name col">{item.name}</div>
                                            <div className="trainer-age col">{item.id}</div>
                                        </div>
                                    </div>
                                    </div>
                                </Link>
                                }
                            </div>
                    
                    )}
            </div>
                )
        
    


    
}

export default TrainerItem
