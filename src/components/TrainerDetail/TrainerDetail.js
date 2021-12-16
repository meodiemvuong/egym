import React from 'react'
import clsx from 'clsx'
import { AdminHeader, CustomerItem, Schedule } from './../'
import { useParams } from 'react-router-dom'

import styles from './TrainerDetail.module.css'
import TrainerInfor from '../TrainerInfor/TrainerInfor'

function TrainerDetail({ admin }) {
    const id = useParams();

    return (
        <div className={clsx(styles.wrapper)}>
            {admin && <AdminHeader heading="Thông tin huấn luyện viên" />}
            <div className={clsx(styles.content)}>
                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Thông tin cá nhân</h2>
                    <TrainerInfor />
                </section>

                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Lịch huấn luyện</h2>
                    <Schedule />
                </section>

                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Danh sách học viên</h2>
                    {/* <div className="grid">
                        <div className="row">
                            <div className="col l-10 l-o-1"> */}
                    <CustomerItem />
                    <CustomerItem />
                    <CustomerItem />
                    <CustomerItem />
                    <CustomerItem />
                    <CustomerItem />
                    {/* </div>
                        </div>
                    </div> */}
                </section>
            </div>
        </div>
    )
}

export default TrainerDetail
