"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const pathname = usePathname()
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex gap-6 justify-center">
        {["/", "/about", "/blog"].map((path) => (
          <Link
            key={path}
            href={path}
            className={`hover:underline ${pathname === path ? "font-bold" : ""}`}
          >
            {path === "/" ? "Home" : path.replace("/", "").toUpperCase()}
          </Link>
        ))}
      </nav>
    </header>
  )
}
