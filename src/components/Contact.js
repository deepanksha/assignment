import React from 'react'

const Contact = () => {
  return (
    <div className='contact'>

      <div>
        <div></div>
        <h2>request a call back</h2>
      </div>

      <div>
        <form>
            <input type="text" placeholder='NAME*' required />
            <input type="number" placeholder='MOBILE*'required/>
            <input type="email"  placeholder='EMAIL*'required/>

        </form>
      </div>

      <button type="submit">SUBMIT</button>
    </div>
  )
}

export default Contact
