import { Link } from "react-router-dom"

function MainNavbar() {
  return (
    <nav className="main-navbar">
      <div className="container nav-container">
        <div className="nav-links">
          <Link to="/" className="nav-link home-link">
            <span className="home-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </span>
          </Link>
          <NavItem to="/about" label="GIỚI THIỆU" />
          <NavItem to="/education" label="ĐÀO TẠO" />
          <NavItem to="/admission" label="TUYỂN SINH" />
          <NavItem to="/research" label="NGHIÊN CỨU" />
          <NavItem to="/students" label="SINH VIÊN" />
          <NavItem to="/faculty" label="GIẢNG VIÊN" />
          <NavItem to="/diploma" label="VĂN BẰNG" />
        </div>
        <div className="search-box">
          <input type="text" placeholder="Tìm kiếm" className="search-input" />
          <button className="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

function NavItem({ to, label }) {
  return (
    <Link to={to} className="nav-link">
      <span className="nav-label">{label}</span>
    </Link>
  )
}

export default MainNavbar
