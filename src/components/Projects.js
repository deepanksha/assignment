import React from 'react'
import projectImg from '../assets/03.jpg';


const Projects = () => {
  return (
    <div className='projects' id='projects'>
        <div></div>
        <div className="project">
            <div className="project--image">
              <img src={projectImg} alt="" />
            </div>

            <div className="project--detail">
             
            <div className="detail">
                    <span>50</span>
                    <p>
                        years legancy
                    </p>
                    <div></div>
                </div>
            <div className="detail">
                    <span>2150</span>
                    <p>
                        units delivered in<br/>
                        the last 36 months
                    </p>
                    <div></div>
                </div>
            <div className="detail">
                    <span>2700</span>
                    <p>
                        upcoming units <br/>
                        coming up for <br/>
                        delivery in the <br/>
                        Next 24 months {" "}
                    </p>
                   
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Projects
