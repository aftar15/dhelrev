<script setup>
import { 
  UsersIcon, 
  BookOpenIcon, 
  AcademicCapIcon, 
  ChartBarIcon 
} from '@heroicons/vue/24/outline';
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    <div class="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
      <div class="bg-blue-500 rounded-full p-3">
        <UsersIcon class="w-6 h-6 text-white" />
      </div>
      <div>
        <p class="text-gray-500 text-sm">Total Students</p>
        <p class="text-2xl font-bold">-</p>
      </div>
    </div>
    <div class="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
      <div class="bg-green-500 rounded-full p-3">
        <AcademicCapIcon class="w-6 h-6 text-white" />
      </div>
      <div>
        <p class="text-gray-500 text-sm">Total Teachers</p>
        <p class="text-2xl font-bold">-</p>
      </div>
    </div>
    <div class="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
      <div class="bg-yellow-500 rounded-full p-3">
        <BookOpenIcon class="w-6 h-6 text-white" />
      </div>
      <div>
        <p class="text-gray-500 text-sm">Total Classes</p>
        <p class="text-2xl font-bold">-</p>
      </div>
    </div>
    <div class="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4 transition-transform duration-300 hover:scale-105">
      <div class="bg-purple-500 rounded-full p-3">
        <ChartBarIcon class="w-6 h-6 text-white" />
      </div>
      <div>
        <p class="text-gray-500 text-sm">Attendance Rate</p>
        <p class="text-2xl font-bold">-</p>
      </div>
    </div>
  </div>
</template> 