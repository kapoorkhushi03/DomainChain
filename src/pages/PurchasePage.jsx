"use client"

import { useState, useEffect } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { ArrowLeft, Check, CreditCard, Globe, Shield } from "lucide-react"

export default function PurchasePage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [domain, setDomain] = useState("")
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const domainParam = searchParams.get("domain")
    if (domainParam) {
      setDomain(domainParam)
    }
  }, [location.search])

  const handlePurchase = () => {
    setLoading(true)
    // Simulate blockchain transaction
    setTimeout(() => {
      setLoading(false)
      setStep(2)
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center border-b">
        <Link className="flex items-center gap-2 font-bold text-xl" to="/">
          <Globe className="h-6 w-6" />
          <span>DomainChain</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="/dashboard">
            Dashboard
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-md mx-auto space-y-8">
          <div>
            <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to search
            </Link>
            <h1 className="mt-4 text-2xl font-bold tracking-tight">Secure Your Domain</h1>
            <p className="text-gray-500 dark:text-gray-400">
              Register and secure your domain with blockchain technology
            </p>
          </div>

          {step === 1 ? (
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold leading-none tracking-tight">Domain Purchase</h3>
                <p className="text-sm text-muted-foreground">Complete your domain registration</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="domain"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Domain Name
                  </label>
                  <input
                    id="domain"
                    value={domain}
                    readOnly
                    className="flex h-10 w-full rounded-md border border-input bg-gray-50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="ip"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    IP Address
                  </label>
                  <input
                    id="ip"
                    placeholder="Enter your server IP address"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <p className="text-xs text-gray-500">This IP will be stored as an NFT on the blockchain</p>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="years"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Registration Period
                  </label>
                  <select
                    id="years"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="1">1 Year - $12.99</option>
                    <option value="2">2 Years - $23.99</option>
                    <option value="5">5 Years - $54.99</option>
                  </select>
                </div>

                <div className="h-px my-4 bg-muted"></div>

                <div className="space-y-2">
                  <label
                    htmlFor="card"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Payment Information
                  </label>
                  <div className="relative">
                    <input
                      id="card"
                      placeholder="Card number"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      htmlFor="expiry"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Expiry Date
                    </label>
                    <input
                      id="expiry"
                      placeholder="MM/YY"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="cvc"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      CVC
                    </label>
                    <input
                      id="cvc"
                      placeholder="CVC"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center p-6 pt-0">
                <button
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                  onClick={handlePurchase}
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Complete Purchase"}
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6 text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold leading-none tracking-tight">Registration Complete!</h3>
                <p className="text-sm text-muted-foreground">Your domain has been secured on the blockchain</p>
              </div>
              <div className="p-6 space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Domain:</span>
                      <span className="text-sm">{domain}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Transaction ID:</span>
                      <span className="text-sm truncate max-w-[180px]">0x3a4b5c6d7e8f9g0h1i2j3k4l</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">NFT Token ID:</span>
                      <span className="text-sm">DomainChain #1234</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Shield className="h-4 w-4" />
                  <span>Your domain is now protected by blockchain technology</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-6 pt-0">
                <button
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                  onClick={() => navigate("/dashboard")}
                >
                  Go to Dashboard
                </button>
                <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                  View Blockchain Record
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 DomainChain. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" to="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
