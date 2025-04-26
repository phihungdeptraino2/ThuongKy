import { Link } from "react-router-dom"

function OrganizationSidebar() {
  return (
    <div className="org-sidebar">
      <div className="sidebar-header">
        <h3 className="sidebar-title">CƠ CẤU TỔ CHỨC</h3>
      </div>
      <div className="sidebar-menu">
        <SidebarItem to="/leadership" label="LÃNH ĐẠO" />
        <SidebarItem to="/departments" label="CÁC PHÒNG BAN" />
        <SidebarItem to="/faculties" label="CÁC KHOA" />
        <SidebarItem to="/institutes" label="CÁC VIỆN" />
        <SidebarItem to="/centers" label="CÁC TRUNG TÂM" />
        <SidebarItem to="/labs" label="CÁC PHÂN HIỆU" />
        <SidebarItem to="/union" label="ĐOÀN THỂ" />
      </div>
    </div>
  )
}

function SidebarItem({ to, label }) {
  return (
    <Link to={to} className="sidebar-item">
      <span className="item-label">{label}</span>
      <span className="item-arrow">
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
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </span>
    </Link>
  )
}

export default OrganizationSidebar
