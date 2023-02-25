import React from 'react'
import homeImg from "../assets/homeImg.jpg";

const Home = () => {
  return (
    <div className='home'>
        <div className="home--text">
           <div className="left">
            <h1>diplomatic greens</h1>
            <p>sector 110{" "} A & 111 , gurugram</p>
           </div>

           <div className="right">
            <p>Diplomatic Greens ensures the world is indeed your oyster. The property's vantage location ensures you stay connected,network and in the midst of urban. </p>

            <button>More details</button>
           </div>
        </div>

        <div className="home--image">
            <img src={homeImg} alt="Home" />
        </div>
      
    </div>
  )
}

export default Home
