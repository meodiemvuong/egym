import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import styles from './CustomerList.module.css'
import { AdminHeader, CustomerItem } from './../'
import { useState } from 'react'
// Danh sách các học viên

function CustomerList() {
    let [name, setName] = useState('')
    console.log(name)
    return (
        <div className={clsx(styles.wrapper)}>
            <AdminHeader heading="Danh sách học viên" />
            <div className={styles.content}>
                <div className={clsx(styles.contentHeader)}>
                    <div className={clsx(styles.heading)}>Danh sách học viên</div>
                    <div className={clsx(styles.option)}>
                    <div className={clsx(styles.optionBtn)}>
                            <input  placeholder="Search for Student"
                            onChange={(e) => {
                                let name = e.target.value;
                                setName(name)
                                // setUserState({ ...userState, username });
                            }}
                            >
                            
                            </input>
                        </div>
                        <Link to='/admin/customers/add' className={clsx(styles.optionBtn)}>
                            <i className={clsx(styles.optionIcon, "fas", "fa-user-plus")}></i>
                            Thêm
                        </Link>
                    </div>
                </div>
                <div clasname="">
                {CustomerItem(name)}
                </div>
                
                {/* <CustomerInfor /> */}
            </div>
        </div>
    )
}

export default CustomerList
