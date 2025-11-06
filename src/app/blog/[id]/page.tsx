export const revalidate = 60 // revalidate every minute (ISR)

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return res.json()
}

export default async function BlogDetail({ params }: { params: { id: string } }) {
  const post = await getPost(params.id)
  return (
    <article className="space-y-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p>{post.body}</p>
      <p className="text-sm text-gray-500">Post ID: {params.id}</p>
    </article>
  )
}
