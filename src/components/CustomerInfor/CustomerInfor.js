import React, { useState, useEffect, useRef } from 'react'
import clsx from 'clsx'
import { Popup } from './../'
import userProfileAPI from '../../api/userProfileAPI'
import avatar from './../../store/imgs/avatar.jpg'

import styles from './CustomerInfor.module.css'

// Trang này có thể hiển thị với cả học viên, huấn luyện viên và admin
// Thông tin chi tiết của mỗi học viên

function CustomerInfor(id) {
    let [nameUpdating, setNameUpdating] = useState(false);
    let [phone_numberUpdating, setphone_numberUpdating] = useState(false);
    let [date_of_birthUpdating, setdate_of_birthUpdating] = useState(false);
    let [descriptionUpdating, setdescriptionUpdating] = useState(false);
    let [sexUpdating, setsexUpdating] = useState(false);
    let [heightUpdating, setheightUpdating] = useState(false);
    let [weightUpdating, setweightUpdating] = useState(false);
    let [showPopup, setShowPopup] = useState(false);

    let nameRef = useRef(null);
    let phone_numberRef = useRef(null);
    let date_of_birthRef = useRef(null);
    let sexRef = useRef(null);
    let descriptionRef = useRef(null);
    let heightRef = useRef(null);
    let weightRef = useRef(null);

    let [userProfile, setUserProfile] = useState({
        name: '',
        phone_number: '',
        date_of_birth: '',
        sex: 'Nam',
        description: '',
        height: null,
        weight: null,
        avatar: '',
        bmi: null,
    });

    // Để show Popup sau khi cập nhật thành công
    useEffect(() => {
        if (showPopup) {
            var id1 = setTimeout(() => {
                setShowPopup(prev => !prev);
            }, 1000)
        }
        return () => {
            clearTimeout(id1);
        }
    }, [showPopup])

    // Lấy profile về
    useEffect(() => {
        (async () => {
            const response = await userProfileAPI.getProfile(id);
            if (response && response.data && response.data.data[0]) {
                userProfile = { ...response.data.data[0] };
                setUserProfile(userProfile);
            }
        })()
    }, [])

    // Upload Avatar

    const handleUploadAvatar = async (e) => {
        // Upload lên Cloudinary

        const files = e.target.files;
        const data = new FormData();
        data.append('file', files[0]);
        data.append('upload_preset', 'rubygymimages');

        const response = await fetch('https://api.cloudinary.com/v1_1/dzgdwey0f/image/upload', {
            method: 'POST',
            body: data
        })

        const file = await response.json();
        userProfile = {
            ...userProfile,
            avatar: file.secure_url
        }

        // const response = await userProfileAPI.updateAvatar(data)

        setUserProfile(userProfile)
        console.log(file);
        //console.log(userProfile)

        //================================================================

        // Upload lên server
        // const file = e.target.files[0];
        // const formData = new FormData();
        // formData.append('File', file);

        // const response = await userProfileAPI.updateAvatar(formData);

        // if(response && response.status && response.data) {
        //     userProfile = {
        //         ...userProfile,
        //         avatar: response.data
        //     }
        //     setUserProfile(userProfile);
        // }
        // if(response && !response.status) {
        //     alert(response.message)
        // }
    }


    //Update Profile
    const handleUpdate = async () => {
        console.log(userProfile);
        setShowPopup(prev => !prev)
        // const response = await userProfileAPI.updateProfile(userProfile);
        // if(response && response.status) setShowPopup(prev => !prev);
        // if(response && !response.status && response.message) {
        //     alert(response.message)
        // }
    }


    return (
        <div className="grid">

            {/* Thông tin cá nhân */}
            <div className={clsx(styles.inforField)}>
                <div className="row">

                    {/* Avatar */}
                    <div className="col l-5 m-0 c-0">
                        <div 
                            className={clsx(styles.avatar)}
                            style={{
                                backgroundImage: userProfile.avatar ?
                                    `url(${userProfile.avatar})` :
                                    `url(${avatar})`,
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            <label 
                                htmlFor="avatarChoose"
                                className={clsx(styles.chooseAvatar)}
                            >
                                <i className={clsx(styles.chooseAvatarIcon, "fas fa-camera")}></i>
                            </label>
                            <input 
                                type="file" 
                                id="avatarChoose"
                                hidden
                                onChange={ handleUploadAvatar }
                            />
                        </div>
                    </div>

                    {/* Thông tin */}
                    <div className="col l-7 m-12 c-12">
                        <div className={clsx(styles.infor)}>
                            <div className={clsx(styles.inforWrapper)}>

                                {/* Tên */}
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Họ tên</h3>
                                    <input
                                        readOnly={!nameUpdating}
                                        ref={nameRef}
                                        type="text"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.name}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                name: e.target.value,
                                            }))
                                        }}
                                        id='trainer-name' />
                                </div>
                                {
                                    !nameUpdating &&
                                    <label
                                        htmlFor='trainer-name'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            nameRef.current.focus();
                                            setNameUpdating(prev => !prev)
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    nameUpdating &&
                                    <label
                                        htmlFor='trainer-name'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setNameUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    nameUpdating &&
                                    <label
                                        htmlFor='trainer-name'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setNameUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>

                            {/* Số điện thoại */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Số điện thoại</h3>
                                    <input
                                        readOnly={!phone_numberUpdating}
                                        ref={phone_numberRef}
                                        type="text"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.phone_number}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                phone_number: e.target.value
                                            }))
                                        }}
                                        id='trainer-phone_number' />
                                </div>
                                {
                                    !phone_numberUpdating &&
                                    <label
                                        htmlFor='trainer-phone_number'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            phone_numberRef.current.focus();
                                            setphone_numberUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    phone_numberUpdating &&
                                    <label
                                        htmlFor='trainer-phone_number'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setphone_numberUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    phone_numberUpdating &&
                                    <label
                                        htmlFor='trainer-phone_number'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setphone_numberUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>

                            {/* Ngày sinh */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Ngày sinh</h3>
                                    <input
                                        readOnly={!date_of_birthUpdating}
                                        ref={date_of_birthRef}
                                        type="date"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.date_of_birth}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                date_of_birth: e.target.value
                                            }))
                                        }}
                                        id='trainer-date_of_birth' />
                                </div>
                                {
                                    !date_of_birthUpdating &&
                                    <label
                                        htmlFor='trainer-date_of_birth'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            date_of_birthRef.current.focus();
                                            setdate_of_birthUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    date_of_birthUpdating &&
                                    <label
                                        htmlFor='trainer-date_of_birth'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setdate_of_birthUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    date_of_birthUpdating &&
                                    <label
                                        htmlFor='trainer-date_of_birth'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setdate_of_birthUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>

                            {/* Giới tính */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Giới tính</h3>
                                    <select
                                        disabled={!sexUpdating}
                                        ref={sexRef}
                                        className={clsx(styles.inforText)}
                                        value={userProfile.sex}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                sex: e.target.value
                                            }))
                                        }}
                                    >
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                    </select>
                                </div>
                                {
                                    !sexUpdating &&
                                    <label
                                        htmlFor='trainer-date_of_birth'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            sexRef.current.focus();
                                            setsexUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    sexUpdating &&
                                    <label
                                        htmlFor='trainer-date_of_birth'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setsexUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    sexUpdating &&
                                    <label
                                        htmlFor='trainer-date_of_birth'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setsexUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>

                            {/*  Mô tả */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Mô tả</h3>
                                    <input
                                        readOnly={!descriptionUpdating}
                                        ref={descriptionRef}
                                        type="text"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.description}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                description: e.target.value
                                            }))
                                        }}
                                        id='trainer-description' />
                                </div>
                                {
                                    !descriptionUpdating &&
                                    <label
                                        htmlFor='trainer-description'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            descriptionRef.current.focus();
                                            setdescriptionUpdating((prev => !prev))
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    descriptionUpdating &&
                                    <label
                                        htmlFor='trainer-account'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setdescriptionUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    descriptionUpdating &&
                                    <label
                                        htmlFor='trainer-account'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setdescriptionUpdating(prev => !prev)
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>

                            {/* height */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Height</h3>
                                    <input
                                        readOnly={!heightUpdating}
                                        ref={heightRef}
                                        type="int"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.height}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                height: e.target.value
                                            }))
                                        }}
                                        id='trainer-height' />
                                </div>
                                {
                                    !heightUpdating &&
                                    <label
                                        htmlFor='trainer-height'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            heightRef.current.focus();
                                            setheightUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    heightUpdating &&
                                    <label
                                        htmlFor='trainer-height'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setheightUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    heightUpdating &&
                                    <label
                                        htmlFor='trainer-height'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setheightUpdating(prev => !prev)
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>

                            {/* weight */}
                            <div className={clsx(styles.inforWrapper)}>
                                <div className={clsx(styles.inforContent)}>
                                    <h3 className={clsx(styles.inforLabel)}>Weight</h3>
                                    <input
                                        readOnly={!weightUpdating}
                                        ref={weightRef}
                                        type="int"
                                        className={clsx(styles.inforText)}
                                        value={userProfile.weight}
                                        onChange={(e) => {
                                            setUserProfile(prev => ({
                                                ...userProfile,
                                                weight: e.target.value
                                            }))
                                        }}
                                        id='trainer-weight' />
                                </div>
                                {
                                    !weightUpdating &&
                                    <label
                                        htmlFor='trainer-weight'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            weightRef.current.focus();
                                            setweightUpdating(prev => !prev);
                                        }}
                                    >
                                        <i class="fas fa-pen"></i>
                                        Chỉnh sửa
                                    </label>
                                }
                                {
                                    weightUpdating &&
                                    <label
                                        htmlFor='trainer-weight'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setweightUpdating(prev => !prev);
                                            handleUpdate();
                                        }}
                                    >
                                        <i class="fas fa-save"></i>
                                        Lưu lại
                                    </label>
                                }
                                {
                                    weightUpdating &&
                                    <label
                                        htmlFor='trainer-weight'
                                        className={clsx(styles.inforBtn)}
                                        onClick={() => {
                                            setweightUpdating(prev => !prev)
                                        }}
                                    >
                                        <i class="fas fa-window-close"></i>
                                        Hủy
                                    </label>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Popup trigger={showPopup} message="Cập nhật thành công" />
        </div>
    )
}

export default CustomerInfor
