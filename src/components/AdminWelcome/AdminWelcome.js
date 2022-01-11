import React from 'react'
import clsx from 'clsx'
import { AdminHeader } from '..'
import styles from './AdminWelcome.module.css'
// Trang chào đón admin

function AdminWelcome() {
    return (
        <>

            <AdminHeader heading="RUBYGYM" />
            
            <div className={clsx(styles.adminWelcome)}>
                Hello Admin!
            </div>
        </>

    )
}

export default AdminWelcome
