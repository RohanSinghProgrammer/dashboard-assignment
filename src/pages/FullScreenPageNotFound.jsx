import React from 'react'

const FullScreenPageNotFound = () => {
  return (
    <div className="grid place-items-center h-screen">
    <div className="grid place-items-center space-y-4">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <h3 className="text-3xl font-semibold">oops! Page not found</h3>
      <p className="text-gray-700">
        Oops! The page you are looking for does not exist. It might have been
        moved or deleted.
      </p>
    </div>
  </div>
  )
}

export default FullScreenPageNotFound