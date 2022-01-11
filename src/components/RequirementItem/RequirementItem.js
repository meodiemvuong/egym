import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import RequirementAPI from '../../api/Requirement';
import './RequirementItem.css'
function RequirementItem(id) {

    const [items, setItems] = useState([])
    let [ud, setUd] = useState(false)
    let url=`http://localhost:8080/cnpm/requirement-student/1`;
    if(localStorage.getItem('role')==='trainer'){
        url=`http://localhost:8080/cnpm/requirement-trainer/${id}`;
    } 
    if(localStorage.getItem('role')==='student'){
        url=`http://localhost:8080/cnpm/requirement-student/${id}`;
    } 
    useEffect(() => {

    fetch(url)
        .then (response =>response.json())
        .then (data => {
            if(data.error[0]!==null){
                // console.log(data.error[0])
                return
            } else {
            setItems(data.data)}})
    },[]);
    let [require, SetRequire] = useState({
        requireId: null,
        action: null,
    })
    
    let [showPopup, setShowPopup] = useState(false);
    const handleAccept = async(e)=>{
        setShowPopup(prev => !prev)
        let params = {
            id: parseInt(id),
            requireId: parseInt(localStorage.getItem('requireId')),
            action: 1,
        }
        console.log(params)
        let response = RequirementAPI.Accept(params)
        console.log(response)
    }
    const handleDeny = async(e)=>{
        setShowPopup(prev => !prev)
        let params = {
            id: parseInt(id),
            requireId: parseInt(localStorage.getItem('requireId')),
            action: 0,
        }
        let response = RequirementAPI.Deny(params)
        
    }
    
    return (
        <div className='' >
            <div  >
        <div>
        <table id="t01" >
        <tbody><tr>
          <th>Loại yêu cầu</th>
          <th>Thời gian cũ</th>
          <th>Thời gian mới</th>

          {localStorage.getItem('role')==="trainer"&&<th>Học viên</th>}
          {localStorage.getItem('role')==="trainer"&&<th>Tính năng</th>}		
          {localStorage.getItem('role')==="student"&&<th>Yêu cầu</th>}
        </tr>
    {items.map((item,index) => {   
        return(
        <tr>
        { item.category === 1 &&<td>Thêm</td>}	
        { item.category === 0 &&<td>Sửa</td>}
        { item.category === -1 &&<td>Xoá</td>}		
        {item.oldTime && <td>{item.oldTime.start}-{item.oldTime.finish}, Thứ {item.oldTime.dayOfWeek}</td>}
        {!item.oldTime && <td></td>}
        {item.category === 1 && <td>{item.newTime.start}-{item.newTime.finish}, Thứ {item.newTime.dayOfWeek}</td>}
        {item.category === 0 && <td>{item.newTime.start}-{item.newTime.finish}, Thứ {item.newTime.dayOfWeek}</td>}
        {item.category === -1&&<td></td>}	
        {localStorage.getItem('role')=="trainer"&&<td>{item.studentName}</td>}
        {localStorage.getItem('role')==="trainer"&&<td>
        <button  className='trainerAddBtn'
        onClick={() => {
            localStorage.setItem('requireId',item.requireId);
            let choice = window.confirm("bạn chắc kk")
            if(choice==true && !ud){
            handleAccept(); 
            window.location.reload();
            } else {
            return
            }                                        
        }}>
        Chấp nhận
        </button>
        <button  className='trainerAddBtn'
        onClick={() => {
            localStorage.setItem('requireId',item.requireId);
            let choice = window.confirm("bạn chắc kk")
            if(choice==true && !ud){
            handleDeny(); 
            window.location.reload();
            } else {
            return
            }                                        
        }}>
        Xoá
        </button>        
        </td>}
        {localStorage.getItem('role')!=="trainer"&&<td>
        <button className='trainerAddBtn'
        onClick={() => {
            localStorage.setItem('requireId',item.requireId);
            let choice = window.confirm("bạn chắc kk")
            if(choice==true && !ud){
            handleDeny(); 
            window.location.reload();
            } else {
            return
            }                                        
        }}>
        Xoá
        </button>        
        </td>}
        
      </tr>)    
    })}    
    </tbody></table>
      </div>
    
  
    
    </div>
        </div>
    )
}
    

export default RequirementItem
