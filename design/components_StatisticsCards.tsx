import { Users, BookOpen, GraduationCap, BarChart } from 'lucide-react'

export default function StatisticsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
        <div className="bg-blue-500 rounded-full p-3">
          <Users className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Students</p>
          <p className="text-2xl font-bold">1,500</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
        <div className="bg-green-500 rounded-full p-3">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Teachers</p>
          <p className="text-2xl font-bold">100</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
        <div className="bg-yellow-500 rounded-full p-3">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Classes</p>
          <p className="text-2xl font-bold">50</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
        <div className="bg-purple-500 rounded-full p-3">
          <BarChart className="w-6 h-6 text-white" />
        </div>
        <div>
          <p className="text-gray-500 text-sm">Attendance Rate</p>
          <p className="text-2xl font-bold">95%</p>
        </div>
      </div>
    </div>
  )
}

