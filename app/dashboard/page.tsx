import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DomainList } from "@/components/domain-list"
import { NFTGallery } from "@/components/nft-gallery"
import { UserProfile } from "@/components/user-profile"
import { Globe, Plus } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Support
          </Link>
          <UserProfile />
        </nav>
      </header>
      <main className="flex-1 py-8 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-gray-500 dark:text-gray-400">Manage your domains and NFTs</p>
            </div>
            <Button className="gap-1">
              <Plus className="h-4 w-4" /> Register New Domain
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>3</CardTitle>
                <CardDescription>Active Domains</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>3</CardTitle>
                <CardDescription>IP NFTs</CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>2 Years</CardTitle>
                <CardDescription>Average Expiry</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Tabs defaultValue="domains">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="domains">My Domains</TabsTrigger>
              <TabsTrigger value="nfts">My IP NFTs</TabsTrigger>
            </TabsList>
            <TabsContent value="domains" className="space-y-4">
              <DomainList />
            </TabsContent>
            <TabsContent value="nfts" className="space-y-4">
              <NFTGallery />
            </TabsContent>
          </Tabs>
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
