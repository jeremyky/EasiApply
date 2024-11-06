import Link from 'next/link'
import { GraduationCap } from 'lucide-react'

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-blue-600 text-white">
      <Link className="flex items-center justify-center" href="/">
        <GraduationCap className="h-6 w-6" />
        <span className="ml-2 text-2xl font-bold">EasiApply</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/clubs">
          Clubs
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/applications">
          My Applications
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/profile">
          Profile
        </Link>
      </nav>
    </header>
  )
} 