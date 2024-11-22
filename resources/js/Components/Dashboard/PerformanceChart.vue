<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Line } from 'vue-chartjs'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

// Define chart data type
type ChartDataType = ChartData<'line', number[], string>

// Initialize with valid empty data structure
const chartData = ref<ChartDataType>({
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Average Score',
    data: [65, 70, 68, 72, 75, 80],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
})

const chartOptions = ref<ChartOptions<'line'>>({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Student Performance Trends'
    }
  }
})
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <div style="height: 300px">
      <Line 
        :data="chartData"
        :options="chartOptions"
      />
    </div>
  </div>
</template> 