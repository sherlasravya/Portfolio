import React from "react";
import './intro.css';
import { ReactTyped } from "react-typed";
import bg from '../../assets/image.png'
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';


const Intro = () => {
    return(
        <section id="Intro">
            <div className="introcontent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Sravya Sherla</span><br/>
                    <ReactTyped
                        strings={[
                            'Data Engineer',
                            'ML Engineer',
                            'Data Scientist',
                            'Data Analyst',
                            'AI Engineer'
                        ]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop
                    />
                </span>
                <Link><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire me</button></Link>
            </div>
            <img src={bg} alt="" className="bg"/>
        </section>
    )
}

export default Intro;