import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, Zap, Shield, Clock, Globe } from 'lucide-react'
import Layout from '@/components/layout/layout'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <Layout>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-800">
                  About EasiApply
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-600 md:text-xl">
                  Revolutionizing the college club application process for students and organizations alike.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-800">Our Mission</h2>
            <p className="text-blue-600 text-center max-w-[800px] mx-auto mb-12 text-lg">
              At EasiApply, we're committed to simplifying the college club application process. Our platform bridges the gap between students and organizations, making it easier than ever to connect, engage, and grow together.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <Users className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-800">Connecting Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600">We help students discover and apply to clubs that align with their interests and goals.</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <Zap className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-800">Empowering Clubs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600">We provide clubs with tools to streamline their application and selection processes.</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <Shield className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-800">Ensuring Fairness</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600">Our platform promotes transparency and equal opportunities for all applicants.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-blue-800">Why Choose EasiApply?</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              <Card className="bg-white border-blue-200">
                <CardHeader>
                  <Clock className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-800">Save Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600">Our streamlined process reduces the time and effort needed for both applicants and clubs.</p>
                </CardContent>
              </Card>
              <Card className="bg-white border-blue-200">
                <CardHeader>
                  <Globe className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-800">Expand Reach</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600">Clubs can reach a wider audience, while students can discover more opportunities.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl mb-4 text-blue-800">Ready to Get Started?</h2>
            <p className="text-blue-600 mb-8 max-w-[600px] mx-auto">
              Join EasiApply today and experience a smarter way to manage club applications.
            </p>
            <Link href="/clubs">
              <Button className="bg-blue-600 text-white hover:bg-blue-700">Sign Up Now</Button>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  )
} 