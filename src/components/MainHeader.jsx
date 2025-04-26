import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"
import viFlag from "../assets/images/vi-flag.png"
import enFlag from "../assets/images/en-flag.png"
import "../App.css"

function MainHeader() {
  return (
    <header className="main-header">
      <div className="container header-content">
        <div className="logo-container">
          <img
            src={logo || "/placeholder.svg"}
            alt="Industrial University of Ho Chi Minh City"
            className="logo-image"
            width={120}
            height={80}
          />
          <div className="header-text">
            <h2 className="ministry-name">BỘ CÔNG THƯƠNG</h2>
            <h1 className="university-name">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</h1>
            <p className="university-slogan">Đổi mới tư duy, làm giàu thêm tri thức - đổi sống</p>
          </div>
        </div>
        <div className="header-links">
          <Link to="/login" className="header-link">
            KẾT NỐI
          </Link>
          <span className="separator">|</span>
          <Link to="/contact" className="header-link">
            LIÊN HỆ
          </Link>
          <div className="language-switcher">
            <Link to="/vi" className="language-link">
              <img src={viFlag || "/placeholder.svg"} alt="Vietnamese" width={24} height={16} />
            </Link>
            <Link to="/en" className="language-link">
              <img src={enFlag || "/placeholder.svg"} alt="English" width={24} height={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
