import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import './Admin.css'
import styles from './AdminHeader.module.css'

// Header ở mỗi trang admin

function AdminHeader({ heading }) {
    const navigate = useNavigate()
    return (
        <div className={clsx(styles.wrapper)}>
            <h2 className={clsx(styles.heading)}>{heading}</h2>
            <div className="admin-header-wrapper">
                <div className="grid wide">
                    <div className="admin-header">
                        <div className="admin-header-logo">
                            
                        </div>
                        <div className="admin-header-heading">
                            RubyGym
                        </div>
                        <div
                            className="admin-header-logout"
                            onClick={() => { 
                                localStorage.removeItem('role')
                                navigate('/');
                            }}
                        ><i class="fas fa-sign-out-alt"></i>
                            Đăng xuất
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHeader
