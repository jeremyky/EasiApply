'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Edit, Users, Calendar, Video, FileText, CheckCircle, XCircle, Clock, Plus } from 'lucide-react'
import Layout from '@/components/layout/layout'
import Link from 'next/link'

// Mock data for user's clubs
const userClubs = [
  {
    id: 1,
    name: "Robotics Club",
    role: "President",
    memberCount: 42,
    description: "Build and program robots for competitions and research projects.",
    category: "Technology",
  },
  {
    id: 2,
    name: "Chess Club",
    role: "Vice President",
    memberCount: 25,
    description: "Learn and compete in chess tournaments.",
    category: "Games",
  },
  {
    id: 3,
    name: "Photography Club",
    role: "Events Coordinator",
    memberCount: 35,
    description: "Explore photography techniques and showcase creative work.",
    category: "Arts",
  }
]

// Mock data for club management
const clubData = {
  pendingApplications: [
    { 
      id: 1, 
      name: "Alice Johnson", 
      status: "Written Review",
      submittedAt: "2024-03-10",
      progress: [
        { stage: "Written Application", status: "Completed", date: "2024-03-10" },
        { stage: "Video Interview", status: "Pending", date: null },
        { stage: "In-Person Interview", status: "Not Started", date: null }
      ]
    },
    { 
      id: 2, 
      name: "Bob Smith", 
      status: "Video Review",
      submittedAt: "2024-03-09",
      progress: [
        { stage: "Written Application", status: "Completed", date: "2024-03-09" },
        { stage: "Video Interview", status: "Completed", date: "2024-03-11" },
        { stage: "In-Person Interview", status: "Not Started", date: null }
      ]
    },
    { 
      id: 3, 
      name: "Charlie Brown", 
      status: "Schedule Interview",
      submittedAt: "2024-03-08",
      progress: [
        { stage: "Written Application", status: "Completed", date: "2024-03-08" },
        { stage: "Video Interview", status: "Completed", date: "2024-03-10" },
        { stage: "In-Person Interview", status: "Pending", date: null }
      ]
    },
    {
      id: 4,
      name: "Diana Prince",
      status: "Written Review",
      submittedAt: "2024-03-11",
      progress: [
        { stage: "Written Application", status: "Completed", date: "2024-03-11" },
        { stage: "Video Interview", status: "Not Started", date: null },
        { stage: "In-Person Interview", status: "Not Started", date: null }
      ]
    },
    {
      id: 5,
      name: "Edward Stark",
      status: "Video Review",
      submittedAt: "2024-03-10",
      progress: [
        { stage: "Written Application", status: "Completed", date: "2024-03-10" },
        { stage: "Video Interview", status: "Completed", date: "2024-03-12" },
        { stage: "In-Person Interview", status: "Not Started", date: null }
      ]
    }
  ],
  upcomingEvents: [
    { 
      id: 1, 
      name: "Robot Building Workshop", 
      date: "2024-03-15",
      time: "14:00-16:00",
      location: "Engineering Lab 101",
      capacity: 20,
      registered: 15,
      description: "Hands-on workshop for building basic robot frameworks."
    },
    { 
      id: 2, 
      name: "Local Robotics Competition", 
      date: "2024-04-02",
      time: "09:00-17:00",
      location: "University Arena",
      capacity: 50,
      registered: 30,
      description: "Annual robotics competition with local universities."
    },
    {
      id: 3,
      name: "AI in Robotics Seminar",
      date: "2024-03-20",
      time: "15:00-16:30",
      location: "Virtual",
      capacity: 100,
      registered: 45,
      description: "Guest speaker discussing AI applications in modern robotics."
    },
    {
      id: 4,
      name: "New Member Orientation",
      date: "2024-03-25",
      time: "13:00-14:30",
      location: "Engineering Building Room 204",
      capacity: 30,
      registered: 12,
      description: "Welcome session for newly accepted members."
    },
    {
      id: 5,
      name: "Project Showcase",
      date: "2024-04-15",
      time: "16:00-18:00",
      location: "Student Center",
      capacity: 75,
      registered: 50,
      description: "End-of-semester showcase of member projects."
    }
  ],
  interviews: [
    {
      id: 1,
      applicant: "Charlie Brown",
      date: "2024-03-15",
      time: "10:00",
      location: "Engineering Building Room 204",
      type: "In-Person"
    },
    {
      id: 2,
      applicant: "Diana Prince",
      date: "2024-03-15",
      time: "11:00",
      location: "Engineering Building Room 204",
      type: "In-Person"
    },
    {
      id: 3,
      applicant: "Bob Smith",
      date: "2024-03-16",
      time: "14:00",
      location: "Engineering Building Room 204",
      type: "In-Person"
    },
    {
      id: 4,
      applicant: "Edward Stark",
      date: "2024-03-16",
      time: "15:00",
      location: "Engineering Building Room 204",
      type: "In-Person"
    },
    {
      id: 5,
      applicant: "Frank Castle",
      date: "2024-03-17",
      time: "10:00",
      location: "Virtual",
      type: "Online"
    }
  ]
}

