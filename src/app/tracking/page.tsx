'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, XCircle } from 'lucide-react'
import Layout from '@/components/layout/layout'

// Mock application data
const applications = [
  {
    id: 1,
    clubName: "Robotics Club",
    status: "In Progress",
    stage: "Interview Scheduled",
    nextStep: "Attend interview on March 15, 2024 at 10:00 AM",
    lastUpdated: "2024-03-10"
  },
  {
    id: 2,
    clubName: "Debate Society",
    status: "Accepted",
    stage: "Completed",
    nextStep: "Check your email for onboarding information",
    lastUpdated: "2024-03-08"
  },
  {
    id: 3,
    clubName: "Chess Club",
    status: "Rejected",
    stage: "Completed",
    nextStep: "Application closed",
    lastUpdated: "2024-03-05"
  }
]

export default function TrackingPage() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Accepted":
        return <CheckCircle className="h-6 w-6 text-green-500" />
      case "Rejected":
        return <XCircle className="h-6 w-6 text-red-500" />
      default:
        return <Clock className="h-6 w-6 text-blue-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Accepted":
        return "bg-green-100 text-green-800"
      case "Rejected":
        return "bg-red-100 text-red-800"
      default:
        return "bg-blue-100 text-blue-800"
    }
  }

  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-blue-800">My Applications</h1>
          <div className="space-y-6">
            {applications.map((app) => (
              <Card key={app.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-blue-800">{app.clubName}</CardTitle>
                      <p className="text-sm text-blue-600">Last updated: {app.lastUpdated}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center gap-2 ${getStatusColor(app.status)}`}>
                      {getStatusIcon(app.status)}
                      {app.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-blue-700">Current Stage</p>
                      <p className="text-blue-600">{app.stage}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-blue-700">Next Step</p>
                      <p className="text-blue-600">{app.nextStep}</p>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  )
}