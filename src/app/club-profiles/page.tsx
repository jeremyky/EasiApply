'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search, Filter, ClipboardList, Video, Calendar } from 'lucide-react'
import Layout from '@/components/layout/layout'
import Link from 'next/link'

// Mock data for club profiles
const clubProfiles = [
  {
    id: 1,
    name: "Robotics Club",
    description: "Build and program robots for competitions and research projects.",
    category: "Technology",
    application: {
      questions: [
        "What experience do you have with robotics?",
        "Describe a project you've worked on that you're proud of.",
        "How would you contribute to our club's mission?"
      ]
    }
  },
  {
    id: 2,
    name: "Debate Society",
    description: "Engage in formal debates on current events and philosophical topics.",
    category: "Academic",
    application: {
      questions: [
        "Why are you interested in joining the Debate Society?",
        "What skills do you hope to develop through debating?",
        "Provide an example of a topic you'd like to debate and why."
      ]
    }
  },
  // Add more club profiles as needed
]

export default function ClubProfiles() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("All")

  const filteredClubs = clubProfiles.filter(club => 
    club.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (categoryFilter === "All" || club.category === categoryFilter)
  )

  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:px-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">Available Clubs</h1>
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-blue-400" />
            <Input
              className="pl-8 border-blue-200 focus:border-blue-400 focus:ring-blue-400"
              placeholder="Search clubs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="text-blue-400" />
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-[180px] border-blue-200">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Categories</SelectItem>
                <SelectItem value="Technology">Technology</SelectItem>
                <SelectItem value="Academic">Academic</SelectItem>
                <SelectItem value="Activism">Activism</SelectItem>
                <SelectItem value="Games">Games</SelectItem>
                <SelectItem value="Arts">Arts</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredClubs.map(club => (
            <Card key={club.id} className="bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">{club.name}</CardTitle>
                <CardDescription className="text-blue-600">{club.category}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 mb-4">{club.description}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      View Application
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px] bg-blue-50">
                    <DialogHeader>
                      <DialogTitle>{club.name} Application Process</DialogTitle>
                      <DialogDescription>
                        The application process consists of:
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 text-blue-700">
                        <ClipboardList className="h-5 w-5" />
                        <span>1. Written Application</span>
                      </div>
                      <div className="flex items-center space-x-2 text-blue-700">
                        <Video className="h-5 w-5" />
                        <span>2. Video Introduction</span>
                      </div>
                      <div className="flex items-center space-x-2 text-blue-700">
                        <Calendar className="h-5 w-5" />
                        <span>3. In-Person Interview</span>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-end">
                      <Link href={`/apply/${club.id}`}>
                        <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                          Start Application
                        </Button>
                      </Link>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </Layout>
  )
} 