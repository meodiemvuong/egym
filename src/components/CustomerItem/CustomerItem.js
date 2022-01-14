import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import avatar from './../../store/imgs/trainer1.jpg'

import styles from './CustomerItem.module.css'

//Từng học viên trong danh sách các học viên

function CustomerItem(name) {
    const [items, setItems] = useState([])
    const [account, setAccount] = useState([]
        
    )
    
    useEffect(() => {
    let url=`http://localhost:8080/cnpm/student`;  
    fetch(url)
        .then (response =>response.json())
        .then (data => setItems(data.data))
    },[]);
    useEffect(() => {
        let url=`http://localhost:8080/cnpm/account-student`;  
        fetch(url)
            .then (response =>response.json())
            .then (data => setAccount(data.data))
        },[]);
    return (
        <div className=""> 
                                        
                {items.map((item, index) =>
                    account.map((acc,i) =>
                    <div key ={index} classname="">
                        {localStorage.setItem('IDS',item.id)}
                        {localStorage.setItem('role',"student")}
                        
                        
        <div to='/' className={clsx(styles.wrapper)}>
        {   name=='' &&  i == index  &&
            <Link to={`detail/${item.id}`} className={clsx(styles.content)}>
                <div className={clsx(styles.avatarField)}>
                    <div
                        style={{
                            height: '50px',
                            width: '50px',
                            background:  `url(${item.avatar!==null?item.avatar:avatar})`
                        }}
                        className={clsx(styles.avatarImg)}
                    >
                    </div>
                    <div className={clsx(styles.name)}>{item.name}</div>
                </div>

                <div className={clsx(styles.inforField)}>
                    {i===index && <div className={clsx(styles.inforContent, styles.status)}>{account[i].expire}</div>}
                    
                </div>

                <div className={clsx(styles.inforField)}>
                    <i class={clsx(styles.inforIcon, styles.gender, "fas fa-male")}></i>
                    <div className={clsx(styles.inforContent)}>{item.sex}</div>
                </div>

                <div className={clsx(styles.inforField)}>
                    <i
                        class={clsx(styles.inforIcon, styles.birthday, "fas fa-birthday-cake")}
                        style={{
                            color: 'rgb(241, 122, 142)'
                        }}
                    ></i>
                    <div className={clsx(styles.inforContent)}>{item.date_of_birth}</div>
                </div>

                <div className={clsx(styles.inforField)}>
                    <i
                        class={clsx(styles.inforIcon, styles.phone, "fas fa-mobile")}
                        style={{
                            color: 'rgb(184, 184, 58)'
                        }}
                    ></i>
                    <div className={clsx(styles.inforContent)}>{item.phone_number}</div>
                </div>


            </Link>
}
            {  i == index && name!='' && item.name.toLowerCase().includes(name.toLowerCase())  &&
            <Link to={`detail/${item.id}`} className={clsx(styles.content)}>
                <div className={clsx(styles.avatarField)}>
                    <div
                        style={{
                            height: '50px',
                            width: '50px',
                            background:  `url(${item.avatar!==null?item.avatar:avatar})`
                        }}
                        className={clsx(styles.avatarImg)}
                    >
                    </div>
                    <div className={clsx(styles.name)}>{item.name}</div>
                </div>

                <div className={clsx(styles.inforField)}>
                    {i===index && <div className={clsx(styles.inforContent, styles.status)}>{account[i].expire}</div>}
                    
                </div>

                <div className={clsx(styles.inforField)}>
                    <i class={clsx(styles.inforIcon, styles.gender, "fas fa-male")}></i>
                    <div className={clsx(styles.inforContent)}>{item.sex}</div>
                </div>

                <div className={clsx(styles.inforField)}>
                    <i
                        class={clsx(styles.inforIcon, styles.birthday, "fas fa-birthday-cake")}
                        style={{
                            color: 'rgb(241, 122, 142)'
                        }}
                    ></i>
                    <div className={clsx(styles.inforContent)}>{item.date_of_birth}</div>
                </div>

                <div className={clsx(styles.inforField)}>
                    <i
                        class={clsx(styles.inforIcon, styles.phone, "fas fa-mobile")}
                        style={{
                            color: 'rgb(184, 184, 58)'
                        }}
                    ></i>
                    <div className={clsx(styles.inforContent)}>{item.phone_number}</div>
                </div>


            </Link>
}
            
        </div>
                            
        </div>
                
                ))}
        </div>
    )
    
}

export default CustomerItem
