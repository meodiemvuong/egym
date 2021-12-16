import React from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

import styles from './AdminHeader.module.css'

// Header ở mỗi trang admin

function AdminHeader({ heading }) {
    return (
        <div className={clsx(styles.wrapper)}>
            <h2 className={clsx(styles.heading)}>{heading}</h2>
            {/* {
                heading && heading.includes("huấn luyện viên") ?
                    <Link to='/admin/trainers/add' className={clsx(styles.addBtn)}>
                        <i className={clsx(styles.addBtnIcon, "fas", "fa-user-plus")}></i>
                        Thêm
                    </Link> :
                    <Link to='/admin/customers/add' className={clsx(styles.addBtn)}>
                        <i className={clsx(styles.addBtnIcon, "fas", "fa-user-plus")}></i>
                        Thêm
                    </Link>
            } */} 
        </div>
    )
}

export default AdminHeader
