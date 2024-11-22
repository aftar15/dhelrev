<script setup lang="ts">
import { Head, router } from '@inertiajs/vue3';
import { ref } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { 
    MagnifyingGlassIcon,
    BellIcon,
    BellAlertIcon
} from '@heroicons/vue/24/outline';

interface Props {
    statistics: {
        teacherCount: number;
        studentCount: number;
        classCount: number;
        attendanceRate: number;
    }
}

const props = defineProps<Props>();
const searchQuery = ref('');
const hasNotifications = ref(true);

const handleLogout = () => {
    router.post('/logout');
};
</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <div class="min-h-screen bg-gray-100">
            <!-- Top Bar -->
            <div class="mb-6 flex justify-between items-center p-6">
                <!-- Search Bar -->
                <div class="flex-1 max-w-xl relative">
                    <div class="relative">
                        <input
                            v-model="searchQuery"
                            type="text"
                            placeholder="Search students, teachers, or classes..."
                            class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
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

            <!-- Main Content -->
            <div class="p-6">
                <!-- Statistics Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-gray-500 text-sm">Total Students</p>
                                <p class="text-2xl font-bold">{{ statistics.studentCount }}</p>
                            </div>
                            <div class="bg-blue-500 rounded-full p-3">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-gray-500 text-sm">Total Teachers</p>
                                <p class="text-2xl font-bold">{{ statistics.teacherCount }}</p>
                            </div>
                            <div class="bg-purple-500 rounded-full p-3">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-gray-500 text-sm">Total Classes</p>
                                <p class="text-2xl font-bold">{{ statistics.classCount }}</p>
                            </div>
                            <div class="bg-yellow-500 rounded-full p-3">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="bg-white rounded-lg shadow-md p-6">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-gray-500 text-sm">Attendance Rate</p>
                                <p class="text-2xl font-bold">{{ statistics.attendanceRate }}%</p>
                            </div>
                            <div class="bg-green-500 rounded-full p-3">
                                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Quick Actions -->
                <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div class="bg-white rounded-lg shadow-md p-6">
                        <h3 class="text-lg font-semibold mb-4">Add Students</h3>
                        <p class="text-gray-600 mb-4">Add new students to the system and manage their information.</p>
                        <a href="/students" class="text-blue-600 hover:text-blue-800">Manage Students →</a>
                    </div>

                    <div class="bg-white rounded-lg shadow-md p-6">
                        <h3 class="text-lg font-semibold mb-4">Add Teachers</h3>
                        <p class="text-gray-600 mb-4">Add new teachers and manage their profiles and assignments.</p>
                        <a href="/teachers" class="text-blue-600 hover:text-blue-800">Manage Teachers →</a>
                    </div>

                    <div class="bg-white rounded-lg shadow-md p-6">
                        <h3 class="text-lg font-semibold mb-4">Manage Classes</h3>
                        <p class="text-gray-600 mb-4">Create and manage classes, sections, and schedules.</p>
                        <a href="/classes" class="text-blue-600 hover:text-blue-800">Manage Classes →</a>
                    </div>
                </div>

                <!-- Recent Activities -->
                <div class="bg-white rounded-lg shadow-md p-6">
                    <h3 class="text-lg font-semibold mb-4">Recent Activities</h3>
                    <div class="space-y-4">
                        <!-- Add your recent activities here -->
                        <p class="text-gray-600">No recent activities to display.</p>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template> 