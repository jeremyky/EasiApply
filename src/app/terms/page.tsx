import Layout from '@/components/layout/layout'

export default function TermsPage() {
  return (
    <Layout>
      <main className="flex-1 py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-blue-800">Terms of Service</h1>
          <div className="prose prose-blue max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">1. Acceptance of Terms</h2>
              <p className="text-blue-600 mb-4">
                By accessing and using EasiApply, you accept and agree to be bound by the terms and 
                provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">2. User Accounts</h2>
              <p className="text-blue-600 mb-4">
                To use certain features of the platform, you must register for an account. You agree 
                to provide accurate information and keep it updated.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">3. Platform Rules</h2>
              <p className="text-blue-600 mb-4">
                Users agree to:
              </p>
              <ul className="list-disc pl-6 text-blue-600 mb-4">
                <li>Provide accurate information in applications</li>
                <li>Respect other users and their privacy</li>
                <li>Not misuse or attempt to manipulate the platform</li>
                <li>Maintain confidentiality of their account credentials</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">4. Content Guidelines</h2>
              <p className="text-blue-600 mb-4">
                Users are responsible for all content they submit through the platform. Content must not:
              </p>
              <ul className="list-disc pl-6 text-blue-600 mb-4">
                <li>Violate any laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Contain inappropriate or offensive material</li>
                <li>Include false or misleading information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-blue-700">5. Termination</h2>
              <p className="text-blue-600 mb-4">
                We reserve the right to terminate or suspend accounts that violate these terms or 
                for any other reason at our discretion.
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  )
} 