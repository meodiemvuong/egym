import React, { useState} from 'react'
import clsx from 'clsx'

import styles from './AddCustomer.module.css'
import { AdminHeader, Popup } from './../'
import addProfile from '../../api/addProfile';
import { useNavigate } from 'react-router-dom';

// Trang thêm huấn luyện viên

function AddCustomer() {
    let [userState, setUserState] = useState({});
    const Navigate = useNavigate();
    let params = {
        "username": userState.username,
        "password": userState.password,
        "confirmPassword": userState.confirmPassword,
    }
    let [showPopup, setShowPopup] = useState(false);
    const handleAddStudent = async(e)=>{
        if(params.confirmPassword===params.password){
            showPopup = true;
            setShowPopup(showPopup);
        const responseID = await addProfile.addStudent(params);
        console.log(responseID)
        if (showPopup) {
            var id = setTimeout(() => {
                showPopup = false;
                setShowPopup(showPopup);
            }, 2000)
        }
        return () => {
            clearTimeout(id);
        }
        } else {alert("Mật khẩu không khớp, vui lòng thử lại"); return}
            
    }
    console.log(params)
    return (
        <div className={clsx(styles.wrapper)}>
            <AdminHeader heading="Thêm huấn luyện viên" />
            <div className="grid">
                <div className="row">
                    <div className="col l-6">
                        <div className={clsx(styles.content)}>

                            <div className={clsx(styles.contentField)}>
                                {/* <h2 className={clsx(styles.contentLabel)}>Họ và tên</h2> */}
                                <i class="fas fa-user-circle"></i>
                                {/* <input
                                    type="text"
                                    className={clsx(styles.contentText)}
                                    placeholder="Tài khoản"
                                /> */}
                                <input
                                    className="userinput"
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Tài khoản"
                                    onChange={(e) => {
                                        const username = e.target.value;
                                        setUserState({ ...userState, username });
                                    }}
                                />
                            </div>
                            

                            <div className={clsx(styles.contentField)}>
                                
                                <i class="fas fa-unlock-alt"></i>
                                <input
                                    className="userinput"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Mật khẩu"
                                    onChange={(e) => {
                                        const password = e.target.value;
                                        setUserState({ ...userState, password });
                                    }}
                                />
                                
                            </div>

                            <div className={clsx(styles.contentField)}>
                                
                                <i class="fas fa-unlock-alt"></i>
                                <input
                                    type="password"
                                    className={clsx(styles.contentText)}
                                    placeholder="Xác nhận mật khẩu"
                                    onChange={(e) => {
                                        const confirmPassword = e.target.value;
                                        setUserState({ ...userState, confirmPassword });
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col l-6">
                        <div className={clsx(styles.content)}>
                            <div className={clsx(styles.contentField)}>
                                
                                <i class="fas fa-save"></i>
                                <button
                                    onClick={() => {
                                        handleAddStudent();                                        
                                    }}
                                    className={clsx(styles.trainerAddBtn)}>
                                    Thêm học viên
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

            <Popup trigger={showPopup} message="Thêm thành công" />
            
        </div>
    )
}

export default AddCustomer
