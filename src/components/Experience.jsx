import React, { useEffect, useRef, useState } from "react";
import "./Experience.css";

function Experience() {
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

  const experiences = [
    {
      id: 1,
      type: "Internship",
      company: "InAmigos Foundation (IAF)",
      role: "Human Resource Intern",
      duration: "July 2025 - Present (6 months)",
      location: "India - Remote",
      icon: "👔",
      responsibilities: [
        "Responsible for onboarding new interns and issuing offer letters",
        "Maintaining task progress trackers and assigning certificates upon completion",
        "Leading intern teams to ensure smooth operations and project delivery",
      ],
      technologies: [
        "HR Management",
        "Task Tracking",
        "Team Leadership",
        "Documentation",
      ],
    },
    {
      id: 2,
      type: "Internship",
      company: "InAmigos Foundation (IAF)",
      role: "Content Writing Intern",
      duration: "June 2025 - July 2025 (2 months)",
      location: "India - Remote",
      icon: "✍️",
      responsibilities: [
        "Created engaging blog posts and detailed content for various social impact projects",
        "Developed content for organizational initiatives launched by InAmigos Foundation",
        "Collaborated with the content team to ensure high-quality deliverables",
      ],
      technologies: [
        "Content Writing",
        "Blog Writing",
        "Social Impact",
        "Creative Writing",
      ],
    },
    {
      id: 3,
      type: "Internship",
      company: "Skill Craft Technologies",
      role: "Data Science Intern",
      duration: "July 2025 - August 2025",
      location: "Remote",
      icon: "💼",
      responsibilities: [
        "Performed Exploratory Data Analysis (EDA) using Python to extract meaningful insights from diverse datasets",
        "Created clear, decision-focused visualizations using Excel, Power BI, and Tableau",
        "Applied analytical thinking and technical skills to support data-driven strategies in real business scenarios",
      ],
      technologies: [
        "Python",
        "Excel",
        "Power BI",
        "Tableau",
        "Pandas",
        "NumPy",
      ],
    },
    {
      id: 4,
      type: "Training",
      company: "Code Quest Bootcamp",
      role: "DSA Summer Bootcamp - From Basics to Brilliance",
      duration: "June 2025 - July 2025",
      location: "Online",
      icon: "🎓",
      responsibilities: [
        "Completed intensive DSA-focused training in C++, enhancing core algorithmic thinking and problem-solving skills",
        "Developed stack-based Expression Evaluator System using C++, STL, OOP concepts, and stack operations",
        "Achieved O Grade after successfully clearing the proctored examination",
      ],
      technologies: ["C++", "Data Structures", "Algorithms", "STL", "OOP"],
    },
  ];

  return (
    <section id="experience" className="experience-section" ref={sectionRef}>
      <div className="experience-container">
        <div className={`experience-header ${isVisible ? "fade-in" : ""}`}>
          <span className="experience-subtitle">My Journey</span>
          <h2 className="experience-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="experience-description">
            Real-world experience in data science, analytics, and software
            development
          </p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`experience-item ${isVisible ? "slide-up" : ""}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="timeline-dot"></div>

              {/* Content Side */}
              <div className="experience-content">
                <span className="experience-type">{exp.type}</span>
                <p className="experience-duration">{exp.duration}</p>
                <div className="experience-location">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>{exp.location}</span>
                </div>
              </div>

              {/* Card Side */}
              <div className="experience-card">
                <div className="card-header">
                  <div className="card-icon">{exp.icon}</div>
                  <div className="card-title-section">
                    <h3>{exp.role}</h3>
                    <h4>{exp.company}</h4>
                  </div>
                </div>

                <div className="card-divider"></div>

                <div className="card-responsibilities">
                  <h5>Key Highlights:</h5>
                  <ul>
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx}>
                        <span className="bullet">▹</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-technologies">
                  <h5>Technologies:</h5>
                  <div className="tech-tags">
                    {exp.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="card-glow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
