import React from 'react'
import clsx from 'clsx'
import { AdminHeader,} from './../'
import { useParams } from 'react-router-dom'

import styles from './TrainerDetail.module.css'
import TrainerInfor from '../TrainerInfor/TrainerInfor'
import ScheduleTrainer from '../Schedule/ScheduleTrainer'
import RequirementItem from '../RequirementItem/RequirementItem'
import Period from '../Period/Period'

function TrainerDetail({ admin }) {
    const id = useParams();
    var ID ;
    if(id.id){
        ID = id.id;
    } else if(localStorage.getItem('ID')!='null'){
        ID = localStorage.getItem('ID');
    }
    else {
        ID = localStorage.getItem('IDT');
    }
    
    return (
        <div className={clsx(styles.wrapper)}>
            {admin && <AdminHeader heading="Thông tin huấn luyện viên" />}
            <div className={clsx(styles.content)}>
                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Thông tin cá nhân</h2>
                    {TrainerInfor(ID)}
                    
                </section>

                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Lịch huấn luyện</h2>
                    {ScheduleTrainer(ID)}
                </section>

                <section className={clsx(styles.contentField)}>
                </section>
                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Lịch tập</h2>
                    {Period(ID)}
                </section>
                <section className={clsx(styles.contentField)}>
                    <h2 className={clsx(styles.heading)}>Yêu cầu thêm hoặc sửa lịch tập</h2>
                    {RequirementItem(ID)}
                </section>
            </div>
        </div>
    )
}

export default TrainerDetail
