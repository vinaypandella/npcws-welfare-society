import { Link } from 'react-router-dom'
import { Shield, Home as HomeIcon, HeartPulse, GraduationCap, Users, CalendarCheck, ArrowRight } from 'lucide-react'
import './Home.css'

function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">
            <Shield size={18} />
            Est. 2004 — Guntur, Andhra Pradesh
          </div>
          <h1 className="hero-title">
            Serving Police Families<br />of Guntur District
          </h1>
          <p className="hero-text">
            NPCWS provides housing, healthcare, and education support to the families
            of police personnel in Nagarampalem and surrounding areas.
          </p>
          <div className="hero-actions">
            <Link to="/membership" className="btn btn-primary">
              Become a Member
              <ArrowRight size={18} />
            </Link>
            <Link to="/schemes" className="btn btn-outline">
              View Schemes
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <Users size={28} className="stat-icon" />
              <span className="stat-number">500+</span>
              <span className="stat-label">Members</span>
            </div>
            <div className="stat-item">
              <CalendarCheck size={28} className="stat-icon" />
              <span className="stat-number">20+</span>
              <span className="stat-label">Years of Service</span>
            </div>
            <div className="stat-item">
              <Shield size={28} className="stat-icon" />
              <span className="stat-number">3</span>
              <span className="stat-label">Welfare Schemes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Schemes */}
      <section className="schemes-section">
        <div className="container">
          <h2 className="section-title">Our Welfare Schemes</h2>
          <p className="section-subtitle">
            Comprehensive support for police families across three key areas.
          </p>
          <div className="schemes-grid">
            <div className="scheme-card">
              <div className="scheme-icon">
                <HomeIcon size={32} />
              </div>
              <h3>Housing Scheme</h3>
              <p>
                Affordable housing plots and construction assistance for eligible
                police families in Guntur district.
              </p>
              <Link to="/schemes" className="scheme-link">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
            <div className="scheme-card">
              <div className="scheme-icon">
                <HeartPulse size={32} />
              </div>
              <h3>Health Scheme</h3>
              <p>
                Medical aid, health check-up camps, and emergency financial
                support for members and their dependents.
              </p>
              <Link to="/schemes" className="scheme-link">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
            <div className="scheme-card">
              <div className="scheme-icon">
                <GraduationCap size={32} />
              </div>
              <h3>Education Scheme</h3>
              <p>
                Scholarships, school supplies, and tuition support for children
                of police personnel.
              </p>
              <Link to="/schemes" className="scheme-link">
                Learn more <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-card">
            <h2>Join NPCWS Today</h2>
            <p>
              Become a member and access housing, health, and education benefits
              for your family. Open to all police personnel in Guntur district.
            </p>
            <Link to="/membership" className="btn btn-primary">
              Join Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home
