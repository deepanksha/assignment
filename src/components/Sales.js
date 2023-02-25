import React from 'react'
import img1 from "../assets/04.jpg";
import img2 from "../assets/05.jpg";


const Sales = () => {
  return (
    <div className='sales'>
       
       <h2 > Project for sale</h2>
       <div>
        <img src={img1} alt="Outside-view" />
        <img src={img2} alt="Inside-view" />
       </div>

      
    </div>
  )
}

export default Sales
