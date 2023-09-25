// Remove the unused 'React' import
// Line 1: import React from 'react';

function OTPVerificationScreen({otp, setOTP, handleVerifyOTP, notification}) {
  return (
    <div>
      <h1>OTP Verification Screen</h1>
      <p>Enter the OTP sent to your mobile number.</p>
      <div>
        <label htmlFor="otp">Enter OTP:</label>
        <input
          type="number"
          id="otp"
          placeholder="Enter OTP"
          value={otp}
          onChange={e => setOTP(e.target.value)}
        />
        <p>Didn’t receive the code?, Resend.</p>
      </div>
      {/* Add a type attribute to the button */}
      <button type="button" onClick={handleVerifyOTP}>
        Verify OTP
      </button>
      {notification && <div className="notification">{notification}</div>}
    </div>
  )
}

export default OTPVerificationScreen
