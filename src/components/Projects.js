import React, { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import './styles/Projects.css';
import img from '../assets/images/sample.jpg';
import psl from '../assets/images/psl.png';
import wine from '../assets/images/image.png';

const projects = [
  {
    title: "Movie Recommendation System",
    description: "Created a content-based machine learning model using cosine similarity to recommend movies based on genre, directors, and actors.",
    tech: ["Python", "Pandas", "Streamlit", "scikit-learn"],
    github: "https://github.com/yourusername/movie-recommendation",
    live: "https://movierecommendation.example.com",
    features: [
      "Utilized natural language processing techniques to parse and vectorize movie descriptions and metadata.",
      "Deployed the model as a web application using Streamlit framework, allowing users to input their preferences and receive movie suggestions."
    ],
    image: img
  },
  {
    "title": "Pakistan Super League (PSL) Batting Analysis",
    "description": "This project analyzes the batting performance of players in the Pakistan Super League (PSL) using a provided dataset to extract insights into player and team performance.",
    "tech": ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    "github": "https://github.com/Dawood-Imran/PSL-Data-Set-Analysis/", 
    "live": null,  // If you have deployed the project somewhere, include the link here
    "keyHighlights": [
      "Identified top players based on batting averages, strike rates, and centuries.",
      "Determined the team with the highest average number of runs per player.",
      "Investigated the correlation between innings played, runs scored, and strike rates.",
      "Visualized key findings using bar plots, scatter plots, and histograms."
    ],
    "image": psl  // Replace with path to your image file
  },
  {
    "title": "Wine Quality Prediction",
    "description": "This project aims to predict the quality of wine based on various chemical properties using machine learning techniques. The dataset used contains information about different types of wine and their respective quality ratings.",
    "tech": ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib", "Flask"],
    "github": "https://github.com/Dawood-Imran/wine-quality-prediction",
    "live": null,  
    "keyHighlights": [
      "Performed data preprocessing, including handling missing values, encoding categorical variables, and feature scaling.",
      "Implemented a Elastic Net regression model to predict wine quality based on chemical properties.",
      "Created the training pipeline to fit the model and evaluate its performance using metrics such as mean squared error and R-squared.",
      "Created the testing pipeline to make predictions on new data and assess the model's generalization ability.",
      "Created a Flask web application to allow users to input wine characteristics and receive quality predictions."
    ],
    "image": wine
  },
  {
    title: "Web Scraping and EDA",
    description: "Scraped the PakLaps.pk website to gather data on 250 laptops and 50 tablets, created a dataframe, applied preprocessing, and performed exploratory data analysis (EDA).",
    tech: ["Python", "BeautifulSoup", "Selenium"],
    github: "https://github.com/yourusername/web-scraping-eda",
    live: "https://webscrapingeda.example.com",
    features: [
      "Cleaned and structured the raw data, dealing with missing values, outliers, and inconsistent formatting."
    ],
    image: img
  },
  {
    title: "Dynamic Question Answering and Quiz Application",
    description: "Created a web application to extract answers from PDFs using Google Gemini API, enhancing document interaction capabilities.",
    tech: ["Python", "Streamlit", "Gemini API"],
    github: "https://github.com/yourusername/quiz-application",
    live: "https://quizapplication.example.com",
    features: [
      "Designed a system that generates and administers quizzes from PDFs, featuring automatic question parsing and scoring.",
      "Utilized Streamlit to build user-friendly interfaces for both the question answering and quiz applications, ensuring efficient data handling and presentation."
    ],
    image: img
  },
  {
    title: "Real-Time Job Listings Scraper",
    description: "A web scraping project designed to collect and display real-time job postings from popular job portals.",
    tech: ["Python", "BeautifulSoup", "Requests", "Pandas"],
    github: "https://github.com/yourusername/job-scraper",
    live: "https://jobscraper.example.com",
    features: [
      "Automated scraping of job titles, descriptions, locations, and company names.",
      "Data is cleaned, structured, and exported for further analysis.",
      "This project showcases proficiency in data scraping and manipulation."
    ],
    image: img
  },
  {
    title: "Malware Detection Using Smart Home Network Traffic",
    description: "A machine learning project focused on detecting malware in IoT networks using smart home traffic data.",
    tech: ["Python", "Scikit-Learn", "Pandas"],
    github: "https://github.com/yourusername/malware-detection",
    live: "https://malwaredetection.example.com",
    keyHighlights: [
      "Used a real-world smart home dataset for analysis.",
      "Applied Decision Tree and Random Forest models for classification.",
      "Evaluated model performance using accuracy, precision, and recall metrics."
    ],
    image: img
  },
  
];

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setModalOpen(false);
  };

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => openModal(project)}>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="project-tech-list">
                {project.tech.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <Github size={20} />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>X</button>
            <h3>{selectedProject.title}</h3>
            <img src={selectedProject.image} alt={selectedProject.title} className="project-image" />
            <p>{selectedProject.description}</p>
            <ul className="project-tech-list">
              {selectedProject.tech.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            {selectedProject.features && (
              <div className="project-features">
                <h4>Features:</h4>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            {selectedProject.keyHighlights && (
              <div className="project-highlights">
                <h4>Key Highlights:</h4>
                <ul>
                  {selectedProject.keyHighlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;