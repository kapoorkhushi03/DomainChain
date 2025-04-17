import { CheckCircle, Database, Globe, Lock, Shield, Zap } from "lucide-react"

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Features</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              DomainChain offers unique benefits that traditional domain registrars can't match
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <Shield className="h-6 w-6 text-gray-900 dark:text-gray-50" />
              </div>
              <h3 className="text-xl font-bold">Tamper-Proof Security</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Blockchain technology ensures your domain ownership cannot be altered or hacked.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Immutable ownership records
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Decentralized verification
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <Database className="h-6 w-6 text-gray-900 dark:text-gray-50" />
              </div>
              <h3 className="text-xl font-bold">IP Address as NFT</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your IP address is tokenized as an NFT, creating a unique digital asset.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Tradable digital asset
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Verifiable on blockchain
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <Lock className="h-6 w-6 text-gray-900 dark:text-gray-50" />
              </div>
              <h3 className="text-xl font-bold">One-to-One Mapping</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Secure one-to-one mapping between your domain and IP address.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Prevents DNS hijacking
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Enhanced routing security
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <Globe className="h-6 w-6 text-gray-900 dark:text-gray-50" />
              </div>
              <h3 className="text-xl font-bold">Global DNS Integration</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Works with the existing DNS system while adding blockchain security.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Compatible with all browsers
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  No special software needed
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <Zap className="h-6 w-6 text-gray-900 dark:text-gray-50" />
              </div>
              <h3 className="text-xl font-bold">Fast Transfers</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Transfer domain ownership quickly and securely through blockchain transactions.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  No waiting periods
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Instant verification
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start space-y-3 rounded-lg border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800">
                <Shield className="h-6 w-6 text-gray-900 dark:text-gray-50" />
              </div>
              <h3 className="text-xl font-bold">Anti-Fraud Protection</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Blockchain verification prevents domain fraud and phishing attempts.
              </p>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Prevents domain spoofing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                  Enhanced user trust
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
