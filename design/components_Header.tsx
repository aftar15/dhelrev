import { Bell, Menu, Search, User } from 'lucide-react'

export default function Header({ sidebarOpen, setSidebarOpen }: { sidebarOpen: boolean; setSidebarOpen: (open: boolean) => void }) {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white border-b-4 border-[#2a2f42]">
      <div className="flex items-center">
        <button onClick={() => setSidebarOpen(true)} className="text-gray-500 focus:outline-none lg:hidden">
          <Menu className="w-6 h-6" />
        </button>
        <div className="relative mx-4 lg:mx-0">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="w-5 h-5 text-gray-500" />
          </span>
          <input className="w-32 sm:w-64 pl-10 pr-4 py-2 text-sm text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-40" type="text" placeholder="Search" />
        </div>
      </div>
      <div className="flex items-center">
        <button className="flex mx-4 text-gray-600 focus:outline-none">
          <Bell className="w-6 h-6" />
          <span className="absolute top-0 right-0 inline-block w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
        </button>
        <div className="relative">
          <button className="relative z-10 block w-8 h-8 overflow-hidden rounded-full shadow focus:outline-none">
            <img className="object-cover w-full h-full" src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80" alt="Your avatar" />
          </button>
        </div>
      </div>
    </header>
  )
}

