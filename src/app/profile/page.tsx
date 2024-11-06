'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, Mail, School, BookOpen } from 'lucide-react'
import Layout from '@/components/layout/layout'

// Mock user data
const userData = {
  name: "John Doe",
  email: "john.doe@university.edu",
  university: "Sample University",
  year: "Junior",
  major: "Computer Science",
  applications: [
    { club: "Robotics Club", status: "Pending" },
    { club: "Debate Society", status: "Accepted" },
    { club: "Chess Club", status: "Rejected" }
  ]
}

export default function ProfilePage() {
  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-blue-800">My Profile</h1>
          <Tabs defaultValue="info" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="info">Profile Information</TabsTrigger>
              <TabsTrigger value="applications">My Applications</TabsTrigger>
            </TabsList>
            <TabsContent value="info">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <User className="mr-2" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>Update your profile information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <Input defaultValue={userData.name} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email</label>
                        <Input defaultValue={userData.email} type="email" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">University</label>
                        <Input defaultValue={userData.university} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Year</label>
                        <Input defaultValue={userData.year} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Major</label>
                        <Input defaultValue={userData.major} />
                      </div>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="applications">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="mr-2" />
                    Application History
                  </CardTitle>
                  <CardDescription>Track your club applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userData.applications.map((app, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-4 border rounded-lg bg-blue-50"
                      >
                        <div>
                          <h3 className="font-medium">{app.club}</h3>
                          <p className="text-sm text-blue-600">Status: {app.status}</p>
                        </div>
                        <Button variant="outline">View Details</Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </Layout>
  )
} 