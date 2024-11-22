<script setup>
import { Head, router } from '@inertiajs/vue3';
import { ref } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import StatisticsCards from '@/Components/Dashboard/StatisticsCards.vue';
import PerformanceChart from '@/Components/Dashboard/PerformanceChart.vue';
import RecentActivities from '@/Components/Dashboard/RecentActivities.vue';
import CalendarWidget from '@/Components/Dashboard/CalendarWidget.vue';
import { 
    MagnifyingGlassIcon,
    BellIcon,
    BellAlertIcon
} from '@heroicons/vue/24/outline';

const activeTab = ref('overview');
const searchQuery = ref('');
const hasNotifications = ref(true); // This should come from your backend

const handleSearch = () => {
    console.log('Searching for:', searchQuery.value);
};

const handleLogout = () => {
    router.post(route('logout'));
};
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="min-h-screen bg-gray-100 p-6">
            <!-- Top Bar -->
            <div class="mb-6 flex justify-between items-center">
                <!-- Search Bar -->
                <div class="flex-1 max-w-xl relative">
                    <div class="relative">
                        <input
                            v-model="searchQuery"
                            type="text"
                            placeholder="Search students, teachers, or classes..."
                            class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            @keyup.enter="handleSearch"
                        />
                        <MagnifyingGlassIcon 
                            class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                        />
                    </div>
                </div>

                <!-- Notification and Logout -->
                <div class="flex items-center space-x-4 ml-4">
                    <!-- Notification Bell -->
                    <button class="relative p-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <component 
                            :is="hasNotifications ? BellAlertIcon : BellIcon" 
                            class="h-6 w-6"
                        />
                        <span 
                            v-if="hasNotifications"
                            class="absolute top-1 right-1 h-3 w-3 bg-red-500 rounded-full"
                        ></span>
                    </button>

                    <!-- Logout Button -->
                    <button 
                        @click="handleLogout"
                        class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Logout
                    </button>
                </div>
            </div>

            <!-- Navigation Tabs -->
            <div class="bg-white shadow-md rounded-lg mb-6">
                <div class="flex border-b">
                    <button 
                        @click="activeTab = 'overview'"
                        :class="[
                            'px-4 py-2 text-sm font-medium',
                            activeTab === 'overview' 
                                ? 'border-b-2 border-blue-500 text-blue-600'
                                : 'text-gray-500 hover:text-gray-700'
                        ]"
                    >
                        Overview
                    </button>
                </div>
            </div>

            <!-- Overview Tab -->
            <div v-if="activeTab === 'overview'">
                <StatisticsCards />
                <div class="mt-8">
                    <PerformanceChart />
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                    <RecentActivities />
                    <CalendarWidget />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template> 