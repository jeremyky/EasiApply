'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import Layout from '@/components/layout/layout'
import Link from 'next/link'

// Mock application questions
const applicationQuestions = [
  {
    id: 1,
    question: "Why are you interested in joining this club?",
    maxLength: 500
  },
  {
    id: 2,
    question: "What relevant experience do you have?",
    maxLength: 500
  },
  {
    id: 3,
    question: "What would you contribute to the club?",
    maxLength: 500
  }
]

export default function ApplicationPage() {
  const [answers, setAnswers] = useState<{[key: number]: string}>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    console.log(answers)
    // Proceed to video interview
    window.location.href = '/interview'
  }

  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-blue-800">Written Application</h1>
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800">Application Questions</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {applicationQuestions.map((q) => (
                  <div key={q.id} className="space-y-2">
                    <label className="text-blue-700 font-medium">
                      {q.question}
                    </label>
                    <Textarea
                      value={answers[q.id] || ''}
                      onChange={(e) => setAnswers({
                        ...answers,
                        [q.id]: e.target.value
                      })}
                      maxLength={q.maxLength}
                      className="h-32"
                      placeholder="Type your answer here..."
                    />
                    <p className="text-sm text-blue-600 text-right">
                      {(answers[q.id]?.length || 0)}/{q.maxLength} characters
                    </p>
                  </div>
                ))}
                <div className="flex justify-between">
                  <Link href="/club-profiles">
                    <Button variant="outline" className="text-blue-600">
                      Back
                    </Button>
                  </Link>
                  <Button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Continue to Video Interview
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </Layout>
  )
} 