import Header from './header'
import Footer from './footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      <Header />
      {children}
      <Footer />
    </div>
  )
} 