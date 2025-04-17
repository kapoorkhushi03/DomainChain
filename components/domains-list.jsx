"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, MoreVertical, CheckCircle, AlertCircle, Clock } from "lucide-react"

// Mock data - would be fetched from an API in a real application
const mockDomains = [
  {
    id: "1",
    name: "example.com",
    status: "active",
    recordCount: 12,
    lastUpdated: "2025-04-15T10:30:00Z",
    dnsProvider: "Vercel",
  },
  {
    id: "2",
    name: "mysite.io",
    status: "active",
    recordCount: 5,
    lastUpdated: "2025-04-10T14:22:00Z",
    dnsProvider: "Vercel",
  },
  {
    id: "3",
    name: "client-project.com",
    status: "pending",
    recordCount: 8,
    lastUpdated: "2025-04-17T09:15:00Z",
    dnsProvider: "External",
  },
  {
    id: "4",
    name: "test-domain.dev",
    status: "error",
    recordCount: 3,
    lastUpdated: "2025-04-16T16:45:00Z",
    dnsProvider: "Vercel",
  },
]

export function DomainsList() {
  const [domains, setDomains] = useState(mockDomains)

  const getStatusIcon = (status) => {
    switch (status) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "pending":
        return <Clock className="h-4 w-4 text-amber-500" />
      case "error":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      default:
        return null
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "active":
        return "Active"
      case "pending":
        return "Pending"
      case "error":
        return "Configuration Error"
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
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {domains.map((domain) => (
        <Card key={domain.id} className="overflow-hidden">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-muted-foreground" />
                <CardTitle className="text-lg">{domain.name}</CardTitle>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href={`/domains/${domain.id}`}>View Details</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/domains/${domain.id}/edit`}>Edit Domain</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href={`/domains/${domain.id}/delete`} className="text-red-500">
                      Delete Domain
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <CardDescription>{domain.dnsProvider === "Vercel" ? "Managed by Vercel" : "External DNS"}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 mb-2">
              <Badge
                variant={
                  domain.status === "active" ? "default" : domain.status === "pending" ? "outline" : "destructive"
                }
                className="flex items-center gap-1"
              >
                {getStatusIcon(domain.status)}
                {getStatusText(domain.status)}
              </Badge>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>{domain.recordCount} DNS Records</p>
              <p>Last updated: {formatDate(domain.lastUpdated)}</p>
            </div>
          </CardContent>
          <CardFooter className="pt-1">
            <Button variant="outline" asChild className="w-full">
              <Link href={`/domains/${domain.id}`}>Manage Records</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
