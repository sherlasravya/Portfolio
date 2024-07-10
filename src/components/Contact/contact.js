import React from "react"
import "./contact.css" // Make sure to create and import a CSS file for styling

const Contact = () => {
    return (
        <section className="contactPage">
            <div id="clients">
                {/* Your clients content here */}
            </div>
            <div className="experience">
                <h2>Experience</h2>
                
                <div className="job">
                    <h3>GRADUATE ASSOCIATE (YSU)</h3>
                    <p className="date">June 2023 - May 2024</p>
                    <ul>
                        <li>Collaborated with professors and fellow students on research projects, contributing to server side web-development, Principles of computer programming and gaining hands-on experience in Nodejs and JavaScript.</li>
                        <li>Assisted in data preprocessing and feature engineering for NLP tasks.</li>
                        <li>Contributed to the development of language models for text generation.</li>
                        <li>Gained exposure to prompt engineering techniques and their applications.</li>
                    </ul>
                </div>

                <div className="job">
                    <h3>Data Engineer at Wipro, Hyderabad, India</h3>
                    <p className="date">Aug 2021 - Dec 2022</p>
                    <p><strong>Project:</strong> Verizon</p>
                    <p><strong>Environment:</strong> Google Big Query, Data Fusion, Apache Airflow, Google Cloud Platform (GCP), Python, SQL</p>
                    <p><strong>Description:</strong> The project involves developing and maintaining advanced data management solutions on Google Cloud Platform (GCP) to support high-performance data ingestion, processing, and storage.</p>
                    <h4>Roles and Responsibilities:</h4>
                    <ul>
                        <li>Supported Data ingestion pipelines, data processing workflows, and data storage solutions using GCP services such as Cloud Storage, Big Query, Dataflow, Composer etc.</li>
                        <li>Worked with other DEs to integrate data solutions into applications.</li>
                        <li>Managed & configured data integration processes to extract data from various sources, transform and cleanse it, and load it into appropriate data storage systems.</li>
                        {/* Add more responsibilities here */}
                    </ul>
                </div>

                <div className="job">
                    <h3>Data Engineer at Mphasis, Chennai, India</h3>
                    <p className="date">Jun 2018- Aug 2020</p>
                    <p><strong>Project:</strong> Unite Airlines & Copa Airlines</p>
                    <p><strong>Environment:</strong> Java, Python, AWS, Oracle DB, SOAP, REST, Angular</p>
                    <p><strong>Description:</strong> The project involved developing and enhancing web service functionalities for Unite Airlines and Copa Airlines, focusing on key airport operations.</p>
                    <h4>Roles and Responsibilities:</h4>
                    <ul>
                        <li>Web Service Development: Developed robust web service functionalities using SOAP and REST protocols to support various airport operations.</li>
                        <li>AWS Integration: Utilized AWS services to ensure scalable and reliable deployment of web services.</li>
                        <li>Database Management: Managed and optimized Oracle DB for efficient data storage, retrieval, and transactions.</li>
                        {/* Add more responsibilities here */}
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Contact;