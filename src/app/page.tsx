export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <div className="text-center max-w-lg mx-auto px-6">
        {/* Simple animated dots */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-75"></div>
            <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>
        
        <h1 className="text-6xl font-bold text-white mb-6">
          HiveTechs
        </h1>
        
        <h2 className="text-2xl text-gray-300 mb-8">
          Coming Soon
        </h2>
        
        <p className="text-lg text-gray-400 mb-8 leading-relaxed">
          We're building the future of AI consensus technology. 
          <br />
          Revolutionary multi-model intelligence platform.
        </p>
        
        <div className="space-y-4">
          <div className="text-sm text-gray-500">
            Follow our progress:
          </div>
          <div className="flex justify-center space-x-4">
            <a href="mailto:hello@hivetechs.io" className="text-blue-400 hover:text-blue-300 transition-colors">
              Contact Us
            </a>
            <span className="text-gray-600">•</span>
            <a href="https://github.com/hivetechs-collective" className="text-blue-400 hover:text-blue-300 transition-colors">
              GitHub
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-sm text-gray-600">
          © 2025 HiveTechs Collective LLC. All rights reserved.
        </div>
      </div>
    </div>
  )
}