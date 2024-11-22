'use client'

import { useState } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import StatisticsCards from './StatisticsCards'
import PerformanceChart from './PerformanceChart'
import RecentActivities from './RecentActivities'
import CalendarWidget from './CalendarWidget'

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
            <div className="mt-4">
              <StatisticsCards />
            </div>
            <div className="mt-8">
              <PerformanceChart />
            </div>
            <div className="flex flex-col md:flex-row mt-8 space-y-8 md:space-y-0 md:space-x-8">
              <div className="w-full md:w-2/3">
                <RecentActivities />
              </div>
              <div className="w-full md:w-1/3">
                <CalendarWidget />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

