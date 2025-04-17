"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Check, X } from "lucide-react"

export default function SearchDomains() {
  const [domain, setDomain] = useState("")
  const [searchResult, setSearchResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

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
      <div className="flex w-full max-w-md items-center space-x-2 mx-auto">
        <input
          type="text"
          placeholder="Search for a domain..."
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1"
        />
        <button
          onClick={handleSearch}
          disabled={loading}
          className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </div>

      {searchResult && (
        <div className="w-full max-w-md mx-auto rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="flex flex-col space-y-1.5 p-6 pb-2">
            <h3 className="text-lg font-semibold leading-none tracking-tight">{domain}</h3>
            <p className="text-sm text-muted-foreground">Domain search result</p>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {searchResult.available ? (
                  <>
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-green-500 text-white">
                      <Check className="h-3 w-3 mr-1" /> Available
                    </span>
                    <span className="text-sm font-medium">{searchResult.price}</span>
                  </>
                ) : (
                  <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-destructive text-destructive-foreground">
                    <X className="h-3 w-3 mr-1" /> Unavailable
                  </span>
                )}
              </div>
            </div>
          </div>
          {searchResult.available && (
            <div className="flex items-center p-6 pt-0">
              <button
                className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                onClick={() => navigate(`/purchase?domain=${encodeURIComponent(domain)}`)}
              >
                Secure this domain
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
