"use client"

import { useState } from "react"
import { LogOut, Settings, User } from "lucide-react"

export default function UserProfile() {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar: "/placeholder.svg?height=32&width=32",
  })

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button className="relative h-8 w-8 rounded-full" onClick={() => setIsOpen(!isOpen)}>
        <img src={user.avatar || "/placeholder.svg"} alt={user.name} className="h-8 w-8 rounded-full border" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 rounded-md border bg-popover text-popover-foreground shadow-md outline-none z-10">
          <div className="p-2">
            <div className="px-2 py-1.5 text-sm font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
              </div>
            </div>
            <div className="h-px my-1 bg-muted"></div>
            <button className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground w-full">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </button>
            <button className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground w-full">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </button>
            <div className="h-px my-1 bg-muted"></div>
            <button className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground w-full">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
