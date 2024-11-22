<script setup lang="ts">
import { ref } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

const currentDate = ref(new Date());

const daysInMonth = () => {
  return new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 0).getDate();
};

const firstDayOfMonth = () => {
  return new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 1).getDay();
};

const prevMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
};

const nextMonth = () => {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
};

const monthName = () => {
  return currentDate.value.toLocaleString('default', { month: 'long', year: 'numeric' });
};

const emptyDays = () => {
  return Array.from({ length: firstDayOfMonth() }, (_, i) => i);
};

const monthDays = () => {
  return Array.from({ length: daysInMonth() }, (_, i) => i + 1);
};
</script>

<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-semibold">Calendar</h2>
      <div class="flex space-x-2">
        <button @click="prevMonth" class="p-2 rounded-full hover:bg-gray-100">
          <ChevronLeftIcon class="w-5 h-5" />
        </button>
        <button @click="nextMonth" class="p-2 rounded-full hover:bg-gray-100">
          <ChevronRightIcon class="w-5 h-5" />
        </button>
      </div>
    </div>
    <div class="mb-4">
      <span class="text-lg font-medium text-gray-800">{{ monthName() }}</span>
    </div>
    <div class="grid grid-cols-7 gap-2 mb-2">
      <div v-for="day in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']" 
           :key="day" 
           class="text-center font-medium text-gray-500">
        {{ day }}
      </div>
    </div>
    <div class="grid grid-cols-7 gap-2">
      <div v-for="i in emptyDays()" 
           :key="`empty-${i}`" 
           class="text-center py-1">
      </div>
      <div v-for="day in monthDays()" 
           :key="day" 
           class="text-center py-1">
        <span class="text-sm leading-loose text-gray-700">{{ day }}</span>
      </div>
    </div>
  </div>
</template> 