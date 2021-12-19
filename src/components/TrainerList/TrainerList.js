import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { AdminHeader, TrainerItem, Popup } from './../'
import styles from './TrainerList.module.css'
import { Link } from 'react-router-dom'


function TrainerList() {
    return (
        <div className={clsx(styles.wrapper)}>
            <AdminHeader heading="Danh sách huấn luyện viên" />
            <div className={clsx(styles.content)}>
                <div className={clsx(styles.contentHeader)}>
                    <div className={clsx(styles.heading)}>Danh sách huấn luyện viên</div>
                    <div className={clsx(styles.option)}>
                        <Link to='/' className={clsx(styles.optionBtn)}>
                            <i class={clsx(styles.optionIcon, "fas fa-search")}></i>
                            Tìm kiếm
                        </Link>
                        <Link to='/admin/trainers/add' className={clsx(styles.optionBtn)}>
                            <i className={clsx(styles.optionIcon, "fas", "fa-user-plus")}></i>
                            Thêm
                        </Link>
                    </div>
                </div>
                <div className="grid">
                    <div className="container">
                        <div classname=''><TrainerItem/></div>
                                                              
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TrainerList
