'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-montserrat text-white mb-6">
            404 - Page Not Found
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            href="/"
            className="inline-flex items-center px-8 py-4 bg-[#14213D] text-white rounded-lg hover:bg-[#1C2E56] transition-colors font-montserrat"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
} 