import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin } from 'lucide-react'
import Layout from '@/components/layout/layout'

export default function ContactPage() {
  return (
    <Layout>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-800">
                  Contact Us
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-600 md:text-xl">
                  Get in touch with our team for support or inquiries.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <Mail className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-800">Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600">support@easiapply.com</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <Phone className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-800">Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600">(555) 123-4567</p>
                </CardContent>
              </Card>
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <MapPin className="h-10 w-10 mb-2 text-blue-600" />
                  <CardTitle className="text-blue-800">Address</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-600">123 University Ave<br />College Town, ST 12345</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-100">
          <div className="container px-4 md:px-6">
            <Card className="max-w-2xl mx-auto bg-white border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-800">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-800 mb-1">Name</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-800 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full p-2 border border-blue-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-blue-800 mb-1">Message</label>
                    <textarea
                      className="w-full p-2 border border-blue-200 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </Layout>
  )
} 