import React, { useEffect, useRef, useState } from "react";
import "./Certifications.css";

function Certifications() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const certifications = [
    {
      title: "Oracle Cloud Infrastructure Data Science Professional",
      issuer: "Oracle University",
      date: "Sep 2025",
      icon: "☁️",
      color: "#0066FF",
      description:
        "Advanced expertise in cloud-native data science and ML model deployment on OCI",
      certificateLink: "https://drive.google.com/file/d/1kZNro1JpO0EFP8G5EOUNoxquK56rMg0R/view?usp=drive_link",
    },
    {
      title: "Oracle Generative Artificial Intelligence Professional",
      issuer: "Oracle University",
      date: "Sep 2025",
      icon: "🤖",
      color: "#00BFFF",
      description:
        "Comprehensive knowledge of LLMs, Gen AI, and enterprise AI deployment",
      certificateLink: "https://drive.google.com/file/d/1nnc_8czqlt1oQRT3m1pBARnYlHndei0j/view?usp=drive_link",
    },
    {
      title: "PL/SQL Certification Course",
      issuer: "Simplilearn",
      date: "Aug 2025",
      icon: "💾",
      color: "#0099FF",
      description:
        "Database programming, optimization, and advanced SQL techniques",
      certificateLink: "https://drive.google.com/file/d/19KbX_lsapgdkHQ5osuIH8QpLGxkDcE2s/view?usp=drive_link",
    },
    {
      title: "Cloud Computing",
      issuer: "NPTEL",
      date: "Jul 2025",
      icon: "☁️",
      color: "#00AAFF",
      description:
        "Cloud architecture, virtualization, and distributed computing",
      certificateLink: "https://drive.google.com/file/d/1qY5Ph8-81e79qsX0naaj2AzqST0aA6rO/view?usp=drive_link",
    },
    {
      title: "Forage Data Science Job Simulation",
      issuer: "Deloitte",
      date: "Apr 2025",
      icon: "📊",
      color: "#0088FF",
      description: "Real-world data science projects and business analytics",
      certificateLink: "https://drive.google.com/file/d/1CuS0GFyh8lTy7rCAknc41Dbz0uVIbj9z/view?usp=drive_link",
    },
  ];

  const strengths = [
    { icon: "🏆", text: "Oracle Certified in GenAI & Cloud Data Science" },
    { icon: "💡", text: "Strong analytical and problem-solving skills" },
    { icon: "🚀", text: "260+ coding problems solved" },
    { icon: "📊", text: "Expert in data visualization and insights" },
  ];

  const handleCertificateClick = (link) => {
    if (link !== "#") {
      const newWindow = window.open(link, "_blank", "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
    }
  };

  return (
    <section
      id="certifications"
      className="certifications-new"
      ref={sectionRef}
    >
      <div className="certifications-container-new">
        <div className={`certifications-header ${isVisible ? "fade-in" : ""}`}>
          <span className="certifications-subtitle">Credentials</span>
          <h2 className="certifications-title">
            <span className="gradient-text">Certifications</span> & Achievements
          </h2>
        </div>

        <div className="certifications-grid-new">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`certification-card-new ${
                isVisible ? "slide-up" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className="cert-badge-new"
                style={{ background: cert.color }}
              >
                <span className="cert-icon-new">{cert.icon}</span>
              </div>

              <div className="cert-content-new">
                <div className="cert-meta-new">
                  <span className="cert-issuer-new">{cert.issuer}</span>
                  <span className="cert-date-new" style={{ color: cert.color }}>
                    {cert.date}
                  </span>
                </div>

                <h3 className="cert-title-new">{cert.title}</h3>
                <p className="cert-description-new">{cert.description}</p>

                {cert.certificateLink && (
                  <div
                    className="cert-view-btn-new"
                    style={{ borderColor: cert.color }}
                    onClick={() => handleCertificateClick(cert.certificateLink)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === "Enter")
                        handleCertificateClick(cert.certificateLink);
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M15 3h6v6M14 10l7-7M10 3H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2v-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>View Certificate</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={`strengths-section-new ${isVisible ? "fade-in" : ""}`}>
          <h3 className="strengths-title-new">Key Strengths</h3>
          <div className="strengths-grid-new">
            {strengths.map((strength, index) => (
              <div key={index} className="strength-item-new">
                <span className="strength-icon-new">{strength.icon}</span>
                <p>{strength.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
