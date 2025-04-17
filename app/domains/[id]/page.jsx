import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DnsRecordsTable } from "@/components/dns-records-table"
import { DomainStatusCard } from "@/components/domain-status-card"
import { ArrowLeft, Plus } from "lucide-react"

// This would be a server component in a real app that fetches domain data
export default function DomainDetailsPage({ params }) {
  // Mock data - would be fetched from an API in a real application
  const domain = {
    id: params.id,
    name:
      params.id === "1"
        ? "example.com"
        : params.id === "2"
          ? "mysite.io"
          : params.id === "3"
            ? "client-project.com"
            : "test-domain.dev",
    status: params.id === "4" ? "error" : params.id === "3" ? "pending" : "active",
    dnsProvider: params.id === "3" ? "External" : "Vercel",
    nameservers: ["ns1.vercel-dns.com", "ns2.vercel-dns.com"],
    lastUpdated: "2025-04-15T10:30:00Z",
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/" className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Domains
          </Link>
        </Button>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">{domain.name}</h1>
            <p className="text-muted-foreground mt-1">
              {domain.dnsProvider === "Vercel" ? "Managed by Vercel" : "External DNS"}
            </p>
          </div>
          <Button asChild>
            <Link href={`/domains/${domain.id}/records/add`} className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Add DNS Record
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <DomainStatusCard domain={domain} />
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-4">DNS Records</h2>
        <DnsRecordsTable domainId={domain.id} />
      </div>
    </div>
  )
}
