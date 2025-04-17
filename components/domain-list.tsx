"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Globe, MoreHorizontal, RefreshCw, Shield } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Sample domain data
const SAMPLE_DOMAINS = [
  {
    id: 1,
    name: "example.com",
    expiryDate: "2026-05-15",
    ipAddress: "192.168.1.1",
    status: "active",
    purchaseDate: "2023-05-15",
  },
  {
    id: 2,
    name: "mywebsite.org",
    expiryDate: "2025-11-30",
    ipAddress: "192.168.2.2",
    status: "active",
    purchaseDate: "2022-11-30",
  },
  {
    id: 3,
    name: "blockchain-domain.io",
    expiryDate: "2026-02-10",
    ipAddress: "192.168.3.3",
    status: "active",
    purchaseDate: "2024-02-10",
  },
]

export function DomainList() {
  const [domains, setDomains] = useState(SAMPLE_DOMAINS)
  const [loading, setLoading] = useState(false)

  const refreshDomains = () => {
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Your Registered Domains</h2>
        <Button variant="outline" size="sm" onClick={refreshDomains} disabled={loading}>
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      {domains.map((domain) => (
        <Card key={domain.id}>
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  {domain.name}
                </CardTitle>
                <CardDescription>Purchased on {new Date(domain.purchaseDate).toLocaleDateString()}</CardDescription>
              </div>
              <Badge className="bg-green-500">Active</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium">IP Address (NFT)</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <Shield className="h-3 w-3" /> {domain.ipAddress}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium">Expiry Date</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {new Date(domain.expiryDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm">
              Manage DNS
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Renew Domain</DropdownMenuItem>
                <DropdownMenuItem>Update IP Address</DropdownMenuItem>
                <DropdownMenuItem>View Blockchain Record</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-red-500">Transfer Ownership</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
