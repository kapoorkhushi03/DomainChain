import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DomainsList } from "@/components/domains-list"

export default function HomePage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">DNS Management</h1>
          <p className="text-muted-foreground mt-1">Manage your domains and DNS records</p>
        </div>
        <Button asChild>
          <Link href="/domains/add">Add Domain</Link>
        </Button>
      </div>

      <DomainsList />
    </div>
  )
}
