import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './../../store/imgs/logo.png'
import './Login.css'
import authAPI from '../../api/authAPI'
import { useNavigate } from 'react-router-dom'



function Login() {
    const navigate = useNavigate();
    let [userState, setUserState] = useState({ role: 'admin' });
    let [loginFalse, setLoginFalse] = useState(false);
    let [error, setThongbao] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!(userState.username && userState.password)) return;
        else {
            let user = {           
                "username": userState.username,
                "password": userState.password
            }
            user = {...user,role:userState.role};
            const response = await authAPI.login(JSON.stringify(user));
            
            //const response = await authAPI.login(user)                   
            console.log(response)
            if(response.data.error == 'null') {
                navigate('/');
                
                localStorage.setItem('role',user.role);
                
            }
            if(response.error=='null'){
                
                navigate('/admin');
            }
            if(response.data.error != 'null'|| response.error!='null') {
                setLoginFalse(true);

                var thongbao;
                if(response.data.error!='null'){
                    thongbao = response.data.error;
                    setThongbao(thongbao)
                } 
                if(response.error!=null)    {
                    thongbao= response.error;
                    setThongbao(thongbao)
                }
                
            }
            console.log(error);
            
            
        }
    }

    return (
        <div className="login-wrapper">
            {/* Header */}
            <div className="login-header-wrapper">
                <div className="grid wide">
                    <div className="login-header">
                        <div className="login-header-logo">
                            <Link to='/'><img src={logo} alt="" className="logo-img" /></Link>
                            <Link to='/' className="logo-name">RUBYGYM</Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Header body */}
            < main className="login-body" >
                <div className="login-body-wrapper">
                    <h2 className="login-body-heading">Chọn vai trò đăng nhập</h2>
                    <div className="login-inner">
                        <div className="login-role">
                            <div
                                className={userState.role === "admin" ? "role-detail role-active" : "role-detail"}
                                onClick={() => setUserState({ ...userState, role: 'admin' })}
                            >
                                <i className="fas fa-user-lock"></i>
                                Quản trị viên
                            </div>
                            <div className="role-detail-wrapper">
                                <div
                                    className={userState.role === "trainer" ? "role-detail role-active" : "role-detail"}
                                    onClick={() => setUserState({ ...userState, role: 'trainer' })}
                                >
                                    <i className="fas fa-user-chart"></i>
                                    Huấn luyện viên
                                </div>
                                <div
                                    className={userState.role === "customer" ? "role-detail role-active" : "role-detail"}
                                    onClick={() => setUserState({ ...userState, role: 'customer' })}
                                >
                                    <i className="fas fa-user"></i>
                                    Học viên
                                </div>
                            </div>
                        </div>
                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <input
                                    className="userinput"
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Nhập tên đăng nhập"
                                    onChange={(e) => {
                                        const username = e.target.value;
                                        setUserState({ ...userState, username });
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    className="userinput"
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Nhập mật khẩu"
                                    onChange={(e) => {
                                        const password = e.target.value;
                                        setUserState({ ...userState, password });
                                    }}
                                />
                            </div>
                            {loginFalse && <h2 className="login-false">{error}</h2>}
                            <button className={userState.username && userState.password ? "usersubmit-btn" : "usersubmit-btn inactive"}>Đăng nhập</button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Login



