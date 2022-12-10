import React from 'react'
import OTPInput from './home/OTPInput'

const VerifySignup = () => {
  
    const verifyotp=(otp)=>{
        console.log(otp)
    }
  return (
    <div >
      <OTPInput verifyotp={verifyotp}/>
    </div>
  )
}

export default VerifySignup