"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { HelpCircle } from "lucide-react"

export function DnsRecordForm({ domainId, domainName, recordId, initialData }) {
  const router = useRouter()
  const isEditing = !!recordId

  const [formData, setFormData] = useState({
    type: initialData?.type || "A",
    name: initialData?.name || "",
    value: initialData?.value || "",
    ttl: initialData?.ttl || 3600,
    priority: initialData?.priority || 10,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // In a real app, this would be an API call
    setTimeout(() => {
      setIsSubmitting(false)
      router.push(`/domains/${domainId}`)
    }, 1000)
  }

  const recordTypes = [
    { value: "A", label: "A - IPv4 Address" },
    { value: "AAAA", label: "AAAA - IPv6 Address" },
    { value: "CNAME", label: "CNAME - Canonical Name" },
    { value: "MX", label: "MX - Mail Exchange" },
    { value: "TXT", label: "TXT - Text" },
    { value: "NS", label: "NS - Name Server" },
    { value: "SRV", label: "SRV - Service" },
    { value: "CAA", label: "CAA - Certificate Authority Authorization" },
  ]

  const ttlOptions = [
    { value: 60, label: "60 seconds (1 minute)" },
    { value: 300, label: "300 seconds (5 minutes)" },
    { value: 3600, label: "3600 seconds (1 hour)" },
    { value: 86400, label: "86400 seconds (24 hours)" },
  ]

  const getPlaceholder = () => {
    switch (formData.type) {
      case "A":
        return "192.0.2.1"
      case "AAAA":
        return "2001:db8::1"
      case "CNAME":
        return "example.com"
      case "MX":
        return "mail.example.com"
      case "TXT":
        return "v=spf1 include:_spf.example.com ~all"
      case "NS":
        return "ns1.example.com"
      case "SRV":
        return "_service._proto.name. TTL class SRV priority weight port target"
      case "CAA":
        return "0 issue letsencrypt.org"
      default:
        return ""
    }
  }

  const getNameHelp = () => {
    return "The hostname for this record. Use @ for the root domain."
  }

  const getValueHelp = () => {
    switch (formData.type) {
      case "A":
        return "The IPv4 address this record points to."
      case "AAAA":
        return "The IPv6 address this record points to."
      case "CNAME":
        return "The canonical name this record points to."
      case "MX":
        return "The mail server hostname this record points to."
      case "TXT":
        return "The text value for this record."
      case "NS":
        return "The nameserver hostname this record points to."
      case "SRV":
        return "The service location record format."
      case "CAA":
        return "The Certificate Authority Authorization record."
      default:
        return ""
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>{isEditing ? "Edit DNS Record" : "Add DNS Record"}</CardTitle>
          <CardDescription>
            {isEditing ? `Modify the DNS record for ${domainName}` : `Create a new DNS record for ${domainName}`}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="type">Record Type</Label>
            <Select value={formData.type} onValueChange={(value) => handleChange("type", value)}>
              <SelectTrigger id="type">
                <SelectValue placeholder="Select record type" />
              </SelectTrigger>
              <SelectContent>
                {recordTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="name">Name</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">{getNameHelp()}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="name"
              placeholder="@ or subdomain"
              value={formData.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
            <p className="text-xs text-muted-foreground">
              {formData.name === "@" || formData.name === "" ? domainName : `${formData.name}.${domainName}`}
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="value">Value</Label>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="h-4 w-4 text-muted-foreground" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="max-w-xs">{getValueHelp()}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <Input
              id="value"
              placeholder={getPlaceholder()}
              value={formData.value}
              onChange={(e) => handleChange("value", e.target.value)}
            />
          </div>

          {formData.type === "MX" && (
            <div className="space-y-2">
              <Label htmlFor="priority">Priority</Label>
              <Input
                id="priority"
                type="number"
                placeholder="10"
                value={formData.priority}
                onChange={(e) => handleChange("priority", Number.parseInt(e.target.value))}
              />
              <p className="text-xs text-muted-foreground">Lower values indicate higher priority</p>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="ttl">TTL (Time to Live)</Label>
            <Select
              value={formData.ttl.toString()}
              onValueChange={(value) => handleChange("ttl", Number.parseInt(value))}
            >
              <SelectTrigger id="ttl">
                <SelectValue placeholder="Select TTL" />
              </SelectTrigger>
              <SelectContent>
                {ttlOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value.toString()}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-xs text-muted-foreground">The time DNS resolvers should cache this record</p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={() => router.push(`/domains/${domainId}`)}>
            Cancel
          </Button>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Saving..." : isEditing ? "Update Record" : "Add Record"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}
