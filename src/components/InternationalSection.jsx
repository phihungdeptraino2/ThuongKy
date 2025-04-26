import { Link } from "react-router-dom"

function InternationalSection() {
  return (
    <div className="international-box">
      <div className="box-header">
        <h3 className="box-title">HỢP TÁC QUỐC TẾ</h3>
      </div>
      <div className="box-content">
        <div className="featured-item">
          <img
            src="https://placehold.co/300x150"
            alt="International cooperation"
            width={300}
            height={150}
            className="featured-image"
          />
          <Link to="/international/1" className="featured-link">
            <span className="featured-title">
              Sôi nổi hoạt động Tuần lễ giao lưu văn hóa, Khoa học sinh viên quốc...
            </span>
          </Link>
          <p className="item-date">17-03-2023</p>
        </div>

        <div className="list-item">
          <Link to="/international/2" className="item-link">
            <span className="item-arrow">▶</span>
            <span className="item-title">
              Đại học Công nghiệp TP. HCM tham gia dự án Green Edu Seeds của quỹ Erasmus
            </span>
          </Link>
          <p className="item-date">17-03-2023</p>
        </div>
      </div>
    </div>
  )
}

export default InternationalSection
