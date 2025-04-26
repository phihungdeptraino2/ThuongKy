import { Link } from "react-router-dom"

function CampusShowcase() {
  const sections = [
    {
      id: 1,
      title: "PHIM HIỆU QUẢNG NIÊN",
      image: "https://placehold.co/300x150",
      link: "/campus/video",
    },
    {
      id: 2,
      title: "CƠ SỞ THÀNH HÓA",
      image: "https://placehold.co/300x150",
      link: "/campus/thanh-hoa",
    },
    {
      id: 3,
      title: "VIDEO VÀ HÌNH ẢNH",
      image: "https://placehold.co/300x150",
      link: "/campus/media",
      hasVideo: true,
    },
  ]

  return (
    <div className="showcase-container">
      {sections.map((section) => (
        <div key={section.id} className="showcase-box">
          <div className="box-header">
            <h3 className="box-title">{section.title}</h3>
          </div>
          <div className="box-content">
            <Link to={section.link} className="showcase-link">
              <div className="image-container">
                <img
                  src={section.image || "/placeholder.svg"}
                  alt={section.title}
                  width={300}
                  height={150}
                  className="showcase-image"
                />
                {section.hasVideo && (
                  <div className="video-play-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CampusShowcase
