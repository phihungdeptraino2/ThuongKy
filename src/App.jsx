import { BrowserRouter as Router } from "react-router-dom"
import TopNavba from "./components/TopNavbar"
import MainHeader from "./components/MainHeader"
import MainNavbar from "./components/MainNavbar"
import HeroBanner from "./components/HeroBanner"
// import OrganizationSidebar from "./components/OrganizationSidebar"
// import NewsSection from "./components/NewsSection"
// import InternationalSection from "./components/InternationalSection"
// import CampusShowcase from "./components/CampusShowcase"
// import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="page-container">
        <TopNavba />
        <MainHeader />
        <MainNavbar />

        <main className="main-content">
          <HeroBanner />

          {/* <div className="container content-grid">
            <div className="sidebar">
              <OrganizationSidebar />
            </div>

            <div className="main-column">
              <NewsSection />
              <div className="two-column-grid">
                <InternationalSection />
                <CampusShowcase />
              </div>
            </div>
          </div> */}
        </main>

        {/* <Footer /> */}
      </div>
    </Router>
  )
}

export default App
