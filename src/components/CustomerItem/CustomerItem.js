import React, { useParams } from 'react'
import clsx from 'clsx'
import { Link } from 'react-router-dom'

import avatar from './../../store/imgs/trainer1.jpg'

import styles from './CustomerItem.module.css'

//Từng học viên trong danh sách các học viên

function CustomerItem() {
    const id = 1
    return (
        <div to='/' className={clsx(styles.wrapper)}>
            <Link to={`detail/${id}`} className={clsx(styles.content)}>
                <div className={clsx(styles.avatarField)}>
                    <div
                        style={{
                            height: '50px',
                            width: '50px',
                            background: `url(${avatar})`
                        }}
                        className={clsx(styles.avatarImg)}
                    >
                    </div>
                    <div className={clsx(styles.name)}>Nguyễn Văn Đương</div>
                </div>

                <div className={clsx(styles.inforField)}>
                    <div className={clsx(styles.inforContent, styles.status)}>Hoạt động</div>
                    {/* <div className={clsx(styles.inforContent, styles.status)}>Hết hạn</div> */}
                </div>

                <div className={clsx(styles.inforField)}>
                    <i class={clsx(styles.inforIcon, styles.gender, "fas fa-male")}></i>
                    <div className={clsx(styles.inforContent)}>Nam</div>
                </div>

                <div className={clsx(styles.inforField)}>
                    <i
                        class={clsx(styles.inforIcon, styles.birthday, "fas fa-birthday-cake")}
                        style={{
                            color: 'rgb(241, 122, 142)'
                        }}
                    ></i>
                    <div className={clsx(styles.inforContent)}>21-12-2001</div>
                </div>

                <div className={clsx(styles.inforField)}>
                    <i
                        class={clsx(styles.inforIcon, styles.phone, "fas fa-mobile")}
                        style={{
                            color: 'rgb(184, 184, 58)'
                        }}
                    ></i>
                    <div className={clsx(styles.inforContent)}>0982912987</div>
                </div>

                <div className={clsx(styles.inforField)}>
                    <i
                        class={clsx(styles.inforIcon, styles.phone, "fas fa-chalkboard-teacher")}
                        style={{
                            color: 'rgb(48, 48, 240)'
                        }}
                    ></i>
                    <div className={clsx(styles.inforContent)}>Nguyễn Văn Tùng</div>
                </div>

            </Link>

            <div className={clsx(styles.updateField)}>
                <div className={clsx(styles.inforField, styles.editField)}>
                    <i class={clsx(styles.editIcon, "fas fa-edit")}></i>
                    <div className={clsx(styles.updateContent, styles.edit)}>
                        Sửa
                    </div>
                </div>

                <div className={clsx(styles.inforField, styles.deleteField)}>
                    <i class={clsx(styles.deleteIcon, "fas fa-user-minus")}></i>
                    <div className={clsx(styles.updateContent, styles.delete)}>
                        Xóa
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CustomerItem
