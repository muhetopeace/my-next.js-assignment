import Link from "next/link"

export const revalidate = 3600 // revalidate every hour (SSG)

interface Post {
  id: number
  title: string
  body: string
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  if (!res.ok) throw new Error("Failed to fetch posts")
  return res.json()
}

export default async function BlogPage() {
  const posts = await getPosts()
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Blog Posts (SSG)</h1>
      <ul className="space-y-3">
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
