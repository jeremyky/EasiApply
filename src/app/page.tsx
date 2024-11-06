import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, Video, Calendar, CheckCircle, Users, GraduationCap } from 'lucide-react'
import Layout from '@/components/layout/layout'

export default function HomePage() {
  return (
    <Layout>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-800">
                  Streamline Your Club Applications
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-600 md:text-xl">
                  EasiApply simplifies the college club application process. Apply, interview, and track your applications all in one place.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/clubs">
                  <Button className="bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-100">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-800">Key Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <ClipboardList className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-800">Written Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600">Submit detailed written applications tailored to each club&apos;s requirements.</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <Video className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-800">One-Way Video</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600">Record and submit one-way video introductions to showcase your personality.</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <Calendar className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-800">Interview Scheduling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600">Easily schedule interviews with clubs using our integrated calendar system.</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CheckCircle className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-800">Acceptance Tracker</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600">Track the status of your applications in real-time across multiple clubs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-800">Get Started</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="bg-white border-blue-200">
                <CardHeader>
                  <Users className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-800">For Clubs</CardTitle>
                  <CardDescription className="text-blue-600">Create your club profile and manage applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/club-management">
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Create Club Profile</Button>
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-white border-blue-200">
                <CardHeader>
                  <GraduationCap className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-800">For Students</CardTitle>
                  <CardDescription className="text-blue-600">Apply to clubs and track your applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href="/club-profiles">
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Start Applying</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
} 