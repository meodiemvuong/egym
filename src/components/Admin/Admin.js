import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { TrainerList, CustomerList, Category, AdminWelcome, TrainerDetail, CustomerDetail, Schedule } from './../'
import { AddTrainer, AddCustomer } from './../'
import clsx from 'clsx'

import styles from './Admin.module.css'

// Trang admin

function Admin() {
    return (
        <div className={clsx(styles.wrapper)}>
            <div className={clsx(styles.sidebar)}>
                <Category />
            </div>
            <main className={clsx(styles.content)}>
                <Routes>
                    <Route path="trainers" element={<TrainerList />} />
                    <Route path="trainers/add" element={<AddTrainer />} />
                    <Route path="trainers/detail/:id" element={<TrainerDetail admin={true}/>} />
                    <Route path="customers" element={<CustomerList />} />
                    <Route path="customers/add" element={<AddCustomer />} />
                    <Route path="customers/detail/:id" element={<CustomerDetail admin={true}/>} />
                    <Route path="" element={<AdminWelcome />} />
                </Routes>
            </main >
        </div >
    )
}

export default Admin
