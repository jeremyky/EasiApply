import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-200 bg-blue-100">
      <p className="text-xs text-blue-600">© 2024 EasiApply. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs text-blue-600 hover:underline underline-offset-4" href="/terms">
          Terms of Service
        </Link>
        <Link className="text-xs text-blue-600 hover:underline underline-offset-4" href="/privacy">
          Privacy
        </Link>
      </nav>
    </footer>
  )
} 