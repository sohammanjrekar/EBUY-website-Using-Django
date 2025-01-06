import React from 'react'

const page = () => {
  return (
<div className="max-w-2xl mx-auto my-8 bg-white rounded-lg shadow-md overflow-hidden">
  <div className="bg-indigo-600 py-6 px-8">
    <h1 className="text-3xl font-bold text-white text-center">Your OTP Code</h1>
  </div>
  <div className="p-8">
    <p className="text-gray-700 mb-6">Hello,</p>
    <p className="text-gray-700 mb-6">
      Your One-Time Password (OTP) for account verification is:
    </p>
    <div className="bg-gray-100 rounded-lg p-4 mb-6">
      <p className="text-4xl font-bold text-center text-indigo-600">5695314</p>
    </div>
    <p className="text-gray-700 mb-6">
      This OTP is valid for <span className="font-semibold">2 minutes</span>.
      Please do not share this code with anyone.
    </p>
    <p className="text-gray-700 mb-2">
      If you didn't request this code, please ignore this email.
    </p>
    <p className="text-gray-700">Thank you for using our service!</p>
  </div>
  <div className="bg-gray-100 py-4 px-8">
    <p className="text-sm text-gray-600 text-center">
      © 2024 Your Company Name. All rights reserved.
    </p>
  </div>
</div>

  )
}

export default page