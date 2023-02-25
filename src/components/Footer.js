import React from 'react'
import logo from "../assets/logo.jpg"

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <img src={logo} alt="" />
      </div>

      <div>
        <div>
          <h5>FOR GURGAON</h5>
          <p className='toll'>Toll Free Number</p>
          <div></div>

          <p>Email</p>
        </div>
        <div>
          <h5>FOR FARIDABAD</h5>
          <p className='toll'>Toll Free Number</p>
          <div></div>
          <p>Email</p>
        </div>
      </div>

      <div>
        <div>
        <p>18001236244</p>
        <p>marketing@puriconstruction.com</p>
        </div>
        <div>
        <p>18001236244</p>
       <p> marketing@puriconstruction.com</p>
        </div>
      </div>

      <div>
         <div>
          <h5>CORPORATE AND REGISTERED OFFICE</h5>
          <p>
            Puri Construction Private Limited <br/>
            4-7B,Ground Floor , Tolstory House, <br/>
            15 & 17 ,Tolstory Marg <br/>
            New Delhi-110001<br/>
            CIN : U45201DL1971PTC005522{" "}

          </p>
         </div>

         <div>
          <h5>MARKETING OFFICE</h5>
          <p>
            Puri Construction Private Limited <br/>
            11-12A,Ground Floor , Tolstory House, <br/>
            15 & 17 ,Tolstory Marg <br/>
            New Delhi-110001<br/>
           

          </p>
         </div>
      </div>
      
    </div>
  )
}

export default Footer
