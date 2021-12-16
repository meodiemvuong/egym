import React from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import styles from './CustomerList.module.css'
import { AdminHeader, CustomerItem } from './../'

// Danh sách các học viên

function CustomerList() {
    return (
        <div className={clsx(styles.wrapper)}>
            <AdminHeader heading="Danh sách học viên" />
            <div className={styles.content}>
                <div className={clsx(styles.contentHeader)}>
                    <div className={clsx(styles.heading)}>Danh sách học viên</div>
                    <div className={clsx(styles.option)}>
                        <Link to='/' className={clsx(styles.optionBtn)}>
                            <i class={clsx(styles.optionIcon, "fas fa-search")}></i>
                            Tìm kiếm
                        </Link>
                        <Link to='/' className={clsx(styles.optionBtn)}>
                            <i className={clsx(styles.optionIcon, "fas", "fa-user-plus")}></i>
                            Thêm
                        </Link>
                    </div>
                </div>
                <CustomerItem />
                <CustomerItem />
                <CustomerItem />
                <CustomerItem />
                <CustomerItem />
                <CustomerItem />
                <CustomerItem />
                <CustomerItem />
                <CustomerItem />
                {/* <CustomerInfor /> */}
            </div>
        </div>
    )
}

export default CustomerList
