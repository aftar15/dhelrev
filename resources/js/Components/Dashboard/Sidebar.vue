<script setup>
import { defineProps } from 'vue';
import { 
  HomeIcon,
  UsersIcon,
  AcademicCapIcon,
  CalendarIcon,
  ChartBarIcon,
  Cog6ToothIcon
} from '@heroicons/vue/24/outline';

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: true
  }
});

const menuItems = [
  { name: 'Dashboard', icon: HomeIcon, route: '/dashboard' },
  { name: 'Students', icon: UsersIcon, route: '/students' },
  { name: 'Teachers', icon: AcademicCapIcon, route: '/teachers' },
  { name: 'Calendar', icon: CalendarIcon, route: '/calendar' },
  { name: 'Reports', icon: ChartBarIcon, route: '/reports' },
  { name: 'Settings', icon: Cog6ToothIcon, route: '/settings' }
];
</script>

<template>
  <div 
    :class="[
      'bg-white h-screen border-r transition-all duration-300',
      isOpen ? 'w-64' : 'w-20'
    ]"
  >
    <!-- Logo -->
    <div class="flex items-center justify-center h-24 border-b">
        <img
          src="/img/SNHS.jpg"
          alt="SNHS Logo"
          class="h-16 w-16 object-contain rounded-full"
        />
      <span 
        v-if="isOpen" 
        class="ml-3 font-bold text-xl text-gray-800"
      >
        Surigao City NHS
      </span>
    </div>

    <!-- Navigation -->
    <nav class="mt-6">
      <div v-for="item in menuItems" :key="item.name" class="px-4 py-2">
        <a 
          :href="item.route"
          class="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <component :is="item.icon" class="h-6 w-6" />
          <span v-if="isOpen" class="ml-3">{{ item.name }}</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
// Your scoped styles here if needed
</style> 