import Layout from '@/components/layout/layout'

export default function PrivacyPage() {
  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-blue-800">Privacy Policy</h1>
          <div className="prose prose-blue max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">1. Information We Collect</h2>
              <p className="text-blue-600 mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 text-blue-600 mb-4">
                <li>Name and contact information</li>
                <li>Academic information</li>
                <li>Application responses</li>
                <li>Video submissions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">2. How We Use Your Information</h2>
              <p className="text-blue-600 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-blue-600 mb-4">
                <li>Process your club applications</li>
                <li>Facilitate communication between clubs and applicants</li>
                <li>Improve our platform and services</li>
                <li>Send important notifications about your applications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">3. Information Sharing</h2>
              <p className="text-blue-600 mb-4">
                We share your information only with:
              </p>
              <ul className="list-disc pl-6 text-blue-600 mb-4">
                <li>Clubs you apply to</li>
                <li>Service providers who assist our operations</li>
                <li>When required by law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">4. Data Security</h2>
              <p className="text-blue-600 mb-4">
                We implement appropriate security measures to protect your personal information from 
                unauthorized access, alteration, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">5. Your Rights</h2>
              <p className="text-blue-600 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-blue-600 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt out of certain data uses</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  )
} 