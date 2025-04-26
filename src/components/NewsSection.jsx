import { Link } from "react-router-dom"

function NewsSection() {
  return (
    <div className="news-grid">
      <div className="news-box announcements">
        <div className="box-header">
          <h3 className="box-title">THÔNG BÁO</h3>
        </div>
        <div className="news-list">
          <NewsItem
            to="/news/1"
            title="Thông báo v/v kế hoạch nghỉ hè đối với sinh viên năm 2023"
            date="21-04-2023"
            isNew={true}
          />
          <NewsItem
            to="/news/2"
            title="Thông báo tuyển chọn nam sinh tốt nghiệp đại học cho các trường quân đội"
            date="21-04-2023"
            isNew={true}
          />
        </div>
      </div>

      <div className="news-box events">
        <div className="box-header">
          <h3 className="box-title">TIN TỨC - SỰ KIỆN</h3>
        </div>
        <div className="news-content">
          <div className="featured-news">
            <img src="https://placehold.co/300x150" alt="News event" className="featured-image" />
            <Link to="/news/3" className="featured-link">
              <span className="featured-title">
                AIEVA tài trợ gói phần mềm trị giá 180.000 đô Mỹ cho Đại học Công nghiệp
              </span>
            </Link>
            <p className="news-date">22-03-2023</p>
          </div>

          <NewsItem
            to="/news/4"
            title="Hội nghị khoa học quốc tế BAIC 2023 lần 2 tại IUH - Sức mạnh AI trong..."
            date="21-03-2023"
            isNew={true}
          />
        </div>
      </div>
    </div>
  )
}

function NewsItem({ to, title, date, isNew = false }) {
  return (
    <div className="news-item">
      <Link to={to} className="news-link">
        <span className="news-arrow">▶</span>
        <span className="news-title">{title}</span>
      </Link>
      <div className="news-meta">
        <p className="news-date">{date}</p>
        {isNew && <span className="news-badge">NEW</span>}
      </div>
    </div>
  )
}

export default NewsSection
