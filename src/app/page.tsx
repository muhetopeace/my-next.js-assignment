import Clock from '../components/Clock'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Welcome to My Next.js Blog
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Exploring the power of Next.js 14 App Router with different rendering techniques
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3 text-blue-600"> Features</h2>
            <ul className="space-y-2 text-gray-700">
              <li>✅ Server-Side Rendering (SSR)</li>
              <li>✅ Static Site Generation (SSG)</li>
              <li>✅ Incremental Static Regeneration (ISR)</li>
              <li>✅ Client-Side Rendering (CSR)</li>
              <li>✅ Dark Mode Support</li>
            </ul>
          </div>
          
          <Clock />
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">About This Project</h2>
          <p className="text-gray-700 leading-relaxed">
            This project demonstrates various Next.js rendering techniques including 
            SSR, SSG, ISR, and CSR. Navigate through the pages to see each technique 
            in action. The clock above updates every second using client-side rendering, 
            while other pages use different rendering strategies optimized for their content.
          </p>
        </div>
      </div>
    </div>
  )
}
