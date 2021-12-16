import React, { useState } from 'react'
import clsx from 'clsx'

import styles from './CustomerDetail.module.css'
import { useParams } from 'react-router-dom'
import { Schedule, AdminHeader, CustomerInfor } from './../';

// Trang này ở trong trang admin
// CustomerDetail sẽ gồm Header + CustomerInfor

function CustomerDetail({ admin }) {
    const id = useParams();

    return (
        <div className={clsx(styles.customerWrapper)}>
            {admin && <AdminHeader heading="Thông tin học viên" />}
            <div className={clsx(styles.content)}>
                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Thông tin cá nhân</h2>
                    <CustomerInfor />
                </section>

                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Lịch tập luyện</h2>
                    <Schedule />
                </section>
            </div>
        </div>
    )
}

export default CustomerDetail