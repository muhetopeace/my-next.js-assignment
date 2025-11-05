import Link from 'next/link'


export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link href="/">MyBlog</Link>
        </div>
        <ul className="flex space-x-6 items-center">
          <li>
            <Link href="/" className="hover:text-blue-200 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-200 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-blue-200 transition">
              Blog
            </Link>
          </li>
          <li>

          </li>
        </ul>
      </nav>
    </header>
  )
}