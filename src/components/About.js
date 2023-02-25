import React from 'react'
import aboutImg from "../assets/02.jpg"

const About = () => {
  return (
    <div className='about' id='about'>
        <div className="about-text">
            <h2>Delivering quality in each endeavour</h2>
            <p>Every project has a distinctive Puri design languagewith has become synonymous with refined living in Delhi NCR.South-East Asian inspired landscaping and ultra luxurious watch clubhouses are some of the things which can be seen in every project of Puri Constructions.</p>

            <button>DISCOVER MORE</button>
        </div>

        <div className="about-img">
            <img src={aboutImg} alt="interior" />
        </div>
      
    </div>
  )
}

export default About
