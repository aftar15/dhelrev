'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function CalendarWidget() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate()
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay()

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
  }

  const renderCalendarDays = () => {
    const days = []
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="text-center py-1"></div>)
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(
        <div key={i} className="text-center py-1">
          <span className="text-sm leading-loose text-gray-700">{i}</span>
        </div>
      )
    }
    return days
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Calendar</h2>
        <div className="flex space-x-2">
          <button onClick={prevMonth} className="p-2 rounded-full hover:bg-gray-100">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button onClick={nextMonth} className="p-2 rounded-full hover:bg-gray-100">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="mb-4">
        <span className="text-lg font-medium text-gray-800">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </span>
      </div>
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="text-center font-medium text-gray-500">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2">
        {renderCalendarDays()}
      </div>
    </div>
  )
}

