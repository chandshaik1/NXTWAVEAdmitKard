// Remove the unused 'React' import
// Line 1: import React from 'react';

function MobileNumberScreen({mobileNumber, setMobileNumber, handleSendOTP}) {
  return (
    <div>
      <h1>AdmitKard</h1>
      <p>Welcome Back</p>
      <p> Please sign in to your account </p>
      <div>
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="tel"
          id="mobileNumber"
          placeholder="Enter your mobile number"
          value={mobileNumber}
          onChange={e => setMobileNumber(e.target.value)}
        />
        <p>We will send you a one time SMS message. Charges may apply </p>
      </div>
      {/* Add a type attribute to the button */}
      <button type="button" onClick={handleSendOTP}>
        Sign In with OTP
      </button>
    </div>
  )
}

export default MobileNumberScreen
