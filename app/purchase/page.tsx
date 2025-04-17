"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Check, CreditCard, Globe, Shield } from "lucide-react"

export default function PurchasePage() {
  const searchParams = useSearchParams()
  const [domain, setDomain] = useState("")
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)

  useEffect(() => {
    const domainParam = searchParams.get("domain")
    if (domainParam) {
      setDomain(domainParam)
    }
  }, [searchParams])

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
        <Link className="flex items-center gap-2 font-bold text-xl" href="/">
          <Globe className="h-6 w-6" />
          <span>DomainChain</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/dashboard">
            Dashboard
          </Link>
        </nav>
      </header>
      <main className="flex-1 py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-md mx-auto space-y-8">
          <div>
            <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to search
            </Link>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
     Secure Your Domain with Blockchain Technology
        </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Register and secure your domain with blockchain technology
            </p>
          </div>

          {step === 1 ? (
            <Card>
              <CardHeader>
                <CardTitle>Domain Purchase</CardTitle>
                <CardDescription>Complete your domain registration</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="domain">Domain Name</Label>
                  <Input id="domain" value={domain} readOnly className="bg-gray-50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ip">IP Address</Label>
                  <Input id="ip" placeholder="Enter your server IP address" />
                  <p className="text-xs text-gray-500">This IP will be stored as an NFT on the blockchain</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="years">Registration Period</Label>
                  <select
                    id="years"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="1">1 Year - $12.99</option>
                    <option value="2">2 Years - $23.99</option>
                    <option value="5">5 Years - $54.99</option>
                  </select>
                </div>

                <Separator className="my-4" />

                <div className="space-y-2">
                  <Label htmlFor="card">Payment Information</Label>
                  <div className="relative">
                    <Input id="card" placeholder="Card number" />
                    <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cvc">CVC</Label>
                    <Input id="cvc" placeholder="CVC" />
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" onClick={handlePurchase} disabled={loading}>
                  {loading ? "Processing..." : "Complete Purchase"}
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Registration Complete!</CardTitle>
                <CardDescription>Your domain has been secured on the blockchain</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
              </CardContent>
              <CardFooter className="flex flex-col gap-2">
                <Button className="w-full" asChild>
                  <Link href="/dashboard">Go to Dashboard</Link>
                </Button>
                <Button variant="outline" className="w-full">
                  View Blockchain Record
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 DomainChain. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
