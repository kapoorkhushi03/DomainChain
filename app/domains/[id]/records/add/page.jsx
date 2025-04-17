import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DnsRecordForm } from "@/components/dns-record-form"
import { ArrowLeft } from "lucide-react"

export default function AddDnsRecordPage({ params }) {
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
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href={`/domains/${domain.id}`} className="flex items-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Domain
          </Link>
        </Button>

        <div className="mb-8">
          <h1 className="text-3xl font-bold">Add DNS Record</h1>
          <p className="text-muted-foreground mt-1">Create a new DNS record for {domain.name}</p>
        </div>
      </div>

      <div className="max-w-2xl">
        <DnsRecordForm domainId={domain.id} domainName={domain.name} />
      </div>
    </div>
  )
}
