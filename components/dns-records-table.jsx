"use client"

import { useState } from "react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Edit, Trash2, MoreVertical, Clock } from "lucide-react"

// Mock data - would be fetched from an API in a real application
const getMockRecords = (domainId) => [
  {
    id: "1",
    type: "A",
    name: "@",
    value: "76.76.21.21",
    ttl: 60,
    status: "active",
    updatedAt: "2025-04-15T10:30:00Z",
  },
  {
    id: "2",
    type: "CNAME",
    name: "www",
    value: "example.com",
    ttl: 3600,
    status: "active",
    updatedAt: "2025-04-14T09:15:00Z",
  },
  {
    id: "3",
    type: "MX",
    name: "@",
    value: "mail.example.com",
    priority: 10,
    ttl: 3600,
    status: "active",
    updatedAt: "2025-04-13T14:22:00Z",
  },
  {
    id: "4",
    type: "TXT",
    name: "@",
    value: "v=spf1 include:_spf.example.com ~all",
    ttl: 3600,
    status: "active",
    updatedAt: "2025-04-12T16:45:00Z",
  },
  {
    id: "5",
    type: "CNAME",
    name: "blog",
    value: "blog-platform.com",
    ttl: 3600,
    status: "propagating",
    updatedAt: "2025-04-17T08:30:00Z",
  },
]

export function DnsRecordsTable({ domainId }) {
  const [records, setRecords] = useState(getMockRecords(domainId))
  const [recordToDelete, setRecordToDelete] = useState(null)

  const handleDeleteRecord = () => {
    if (recordToDelete) {
      setRecords(records.filter((record) => record.id !== recordToDelete))
      setRecordToDelete(null)
    }
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date)
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Value</TableHead>
              <TableHead>TTL</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Updated</TableHead>
              <TableHead className="w-[80px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((record) => (
              <TableRow key={record.id}>
                <TableCell className="font-medium">{record.type}</TableCell>
                <TableCell>{record.name}</TableCell>
                <TableCell className="font-mono text-xs max-w-[200px] truncate">
                  {record.value}
                  {record.priority && ` (Priority: ${record.priority})`}
                </TableCell>
                <TableCell>{record.ttl}s</TableCell>
                <TableCell>
                  {record.status === "propagating" ? (
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      Propagating
                    </Badge>
                  ) : (
                    <Badge>Active</Badge>
                  )}
                </TableCell>
                <TableCell>{formatDate(record.updatedAt)}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <MoreVertical className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem asChild>
                        <Link
                          href={`/domains/${domainId}/records/${record.id}/edit`}
                          className="flex items-center gap-2"
                        >
                          <Edit className="h-4 w-4" />
                          Edit
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        className="text-red-500 flex items-center gap-2"
                        onClick={() => setRecordToDelete(record.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={!!recordToDelete} onOpenChange={(open) => !open && setRecordToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the DNS record.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteRecord} className="bg-red-500 hover:bg-red-600">
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}
