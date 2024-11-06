'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Users, Calendar } from 'lucide-react'
import Layout from '@/components/layout/layout'
import Link from 'next/link'

// Mock data for club management
const clubData = {
  name: "Robotics Club",
  description: "Build and program robots for competitions and research projects.",
  category: "Technology",
  memberCount: 42,
  pendingApplications: [
    { id: 1, name: "Alice Johnson", status: "Pending" },
    { id: 2, name: "Bob Smith", status: "Pending" },
    { id: 3, name: "Charlie Brown", status: "Pending" },
  ],
  upcomingEvents: [
    { id: 1, name: "Robot Building Workshop", date: "2024-03-15" },
    { id: 2, name: "Local Robotics Competition", date: "2024-04-02" },
  ]
}

export default function ClubManagement() {
  const [clubInfo, setClubInfo] = useState(clubData)

  const handleProfileUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real application, this would send the updated info to a server
    alert("Profile updated successfully!")
  }

  const handleApplicationAction = (id: number, action: 'approve' | 'reject') => {
    // In a real application, this would update the application status on a server
    setClubInfo(prevState => ({
      ...prevState,
      pendingApplications: prevState.pendingApplications.filter(app => app.id !== id)
    }))
    alert(`Application ${action}d successfully!`)
  }

  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-blue-800">Manage Your Club</h1>
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="profile">Club Profile</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
            </TabsList>
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center">
                    <Edit className="mr-2" />
                    Edit Club Profile
                  </CardTitle>
                  <CardDescription className="text-blue-600">
                    Update your club's information and settings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileUpdate} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="clubName" className="text-sm font-medium text-blue-700">Club Name</label>
                      <Input id="clubName" defaultValue={clubInfo.name} className="border-blue-200 focus:border-blue-400 focus:ring-blue-400" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="clubDescription" className="text-sm font-medium text-blue-700">Description</label>
                      <Textarea id="clubDescription" defaultValue={clubInfo.description} className="border-blue-200 focus:border-blue-400 focus:ring-blue-400" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="clubCategory" className="text-sm font-medium text-blue-700">Category</label>
                      <Input id="clubCategory" defaultValue={clubInfo.category} className="border-blue-200 focus:border-blue-400 focus:ring-blue-400" />
                    </div>
                    <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">Save Changes</Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
            {/* Rest of your tabs content */}
          </Tabs>
        </div>
      </main>
    </Layout>
  )
} 