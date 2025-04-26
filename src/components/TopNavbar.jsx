import { Link } from "react-router-dom"

function TopNavbar() {
  return (
    <div className="top-navbar">
      <div className="container">
        <Link to="/e-office" className="top-nav-link">
          <span className="icon-box"></span>
          E-OFFICE
        </Link>
        <Link to="/email" className="top-nav-link">
          <span className="icon-box"></span>
          EMAIL
        </Link>
        <Link to="/news" className="top-nav-link">
          <span className="icon-box"></span>
          THƯ VIỆN - THÔNG TIN
        </Link>
      </div>
    </div>
  )
}

export default TopNavbar
