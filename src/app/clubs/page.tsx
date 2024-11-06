import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, ClipboardList } from 'lucide-react'
import Layout from '@/components/layout/layout'

export default function ClubSelection() {
  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 text-blue-800 text-center">Welcome to EasiApply</h1>
          <p className="text-xl text-blue-600 mb-8 text-center">What would you like to do today?</p>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-white border-blue-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-blue-100">
                <CardTitle className="text-blue-800 flex items-center">
                  <Users className="mr-2" />
                  Join a Club
                </CardTitle>
                <CardDescription className="text-blue-600">
                  Explore and apply to clubs that interest you
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-blue-700">
                  Browse through various clubs, view their profiles, and submit applications to join the communities that align with your interests.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/club-profiles" className="w-full">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Explore Clubs
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="bg-white border-blue-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-blue-100">
                <CardTitle className="text-blue-800 flex items-center">
                  <ClipboardList className="mr-2" />
                  Manage Your Club
                </CardTitle>
                <CardDescription className="text-blue-600">
                  Oversee your club's operations and members
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-blue-700">
                  Access tools to manage your club's profile, review applications, communicate with members, and organize club activities.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/club-management" className="w-full">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Manage Club
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </Layout>
  )
}