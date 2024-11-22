import Link from 'next/link'
import { Home, Users, BookOpen, Settings, X } from 'lucide-react'

export default function Sidebar({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <div className={`${open ? 'block' : 'hidden'} fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform bg-[#2a2f42] lg:translate-x-0 lg:relative lg:inset-0 lg:block`}>
      <div className="flex items-center justify-center mt-8">
        <div className="flex items-center">
          <span className="text-white text-2xl mx-2 font-semibold">SCNHS</span>
        </div>
      </div>

      <nav className="mt-10">
        <Link href="#" className="flex items-center px-6 py-2 mt-4 text-gray-100 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
          <Home className="w-6 h-6" />
          <span className="mx-3">Dashboard</span>
        </Link>
        <Link href="#" className="flex items-center px-6 py-2 mt-4 text-gray-100 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
          <Users className="w-6 h-6" />
          <span className="mx-3">Teachers</span>
        </Link>
        <Link href="#" className="flex items-center px-6 py-2 mt-4 text-gray-100 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
          <BookOpen className="w-6 h-6" />
          <span className="mx-3">Students</span>
        </Link>
        <Link href="#" className="flex items-center px-6 py-2 mt-4 text-gray-100 hover:bg-gray-700 hover:bg-opacity-25 hover:text-gray-100">
          <Settings className="w-6 h-6" />
          <span className="mx-3">Settings</span>
        </Link>
      </nav>
      
      <button onClick={() => setOpen(false)} className="absolute top-1 right-2 lg:hidden">
        <X className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}

