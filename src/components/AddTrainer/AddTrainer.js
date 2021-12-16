import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

import styles from './AddTrainer.module.css'
import { AdminHeader, Popup } from './../'

// Trang thêm huấn luyện viên

function AddTrainer() {
    let [trainerName, setTrainerName] = useState("");
    let [trainerAge, setTrainerAge] = useState("");
    let [trainerGender, setTrainerGender] = useState("Nam");
    let [trainerPhone, setTrainerPhone] = useState("");
    let [trainerHeight, setTrainerHeight] = useState("");
    let [trainerWeight, setTrainerWeight] = useState("");

    let [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        if (showPopup) {
            var id = setTimeout(() => {
                showPopup = false;
                setShowPopup(showPopup);
            }, 2000)
        }
        return () => {
            clearTimeout(id);
        }
    }, [showPopup])

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
                                <input
                                    type="text"
                                    className={clsx(styles.contentText)}
                                    placeholder="Tài khoản"
                                />
                            </div>

                            <div className={clsx(styles.contentField)}>
                                {/* <h2 className={clsx(styles.contentLabel)}>Họ và tên</h2> */}
                                <i class="fas fa-unlock-alt"></i>
                                <input
                                    type="password"
                                    className={clsx(styles.contentText)}
                                    placeholder="Mật khẩu"
                                />
                            </div>

                            <div className={clsx(styles.contentField)}>
                                {/* <h2 className={clsx(styles.contentLabel)}>Họ và tên</h2> */}
                                <i class="fas fa-unlock-alt"></i>
                                <input
                                    type="password"
                                    className={clsx(styles.contentText)}
                                    placeholder="Xác nhận mật khẩu"
                                />
                            </div>

                            <div className={clsx(styles.contentField)}>
                                {/* <h2 className={clsx(styles.contentLabel)}>Họ và tên</h2> */}
                                <i class="fas fa-user"></i>
                                <input
                                    type="text"
                                    className={clsx(styles.contentText)}
                                    placeholder="Nhập họ và tên"
                                />
                            </div>

                            <div className={clsx(styles.contentField)}>
                                {/* <h2 className={clsx(styles.contentLabel)}>Tuổi</h2> */}
                                <i class="fas fa-birthday-cake"></i>
                                <input
                                    type="text"
                                    className={clsx(styles.contentText)}
                                    placeholder="Nhập tuổi"
                                />
                            </div>

                        </div>
                    </div>
                    <div className="col l-6">
                        <div className={clsx(styles.content)}>
                            <div className={clsx(styles.contentField)}>

                                <i class="fas fa-transgender"></i>
                                <select
                                    value={trainerGender} id=""
                                    onChange={(e) => {
                                        trainerGender = e.target.value;
                                        setTrainerGender(trainerGender)
                                        console.log(trainerGender)
                                    }}
                                >
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                </select>
                            </div>

                            <div className={clsx(styles.contentField)}>
                                {/* <h2 className={clsx(styles.contentLabel)}>Số điện thoại</h2> */}
                                <i class="fas fa-mobile"></i>
                                <input
                                    type="text"
                                    className={clsx(styles.contentText)}
                                    placeholder="Nhập số điện thoại"
                                />
                            </div>

                            <div className={clsx(styles.contentField)}>
                                {/* <h2 className={clsx(styles.contentLabel)}>Chiều cao</h2> */}
                                <i class="fas fa-text-height"></i>
                                <input
                                    type="text"
                                    className={clsx(styles.contentText)}
                                    placeholder="Nhập chiều cao"
                                />
                            </div>

                            <div className={clsx(styles.contentField)}>
                                {/* <h2 className={clsx(styles.contentLabel)}>Cân nặng</h2> */}
                                <i class="fas fa-weight"></i>
                                <input
                                    type="text"
                                    className={clsx(styles.contentText)}
                                    placeholder="Nhập cân nặng"
                                />
                            </div>


                            <div className={clsx(styles.contentField)}>
                                {/* <h2 className={clsx(styles.contentLabel)}>Cân nặng</h2> */}
                                <i class="fas fa-save"></i>
                                <button
                                    onClick={() => {
                                        showPopup = true;
                                        setShowPopup(showPopup);
                                    }}
                                    className={clsx(styles.trainerAddBtn, styles.inactive)}>
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
