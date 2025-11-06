import DateTime from "@/components/DateTime"

export default function HomePage() {
  return (
    <section className="text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to My Next.js Assignment</h1>
      <p className="text-lg mb-6">This is rendered on the client side (CSR):</p>
      <DateTime />
    </section>
  )
}
