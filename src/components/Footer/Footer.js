import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <footer className="footer">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-4">
                        <div className="footer-item">
                            <h1 className="footer-heading">Chi nhánh Hà Nội</h1>
                            <h3 className="branch-address">236 Hoàng Quốc Việt – Bắc Từ Liêm</h3>
                            <h3 className="branch-address">Số 5 Đại Cồ Việt – Q.Hai Bà Trưng</h3>
                            <h3 className="branch-address">Hotline : 0856174003 – 0816504464</h3>
                            
                        </div>
                    </div>

                    <div className="col l-4">
                        <div className="footer-item">
                             
                            <h1 className="footer-heading">Thông tin liên hệ</h1>                           
                            <b className="branch-address">Facebook:</b>&nbsp;
                            <a href="https://www.facebook.com" >facebook.com/RubyGym</a><br />
                            <b className="branch-address">Youtube: </b>&nbsp;
                            <a href="https://www.youtube.com" >Youtube.com/RubyGym</a><br />
                            <b className="branch-address">Instagram: </b>&nbsp;
                            <a href="https://www.instagram.com" >instagram.com/RubyGym</a><br />
                            
                        </div>
                    </div>
                    <div className="col l-4">
                        <div className="footer-item">
                            <h1 className="footer-heading">Thời gian</h1>
                            <h3 className="branch-address">Thứ Hai - Chủ Nhật: 6:00 - 22:00</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright 2021 @ RUBYGYM. All Right Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
