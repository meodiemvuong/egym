import React, { useEffect, useLayoutEffect, useState } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import avatar from './../../store/imgs/trainer1.jpg'

import styles from './CustomerItem.module.css'

//Từng học viên trong danh sách các học viên

function CustomerItem() {
    const [items, setItems] = useState([])
    let url=`http://localhost:8080/cnpm/student`;
    // function getTrainer(callback){
    //     fetch(url).then(response=>{return response.json()}).then(callback)
    // }
    // function start(){
    //     getTrainer(res=>{
    //         console.log(res.data);
    //         var items = res.data;
    //         renderCourse(items);
    //     })
        
        
    // }
    // start()
    useEffect(() => {

    fetch(url)
        .then (response =>response.json())
        .then (data => setItems(data.data))
    },[]);

    console.log(items)
    return (
        <div className="">                              
                {items.map((item, index) =>
                    <div key ={index} classname="">
                            <div to='/' className={clsx(styles.wrapper)}>
            <Link to={`detail/${item.id}`} className={clsx(styles.content)}>
                <div className={clsx(styles.avatarField)}>
                    <div
                        style={{
                            height: '50px',
                            width: '50px',
                            background: `url(${avatar})`
                        }}
                        className={clsx(styles.avatarImg)}
                    >
                    </div>
                    <div className={clsx(styles.name)}>{item.name}</div>
                </div>

                <div className={clsx(styles.inforField)}>
                    <div className={clsx(styles.inforContent, styles.status)}>Hoạt động</div>
                    {/* <div className={clsx(styles.inforContent, styles.status)}>Hết hạn</div> */}
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

                <div className={clsx(styles.inforField)}>
                    <i
                        class={clsx(styles.inforIcon, styles.phone, "fas fa-chalkboard-teacher")}
                        style={{
                            color: 'rgb(48, 48, 240)'
                        }}
                    ></i>
                    <div className={clsx(styles.inforContent)}>{item.name}</div>
                </div>

            </Link>

            
        </div>
                            {/* {item.name} */}
                            {/* <Link to={`detail/${item.id}`} className="trainer-link">
                                <div className="col">
                                <div className="trainer-wrapper ">
                                    <div className="trainer-infor">
                                        <div className="trainer-name col">{item.name}</div>
                                        <div className="trainer-age col">{item.id}</div>
                                    </div>
                                </div>
                                </div>
                            </Link> */}
                        </div>
                
        )}
        </div>
    )
    
}

export default CustomerItem
