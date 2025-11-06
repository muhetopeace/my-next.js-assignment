import Sidebar from "@/components/Sidebar"

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-6">
      <aside className="w-64 hidden md:block">
        <Sidebar />
      </aside>
      <div className="flex-grow">{children}</div>
    </div>
  )
}
