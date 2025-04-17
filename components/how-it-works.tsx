import { ArrowRight, Database, Globe, Lock, Shield } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How DomainChain Works</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Our revolutionary approach combines traditional DNS with blockchain security
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <Globe className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              </div>
              <h3 className="text-xl font-bold">1. Search & Purchase</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Search for your perfect domain name and purchase it directly through our platform.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <Lock className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              </div>
              <h3 className="text-xl font-bold">2. Blockchain Security</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your domain is secured on the blockchain with a tamper-proof record of ownership.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <Database className="h-8 w-8 text-gray-900 dark:text-gray-50" />
              </div>
              <h3 className="text-xl font-bold">3. IP as NFT</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your IP address is stored as an NFT, creating a unique digital asset tied to your domain.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <ArrowRight className="h-8 w-8 text-gray-400 animate-pulse" />
          </div>
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
            <Shield className="h-12 w-12 text-gray-900 dark:text-gray-50" />
          </div>
          <h3 className="text-2xl font-bold">Complete Protection</h3>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400">
            The result is a fully secured domain with blockchain verification and NFT-backed IP address mapping.
          </p>
        </div>
      </div>
    </section>
  )
}
