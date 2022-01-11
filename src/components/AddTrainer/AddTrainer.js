import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import styles from './AddTrainer.module.css'
import { AdminHeader, Popup } from './../'
import addProfile from '../../api/addProfile';

// Trang thêm huấn luyện viên

function AddTrainer() {
    let [userState, setUserState] = useState({});
    
    let params = {
        "username": userState.username,
        "password": userState.password,
        "confirmPassword": userState.confirmPassword,
    }
    let [showPopup, setShowPopup] = useState(false);

    const handleAddtrainer = async(e)=>{
        if(params.confirmPassword===params.password){
            showPopup = true;
            setShowPopup(showPopup);
        const responseID = await addProfile.addTrainer(params);
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
                                <i class="fas fa-user-circle"></i>
                                
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
                                        handleAddtrainer();
                                    }}
                                    className={clsx(styles.trainerAddBtn)}>
                                    Thêm huấn luyện viên
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

export default AddTrainer
