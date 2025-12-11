import React, { useEffect, useRef, useState } from "react";
import "./Skills.css";

function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState({});
  const sectionRef = useRef(null);

  const skillCategories = [
    {
      category: "Languages",
      icon: "💻",
      color: "#0066FF",
      skills: [
        { name: "Python", level: 90 },
        { name: "C++", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Core Java", level: 75 },
      ],
    },
    {
      category: "Data Science",
      icon: "📊",
      color: "#00BFFF",
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "Scikit-Learn", level: 80 },
      ],
    },
    {
      category: "Tools & Platforms",
      icon: "🛠️",
      color: "#0099FF",
      skills: [
        { name: "Power BI", level: 90 },
        { name: "Excel", level: 90 },
        { name: "Tableau", level: 80 },
        { name: "Git", level: 85 },
      ],
    },
    {
      category: "Cloud & DevOps",
      icon: "☁️",
      color: "#00AAFF",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Kubernetes", level: 70 },
        { name: "MongoDB", level: 75 },
      ],
    },
  ];

  const competencies = [
    { icon: "💡", title: "Problem Solving", desc: "260+ problems solved" },
    { icon: "📊", title: "Data Analysis", desc: "EDA & visualization expert" },
    { icon: "🤖", title: "Machine Learning", desc: "AI & ML model building" },
    { icon: "🎯", title: "Detail-Oriented", desc: "Clean, accurate insights" },
    { icon: "⚡", title: "Fast Learner", desc: "Quick tech adoption" },
    { icon: "🤝", title: "Team Player", desc: "Collaborative approach" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Initialize progress at 0
          const initialProgress = {};
          skillCategories.forEach((category) => {
            category.skills.forEach((skill) => {
              initialProgress[skill.name] = 0;
            });
          });
          setProgress(initialProgress);

          // Animate to actual values
          setTimeout(() => {
            const finalProgress = {};
            skillCategories.forEach((category) => {
              category.skills.forEach((skill) => {
                finalProgress[skill.name] = skill.level;
              });
            });
            setProgress(finalProgress);
          }, 300);
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

  return (
    <section id="skills" className="skills-new" ref={sectionRef}>
      <div className="skills-container-new">
        {/* Header */}
        <div className={`skills-header ${isVisible ? "fade-in" : ""}`}>
          <span className="skills-subtitle">Tech Stack</span>
          <h2 className="skills-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </div>

        {/* Skills Grid - 4 Columns */}
        <div className="skills-grid-new">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className={`skill-category-new ${isVisible ? "slide-up" : ""}`}
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="category-header-new">
                <span
                  className="category-icon-new"
                  style={{ color: category.color }}
                >
                  {category.icon}
                </span>
                <h3 className="category-title-new">{category.category}</h3>
              </div>

              {/* Skills List */}
              <div className="skills-list-new">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item-new">
                    <div className="skill-header-new">
                      <span className="skill-name-new">{skill.name}</span>
                      <span
                        className="skill-percentage-new"
                        style={{ color: category.color }}
                      >
                        {progress[skill.name] || 0}%
                      </span>
                    </div>
                    <div className="skill-bar-new">
                      <div
                        className="skill-progress-new"
                        style={{
                          width: `${progress[skill.name] || 0}%`,
                          background: `linear-gradient(90deg, ${category.color}, rgba(255,255,255,0.2))`,
                        }}
                      >
                        <div
                          className="skill-glow"
                          style={{ boxShadow: `0 0 20px ${category.color}` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Competencies Section */}
        <div className={`competencies-new ${isVisible ? "fade-in" : ""}`}>
          <h3 className="competencies-title-new">Core Competencies</h3>
          <div className="competencies-grid-new">
            {competencies.map((comp, index) => (
              <div
                key={index}
                className="competency-card-new"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="competency-icon-new">{comp.icon}</div>
                <h4>{comp.title}</h4>
                <p>{comp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
