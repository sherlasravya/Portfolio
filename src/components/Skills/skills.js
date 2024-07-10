import React from "react";
import './skills.css';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">About me</span>
            <span className="skillDesc"> I am a passionate software engineer with over 4 years of experience in application development. I specialize in Big Data and Machine Learning technologies and have a strong background in programming. As a Data Engineer, I design, build, and maintain data pipelines, ensuring data quality and integrity, and work with large-scale datasets to support analytics and machine learning. As a Data Analyst, I collect, clean, and analyze data to derive actionable insights, develop dashboards and reports, and use statistical methods to support data-driven decision-making.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Big Data & Application Development</h2>
                        <p>I have worked extensively with BigQuery, Spark, Scala, and Python. I am skilled in developing data-driven applications, ETL processes, and data orchestration.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Full-Stack Development</h2>
                        <p>I am proficient in Java, Spring Framework, Hibernate, and RESTful APIs. I also have experience with front-end technologies like React, JavaScript, HTML, and CSS.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Data Analysis & Visualization</h2>
                        <p>I am skilled in data preprocessing, feature engineering, and model selection. I have experience with deep learning architectures for tasks in computer vision and NLP. I also use tools like Matplotlib and Tableau for data visualization.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Cloud & Big Data Technologies</h2>
                        <p>I have hands-on experience with Hadoop, Hive, SQL, and NoSQL. I am also familiar with cloud platforms like AWS, GCP, and Databricks.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <div className="skillBarText">
                        <h2>Machine Learning & AI</h2>
                        <p>I understand machine learning algorithms and techniques and am proficient in Python and R. I have used libraries like TensorFlow, PyTorch, Scikit-learn, and Keras for various projects.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;