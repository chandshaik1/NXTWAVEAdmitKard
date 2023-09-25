import {useState} from 'react'
import './App.css'
import MobileNumberScreen from './MobileNumberScreen'
import OTPVerificationScreen from './OTPVerificationScreen'
import SuccessScreen from './SuccessScreen'

function App() {
  const [screen, setScreen] = useState('mobileNumber') // Screen states: 'mobileNumber', 'otpVerification', 'success'
  const [mobileNumber, setMobileNumber] = useState('')
  const [otp, setOTP] = useState('')
  const [notification, setNotification] = useState('')

  const handleSendOTP = () => {
    // Simulate sending OTP via API (replace with actual API call)
    const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString()

    // Display OTP in a notification
    setNotification(`OTP sent to ${mobileNumber}: ${generatedOTP}`)
    setScreen('otpVerification')
  }

  const handleVerifyOTP = () => {
    // Simulate OTP verification via API (replace with actual API call)
    if (otp === '123456') {
      setNotification('OTP verified. Redirecting to success screen.')
      setScreen('success')
    } else {
      setNotification('Incorrect OTP. Please try again.')
    }
  }

  return (
    <div className="App">
      {screen === 'mobileNumber' && (
        <MobileNumberScreen
          mobileNumber={mobileNumber}
          setMobileNumber={setMobileNumber}
          handleSendOTP={handleSendOTP}
        />
      )}

      {screen === 'otpVerification' && (
        <OTPVerificationScreen
          otp={otp}
          setOTP={setOTP}
          handleVerifyOTP={handleVerifyOTP}
          notification={notification}
        />
      )}

      {screen === 'success' && <SuccessScreen />}
    </div>
  )
}

export default App
