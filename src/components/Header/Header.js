import React, { useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import './Header.css'
import logo from './../../store/imgs/logo.png';

function Header() {
    var user;
    user = localStorage.getItem('ID');
    const navigate = useNavigate();
    let [showOption, setShowOpTion] = useState(false);

    const handleShowOption = () => {
        setShowOpTion(!showOption);
    }
    const handleinfor = () => {
        let url = `/${localStorage.getItem('role')}`;
        navigate(url);
    } 

    const handleLogout = () => {
        navigate('/login');
        localStorage.removeItem('ID');
        localStorage.removeItem('role');
    }

    return (
        <header className="header">
            <div className="grid wide">
                <div className="header-wrapper">
                    <div className="logo-navbar">
                        <div className="header-logo">
                            <Link to='/'><img src={logo} alt="" className="logo-img" /></Link>
                            <Link to='/' className="logo-name">RUBYGYM</Link>
                        </div>
                        <nav className="header-navbar">
                            <ul className="nav-list">
                                <li className="nav-item"><NavLink to="/">Trang chủ</NavLink></li>
                                <li className="nav-item"><NavLink to="/">Dịch vụ</NavLink></li>
                                <li className="nav-item"><NavLink to="/">Góp ý - Phản hồi</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    {!user &&
                        <div className="header-login">
                            <Link to='/login'><i className="fas fa-user login-icon"></i></Link>
                            <Link to='/login'>Đăng nhập</Link>
                        </div>
                    }
                    {user &&
                        <div className="header-user" onClick={handleShowOption}>
                            <h2 className="header-user-name">{user.name}</h2>
                            <i className="fas fa-user-circle header-user-icon"></i>
                            {showOption &&
                                <div className="header-user-option">
                                    <ul className="user-option-list">
                                        <li onClick={handleinfor} className='user-option-item'><Link to="">Thông tin cá nhân</Link></li>
                                        <li onClick={() => {
                                            handleShowOption();
                                            handleLogout();
                                        }} className='user-option-item'><Link to="">Đăng xuất</Link></li>
                                    </ul>
                                </div>
                            }
                        </div>}
                    {user && showOption && <div className="virtual-modal" onClick={handleShowOption} ></div>}
                </div>
            </div>
        </header >
    );
}

export default Header;
