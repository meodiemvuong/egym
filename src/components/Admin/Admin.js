import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { TrainerList, CustomerList, Category, AdminWelcome, TrainerDetail, CustomerDetail, Schedule } from './../'
import { AddTrainer, AddCustomer } from './../'
import clsx from 'clsx'

import styles from './Admin.module.css'
import EventDetail from '../EventDetail/EventDetail'
import AddEvent from '../AddEvent/AddEvent'
import EventList from '../EventList/EventList'
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
                    <Route path="events" element={<EventList admin={true}/>} />
                    <Route path="events/add" element={<AddEvent admin={true} />} />
                    <Route path="events/detail/:id" element={<EventDetail admin={true}/>} />
                </Routes>
            </main >
        </div >
    )
}

export default Admin
