"use client"

import { useState } from "react"
import { Database, ExternalLink, Globe, QrCode } from "lucide-react"

// Sample NFT data
const SAMPLE_NFTS = [
  {
    id: 1,
    ipAddress: "192.168.1.1",
    domain: "example.com",
    tokenId: "0x1a2b3c4d5e6f",
    mintDate: "2023-05-15",
  },
  {
    id: 2,
    ipAddress: "192.168.2.2",
    domain: "mywebsite.org",
    tokenId: "0x7a8b9c0d1e2f",
    mintDate: "2022-11-30",
  },
  {
    id: 3,
    ipAddress: "192.168.3.3",
    domain: "blockchain-domain.io",
    tokenId: "0x3a4b5c6d7e8f",
    mintDate: "2024-02-10",
  },
]

export default function NFTGallery() {
  const [nfts, setNfts] = useState(SAMPLE_NFTS)

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Your IP Address NFTs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {nfts.map((nft) => (
          <div key={nft.id} className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
            <div className="flex flex-col space-y-1.5 p-6 pb-2">
              <h3 className="text-lg font-semibold leading-none tracking-tight flex items-center gap-2">
                <Database className="h-5 w-5" />
                IP NFT
              </h3>
              <p className="text-sm text-muted-foreground">Minted on {new Date(nft.mintDate).toLocaleDateString()}</p>
            </div>
            <div className="p-6">
              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md flex items-center justify-center mb-4">
                <QrCode className="h-24 w-24 text-gray-500" />
              </div>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium">IP Address</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{nft.ipAddress}</p>
                </div>
                <div>
                  <p className="text-sm font-medium">Linked Domain</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    <Globe className="h-3 w-3" /> {nft.domain}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium">Token ID</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{nft.tokenId}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center p-6 pt-0">
              <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3 w-full gap-1">
                View on Blockchain <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
