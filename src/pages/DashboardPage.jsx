import { Link } from "react-router-dom"
import { Globe, Plus } from "lucide-react"
import DomainList from "../components/DomainList"
import UserProfile from "../components/UserProfile"

export default function DashboardPage() {
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
          <Link className="text-sm font-medium hover:underline underline-offset-4" to="#">
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
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 gap-1">
              <Plus className="h-4 w-4" /> Register New Domain
            </button>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6 pb-2">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">3</h3>
                <p className="text-sm text-muted-foreground">Active Domains</p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6 pb-2">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">3</h3>
                <p className="text-sm text-muted-foreground">IP NFTs</p>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6 pb-2">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">2 Years</h3>
                <p className="text-sm text-muted-foreground">Average Expiry</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-b">
              <div className="flex flex-wrap -mb-px">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-t-md px-3 py-1.5 text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-b-2 border-primary text-primary">
                  My Domains
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-t-md px-3 py-1.5 text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border-b-2 border-transparent hover:text-foreground/80">
                  My IP NFTs
                </button>
              </div>
            </div>
            <DomainList />
            {/* NFTGallery component would be shown when the tab is clicked */}
          </div>
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
