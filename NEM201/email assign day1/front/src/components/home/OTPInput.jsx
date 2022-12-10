import React from 'react'
import { MuiOtpInput } from 'mui-one-time-password-input'
import {Button} from "@mui/material"
const OTPInput = ({verifyotp}) => {
  const [otp, setOtp] = React.useState('')

  const handleChange = (newValue) => {
    setOtp(newValue)
  }

// console.log(otp)
  return (
<div style={{display:"flex",padding:"5rem",justifyContent:"center",marginTop:"5rem",gap:"2rem",flexDirection:"column"
}}>
    <MuiOtpInput
    style={{alignSelf:"center"}}
     value={otp} onChange={handleChange} />
    <Button onClick={()=>verifyotp(otp)}>Verify</Button>
  </div>
  )
}

export  default OTPInput;
