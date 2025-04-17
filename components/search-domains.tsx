"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from "lucide-react"

export function SearchDomains() {
  const [domain, setDomain] = useState("")
  const [searchResult, setSearchResult] = useState<null | { available: boolean; price: string }>(null)
  const [loading, setLoading] = useState(false)

  const handleSearch = () => {
    if (!domain) return

    setLoading(true)

    // Simulate API call to check domain availability
    setTimeout(() => {
      // For demo purposes, domains with "taken" are unavailable, others are available
      const available = !domain.toLowerCase().includes("taken")
      setSearchResult({
        available,
        price: available ? "$12.99/year" : "",
      })
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="w-full space-y-4">
      <div className="flex w-full max-w-md items-center space-x-2">
        <Input
          type="text"
          placeholder="Search for a domain..."
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex-1"
        />
        <Button onClick={handleSearch} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>

      {searchResult && (
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">{domain}</CardTitle>
            <CardDescription>Domain search result</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {searchResult.available ? (
                  <>
                    <Badge className="bg-green-500">
                      <Check className="h-3 w-3 mr-1" /> Available
                    </Badge>
                    <span className="text-sm font-medium">{searchResult.price}</span>
                  </>
                ) : (
                  <Badge variant="destructive">
                    <X className="h-3 w-3 mr-1" /> Unavailable
                  </Badge>
                )}
              </div>
            </div>
          </CardContent>
          {searchResult.available && (
            <CardFooter>
              <Button
                className="w-full"
                onClick={() => (window.location.href = "/purchase?domain=" + encodeURIComponent(domain))}
              >
                Secure this domain
              </Button>
            </CardFooter>
          )}
        </Card>
      )}
    </div>
  )
}