// Add interfaces for the event data
interface EventFormData {
  name: string;
  date: string;
  time: string;
  location: string;
  capacity: string;
  description: string;
}

interface AddEventDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (event: EventFormData) => void;
}

function AddEventDialog({ isOpen, onClose, onSubmit }: AddEventDialogProps) {
  const [newEvent, setNewEvent] = useState<EventFormData>({
    name: '',
    date: '',
    time: '',
    location: '',
    capacity: '',
    description: ''
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(newEvent)
    onClose()
    setNewEvent({
      name: '',
      date: '',
      time: '',
      location: '',
      capacity: '',
      description: ''
    })
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-white border-0 shadow-lg">
        <DialogHeader className="border-b pb-4">
          <DialogTitle className="text-2xl font-bold text-blue-800">Add New Event</DialogTitle>
          <DialogDescription className="text-blue-600">
            Fill in the event details below.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-700">Event Name</label>
            <Input
              value={newEvent.name}
              onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
              className="border-blue-200"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-700">Date</label>
              <Input
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                className="border-blue-200"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-blue-700">Time</label>
              <Input
                type="time"
                value={newEvent.time}
                onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                className="border-blue-200"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-700">Location</label>
            <Input
              value={newEvent.location}
              onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
              className="border-blue-200"
              placeholder="e.g., Engineering Building Room 101"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-700">Capacity</label>
            <Input
              type="number"
              value={newEvent.capacity}
              onChange={(e) => setNewEvent({ ...newEvent, capacity: e.target.value })}
              className="border-blue-200"
              placeholder="Maximum number of participants"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-blue-700">Description</label>
            <Textarea
              value={newEvent.description}
              onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
              className="border-blue-200"
              placeholder="Describe the event..."
              required
            />
          </div>
          <DialogFooter className="border-t pt-4 mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-blue-200 text-blue-700 hover:bg-blue-50"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white ml-2"
            >
              Create Event
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default function ClubManagement() {
  const [selectedClub, setSelectedClub] = useState(userClubs[0])
  const [showNewClubDialog, setShowNewClubDialog] = useState(false)
  const [newClubData, setNewClubData] = useState({
    name: '',
    description: '',
    category: ''
  })
  
  // Initialize with the mock data
  const [applications, setApplications] = useState(clubData.pendingApplications)
  const [events, setEvents] = useState(clubData.upcomingEvents)
  const [interviews, setInterviews] = useState(clubData.interviews)
  const [showAddEventDialog, setShowAddEventDialog] = useState(false)

  const handleCreateClub = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Club created successfully!')
    setShowNewClubDialog(false)
  }

  const handleProfileUpdate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("Profile updated successfully!")
  }

  const handleApplicationAction = (id: number, action: 'approve' | 'reject') => {
    setApplications(prevApplications => 
      prevApplications.filter(app => app.id !== id)
    )
    alert(`Application ${action}d successfully!`)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          <CheckCircle className="w-4 h-4 mr-1" />
          {status}
        </span>
      case "Pending":
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
          <Clock className="w-4 h-4 mr-1" />
          {status}
        </span>
      default:
        return <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
          {status}
        </span>
    }
  }

  const handleAddEvent = (newEvent: EventFormData) => {
    const event = {
      id: events.length + 1,
      ...newEvent,
      capacity: parseInt(newEvent.capacity, 10),
      registered: 0
    }
    setEvents([...events, event])
    alert('Event created successfully!')
  }

  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-blue-800">Club Management</h1>
            <Dialog open={showNewClubDialog} onOpenChange={setShowNewClubDialog}>
              <DialogTrigger asChild>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Club
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-white border-0 shadow-lg">
                <DialogHeader className="border-b pb-4">
                  <DialogTitle className="text-2xl font-bold text-blue-800">Create New Club</DialogTitle>
                  <DialogDescription className="text-blue-600">
                    Fill in the details to create a new club on EasiApply.
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCreateClub} className="space-y-6 pt-4">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-blue-700 block mb-1">
                        Club Name
                      </label>
                      <Input
                        value={newClubData.name}
                        onChange={(e) => setNewClubData({ ...newClubData, name: e.target.value })}
                        className="w-full border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                        placeholder="Enter club name"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-blue-700 block mb-1">
                        Description
                      </label>
                      <Textarea
                        value={newClubData.description}
                        onChange={(e) => setNewClubData({ ...newClubData, description: e.target.value })}
                        className="w-full border-blue-200 focus:border-blue-400 focus:ring-blue-400 min-h-[100px]"
                        placeholder="Describe your club's purpose and activities"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-blue-700 block mb-1">
                        Category
                      </label>
                      <Input
                        value={newClubData.category}
                        onChange={(e) => setNewClubData({ ...newClubData, category: e.target.value })}
                        className="w-full border-blue-200 focus:border-blue-400 focus:ring-blue-400"
                        placeholder="e.g., Technology, Sports, Arts"
                        required
                      />
                    </div>
                  </div>
                  <DialogFooter className="border-t pt-4 mt-6">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setShowNewClubDialog(false)}
                      className="border-blue-200 text-blue-700 hover:bg-blue-50"
                    >
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      className="bg-blue-600 hover:bg-blue-700 text-white ml-2"
                    >
                      Create Club
                    </Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
          </div>

          {/* Club Selection */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-blue-800">Your Clubs</CardTitle>
              <CardDescription>Select a club to manage</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {userClubs.map((club) => (
                  <Button
                    key={club.id}
                    onClick={() => setSelectedClub(club)}
                    variant={selectedClub.id === club.id ? "default" : "outline"}
                    className={`w-full justify-start ${
                      selectedClub.id === club.id 
                        ? "bg-blue-600 text-white" 
                        : "text-blue-600"
                    }`}
                  >
                    <div className="flex justify-between items-center w-full">
                      <span>{club.name}</span>
                      <span className="text-sm opacity-80">{club.role}</span>
                    </div>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Rest of your existing tabs */}
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-4">
              <TabsTrigger value="profile">Club Profile</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="activities">Activities</TabsTrigger>
            </TabsList>

            {/* Profile Tab */}
            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center">
                    <Edit className="mr-2" />
                    Edit Club Profile
                  </CardTitle>
                  <CardDescription>Update your club's information and settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProfileUpdate} className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-700">Club Name</label>
                      <Input defaultValue={selectedClub.name} className="border-blue-200" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-700">Description</label>
                      <Textarea defaultValue={selectedClub.description} className="border-blue-200" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-blue-700">Category</label>
                      <Input defaultValue={selectedClub.category} className="border-blue-200" />
                    </div>
                    <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                      Save Changes
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Applications Tab */}
            <TabsContent value="applications">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center">
                    <Users className="mr-2" />
                    Application Review
                  </CardTitle>
                  <CardDescription>Review and manage applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Applicant</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Submitted</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {applications.map((app) => (
                        <TableRow key={app.id}>
                          <TableCell className="font-medium">{app.name}</TableCell>
                          <TableCell>
                            <Dialog>
                              <DialogTrigger className="text-blue-600 hover:underline">
                                {app.status}
                              </DialogTrigger>
                              <DialogContent>
                                <DialogHeader>
                                  <DialogTitle>Application Progress</DialogTitle>
                                </DialogHeader>
                                <div className="space-y-4">
                                  {app.progress.map((stage, index) => (
                                    <div key={index} className="flex justify-between items-center">
                                      <span className="text-blue-700">{stage.stage}</span>
                                      {getStatusBadge(stage.status)}
                                    </div>
                                  ))}
                                </div>
                              </DialogContent>
                            </Dialog>
                          </TableCell>
                          <TableCell>{app.submittedAt}</TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <Button
                                onClick={() => handleApplicationAction(app.id, 'approve')}
                                className="bg-green-500 hover:bg-green-600 text-white"
                              >
                                Approve
                              </Button>
                              <Button
                                onClick={() => handleApplicationAction(app.id, 'reject')}
                                className="bg-red-500 hover:bg-red-600 text-white"
                              >
                                Reject
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Activities Tab */}
            <TabsContent value="activities">
              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center">
                    <Calendar className="mr-2" />
                    Upcoming Events
                  </CardTitle>
                  <CardDescription>Manage your club's events and activities</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {events.map((event) => (
                      <Card key={event.id} className="bg-blue-50">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-blue-800">{event.name}</CardTitle>
                              <CardDescription>
                                {event.date} at {event.time}
                              </CardDescription>
                            </div>
                            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                              Edit Event
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <p className="text-blue-700"><strong>Location:</strong> {event.location}</p>
                            <p className="text-blue-700"><strong>Description:</strong> {event.description}</p>
                            <p className="text-blue-700">
                              <strong>Capacity:</strong> {event.registered}/{event.capacity} registered
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    <Button 
                      onClick={() => setShowAddEventDialog(true)}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      Add New Event
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Add Event Dialog */}
              <AddEventDialog
                isOpen={showAddEventDialog}
                onClose={() => setShowAddEventDialog(false)}
                onSubmit={handleAddEvent}
              />

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-blue-800 flex items-center">
                    <Calendar className="mr-2" />
                    Upcoming Interviews
                  </CardTitle>
                  <CardDescription>Scheduled interviews with applicants</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Applicant</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Type</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {interviews.map((interview) => (
                        <TableRow key={interview.id}>
                          <TableCell>{interview.applicant}</TableCell>
                          <TableCell>{interview.date}</TableCell>
                          <TableCell>{interview.time}</TableCell>
                          <TableCell>{interview.location}</TableCell>
                          <TableCell>{interview.type}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </Layout>
  )
} 