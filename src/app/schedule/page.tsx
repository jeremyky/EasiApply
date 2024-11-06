'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar as CalendarIcon, Clock } from 'lucide-react'
import { Calendar } from "@/components/ui/calendar"
import Layout from '@/components/layout/layout'
import Link from 'next/link'

// Add type for availableSlots
interface AvailableSlots {
  [key: string]: string[];
}

// Mock available time slots
const availableSlots: AvailableSlots = {
  "2024-03-15": ["10:00", "11:00", "14:00", "15:00"],
  "2024-03-16": ["09:00", "10:00", "11:00", "14:00"],
  "2024-03-17": ["13:00", "14:00", "15:00", "16:00"],
}

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>()

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      // In a real app, this would make an API call
      window.location.href = '/tracking'
    }
  }

  const getAvailableSlots = (date: Date) => {
    const dateStr = date.toISOString().split('T')[0]
    return availableSlots[dateStr] || []
  }

  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-blue-800">Schedule Interview</h1>
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center">
                <CalendarIcon className="mr-2 h-6 w-6" />
                Select Interview Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-700">Select Date</h3>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="border rounded-md"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-blue-700">Available Times</h3>
                  {selectedDate ? (
                    <div className="grid gap-2">
                      {getAvailableSlots(selectedDate).map((time: string) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          className={`w-full justify-start ${
                            selectedTime === time 
                              ? "bg-blue-600 text-white" 
                              : "text-blue-600"
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          <Clock className="mr-2 h-4 w-4" />
                          {time}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-blue-600">Please select a date first</p>
                  )}
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <Link href="/interview">
                  <Button variant="outline" className="text-blue-600">
                    Back
                  </Button>
                </Link>
                <Button
                  onClick={handleSchedule}
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  disabled={!selectedDate || !selectedTime}
                >
                  Schedule Interview
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </Layout>
  )
}