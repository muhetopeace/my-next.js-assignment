export const dynamic = "force-dynamic" // ensures SSR

async function getAuthor() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1", { cache: "no-store" })
  return res.json()
}

export default async function AboutPage() {
  const author = await getAuthor()
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">About the Author (SSR)</h1>
      <p className="text-lg">Name: {author.name}</p>
      <p>Email: {author.email}</p>
      <p>Company: {author.company.name}</p>
    </section>
  )
}
