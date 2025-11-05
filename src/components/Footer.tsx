export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} MyBlog. All rights reserved.</p>
        <p className="text-sm text-gray-400 mt-2">
          Built with Next.js 14 App Router
        </p>
      </div>
    </footer>
  )
}