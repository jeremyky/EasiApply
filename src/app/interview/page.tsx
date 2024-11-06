'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Video, Clock } from 'lucide-react'
import Layout from '@/components/layout/layout'
import Link from 'next/link'

export default function VideoInterviewPage() {
  const [step, setStep] = useState<'intro' | 'prep' | 'recording' | 'review'>('intro')
  const [timeLeft, setTimeLeft] = useState(60) // 60 seconds prep time
  const [recordingTime, setRecordingTime] = useState(0)
  const maxRecordingTime = 120 // 2 minutes max recording

  const startPrep = () => {
    setStep('prep')
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer)
          setStep('recording')
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const skipPrep = () => {
    setTimeLeft(0)
    setStep('recording')
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-blue-800">Video Introduction</h1>
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-800 flex items-center">
                <Video className="mr-2 h-6 w-6" />
                Record Your Introduction
              </CardTitle>
            </CardHeader>
            <CardContent>
              {step === 'intro' && (
                <div className="space-y-4">
                  <p className="text-blue-700">
                    You'll have 60 seconds to prepare and up to 2 minutes to record your introduction.
                    Please address the following points:
                  </p>
                  <ul className="list-disc pl-6 text-blue-600 space-y-2">
                    <li>Briefly introduce yourself</li>
                    <li>Why you want to join this club</li>
                    <li>What unique perspective you'll bring</li>
                    <li>Your relevant experience or interests</li>
                  </ul>
                  <Button 
                    onClick={startPrep}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-4"
                  >
                    Start Preparation
                  </Button>
                </div>
              )}

              {step === 'prep' && (
                <div className="space-y-4">
                  <div className="flex justify-center items-center">
                    <Clock className="h-16 w-16 text-blue-600" />
                  </div>
                  <p className="text-center text-2xl font-bold text-blue-800">
                    Preparation Time: {formatTime(timeLeft)}
                  </p>
                  <p className="text-center text-blue-600">
                    Get ready to record your introduction
                  </p>
                  <Button 
                    onClick={skipPrep}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Skip Preparation
                  </Button>
                </div>
              )}

              {step === 'recording' && (
                <div className="space-y-4">
                  <div className="flex justify-center items-center">
                    <Video className="h-16 w-16 text-red-500 animate-pulse" />
                  </div>
                  <p className="text-center text-2xl font-bold text-blue-800">
                    Recording: {formatTime(recordingTime)} / {formatTime(maxRecordingTime)}
                  </p>
                  <Button 
                    onClick={() => setStep('review')}
                    className="w-full bg-red-600 hover:bg-red-700 text-white"
                  >
                    Stop Recording
                  </Button>
                </div>
              )}

              {step === 'review' && (
                <div className="space-y-4">
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-blue-600">Video Preview</p>
                  </div>
                  <div className="flex justify-between">
                    <Button 
                      onClick={() => setStep('intro')}
                      variant="outline"
                      className="text-blue-600"
                    >
                      Record Again
                    </Button>
                    <Link href="/schedule">
                      <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                        Continue to Scheduling
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </Layout>
  )
}