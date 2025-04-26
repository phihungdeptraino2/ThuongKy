import { Link } from "react-router-dom"
import studentImage from "../assets/images/student.png"

function HeroBanner() {
  return (
    <div className="hero-banner">
      <div className="container hero-content">
        <div className="hero-text">
          <h2 className="hero-title">GIAO DIỆN MỚI - SẴN SÀNG BỨT PHÁ!</h2>
          <div className="dot-indicators">
            {[1, 2, 3, 4, 5].map((dot) => (
              <span key={dot} className="dot"></span>
            ))}
          </div>
          <p className="hero-description">
            Hãy trải nghiệm giao diện website IUH mới, giúp cập trạng thái dễ dàng hơn và truyền tải nhiều nội dung một
            cách thuận tiện!
          </p>
          <Link to="/explore" className="explore-button">
            KHÁM PHÁ NGAY
          </Link>
        </div>
        <div className="hero-image">
          <img
            src={studentImage || "/placeholder.svg"}
            alt="Student with laptop"
            width={400}
            height={300}
            className="student-image"
          />
        </div>
      </div>
      <div className="hero-decoration"></div>
    </div>
  )
}

export default HeroBanner
