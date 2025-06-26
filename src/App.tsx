import React from 'react'
import { ShoppingCart } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="flex justify-center items-center mb-4">
            <ShoppingCart className="w-12 h-12 text-indigo-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">Buyers Club</h1>
          </div>
          <p className="text-lg text-gray-600 mb-8">Welcome to your exclusive shopping experience</p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Getting Started</h2>
            <p className="text-gray-600">Your Buyers Club application is ready to be customized!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App