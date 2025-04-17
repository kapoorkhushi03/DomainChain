"use client"

import { useState } from "react"
import { Globe, MoreHorizontal, RefreshCw, Shield } from "lucide-react"

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

export default function DomainList() {
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
        <button
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3"
          onClick={refreshDomains}
          disabled={loading}
        >
          <RefreshCw className={`h-4 w-4 mr-2 ${loading ? "animate-spin" : ""}`} />
          Refresh
        </button>
      </div>

      {domains.map((domain) => (
        <div key={domain.id} className="rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6 pb-2">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h3 className="text-lg font-semibold leading-none tracking-tight flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  {domain.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Purchased on {new Date(domain.purchaseDate).toLocaleDateString()}
                </p>
              </div>
              <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-500 text-white">
                Active
              </span>
            </div>
          </div>
          <div className="p-6">
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
          </div>
          <div className="flex items-center p-6 pt-0 justify-between">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
              Manage DNS
            </button>
            <div className="relative">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 w-9 p-0">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More options</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
