'use client'

import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Average Score',
      data: [65, 70, 68, 72, 75, 80],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }
  ]
}

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Student Performance Trends'
    }
  }
}

export default function PerformanceChart() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <Line data={data} options={options} />
    </div>
  )
}

