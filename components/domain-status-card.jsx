import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle, Clock, Globe, Server } from "lucide-react"

export function DomainStatusCard({ domain }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "pending":
        return <Clock className="h-5 w-5 text-amber-500" />
      case "error":
        return <AlertCircle className="h-5 w-5 text-red-500" />
      default:
        return null
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "active":
        return "Active and configured correctly"
      case "pending":
        return "DNS changes are propagating"
      case "error":
        return "Configuration issues detected"
      default:
        return status
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  return (
    <>
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Globe className="h-5 w-5 text-muted-foreground" />
            <CardTitle className="text-lg">Domain Status</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4">
            {getStatusIcon(domain.status)}
            <span className="font-medium">{getStatusText(domain.status)}</span>
          </div>
          <p className="text-sm text-muted-foreground">Last checked: {formatDate(domain.lastUpdated)}</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2">
            <Server className="h-5 w-5 text-muted-foreground" />
            <CardTitle className="text-lg">Nameservers</CardTitle>
          </div>
          <CardDescription>
            {domain.dnsProvider === "Vercel" ? "Using Vercel nameservers" : "Using external nameservers"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {domain.nameservers ? (
            <ul className="space-y-1">
              {domain.nameservers.map((ns, index) => (
                <li key={index} className="text-sm font-mono">
                  {ns}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-muted-foreground">No nameserver information available</p>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm">
          <p className="flex items-center gap-2 cursor-pointer hover:text-primary">
            <CheckCircle className="h-4 w-4" /> Verify DNS Configuration
          </p>
          <p className="flex items-center gap-2 cursor-pointer hover:text-primary">
            <Server className="h-4 w-4" /> Update Nameservers
          </p>
          <p className="flex items-center gap-2 cursor-pointer hover:text-primary">
            <Globe className="h-4 w-4" /> Check Propagation Status
          </p>
        </CardContent>
      </Card>
    </>
  )
}
