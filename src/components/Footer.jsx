import { Link } from "react-router-dom"
import logo from "../assets/images/logo.png"

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-column contact-info">
          <h3 className="footer-heading">LIÊN HỆ</h3>
          <div className="contact-details">
            <p className="university-name">ĐẠI HỌC CÔNG NGHIỆP TP. HỒ CHÍ MINH</p>
            <p>Địa chỉ: Số 12 Nguyễn Văn Bảo, Phường 4, Quận Gò Vấp, Thành phố Hồ Chí Minh</p>
            <p>Điện thoại: 028 38940 390 - 100</p>
            <p>Tuyển sinh: 028 3985 0532 - 028 3985 8858 - 028 3985 1917</p>
            <p>
              Email:{" "}
              <a href="mailto:dhcn@iuh.edu.vn" className="email-link">
                dhcn@iuh.edu.vn
              </a>
            </p>

            <div className="footer-logo">
              <img src={logo || "/placeholder.svg"} alt="University Logo" width={120} height={80} />
            </div>

            <div className="visitor-stats">
              <p>Số lượt truy cập: 288,835,367</p>
              <p>Hôm nay: 21,721 | Đang xem: 81</p>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">HOẠT ĐỘNG KHÁC</h3>
          <ul className="footer-links">
            <li>
              <Link to="/activities/community">Hoạt động phục vụ cộng đồng</Link>
            </li>
            <li>
              <Link to="/activities/student-club">Sinh viên tình nguyện</Link>
            </li>
            <li>
              <Link to="/activities/student-union">CLB/Đội/Nhóm sinh viên</Link>
            </li>
            <li>
              <Link to="/activities/business">Kết nối doanh nghiệp</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">THÔNG TIN MỞ RỘNG</h3>
          <ul className="footer-links">
            <li>
              <Link to="/info/job">Báo chí việc và IUH</Link>
            </li>
            <li>
              <Link to="/info/software">Khám phá IUH</Link>
            </li>
            <li>
              <Link to="/info/software">Kỹ năng mềm</Link>
            </li>
            <li>
              <Link to="/info/software">Bộ sưu tập</Link>
            </li>
            <li>
              <Link to="/info/student-service">Dịch vụ sinh viên</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">VĂN BẢN TIỆN ÍCH</h3>
          <ul className="footer-links">
            <li>
              <Link to="/docs/regulations">Quy chế-Quy định-Quy trình</Link>
            </li>
            <li>
              <Link to="/docs/forms">Biểu mẫu</Link>
            </li>
            <li>
              <Link to="/docs/education">Biểu mẫu đào tạo</Link>
            </li>
            <li>
              <Link to="/docs/faculty">Quản lý khoa học</Link>
            </li>
            <li>
              <Link to="/docs/thesis">Phản hồi</Link>
            </li>
          </ul>

          <div className="social-share">
            <span>Chia sẻ:</span>
            <div className="social-icons">
              <a href="https://facebook.com" className="social-icon facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="https://twitter.com" className="social-icon twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="https://linkedin.com" className="social-icon linkedin">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>© Bản quyền 2015 - Đại học Công nghiệp Thành phố Hồ Chí Minh</p>
        <p>
          Mọi hành động sử dụng nội dung đăng tải trên Website này phải có sự đồng ý bằng văn bản của Đại học Công
          nghiệp Thành phố Hồ Chí Minh.
        </p>
      </div>
    </footer>
  )
}

export default Footer
