<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <aside class="w-64 bg-white shadow-md min-h-screen">
        <div class="p-4 text-center font-bold text-lg">
            Surigao City NHS
        </div>
        <nav class="mt-4">
            <Link 
                :href="route('dashboard')"
                class="flex items-center px-4 py-2 hover:bg-gray-200"
                :class="{ 'bg-blue-500 text-white': $page.url === '/dashboard' }"
            >
                <span class="material-icons mr-2">dashboard</span>
                <span>Dashboard</span>
            </Link>

            <Link 
                :href="route('students.index')"
                class="flex items-center px-4 py-2 hover:bg-gray-200"
                :class="{ 'bg-blue-500 text-white': $page.url.startsWith('/students') }"
            >
                <span class="material-icons mr-2">school</span>
                <span>Students</span>
            </Link>

            <Link 
                :href="route('teachers.index')"
                class="flex items-center px-4 py-2 hover:bg-gray-200"
                :class="{ 'bg-blue-500 text-white': $page.url.startsWith('/teachers') }"
            >
                <span class="material-icons mr-2">people</span>
                <span>Teachers</span>
            </Link>

            <Link 
                :href="route('calendar.index')"
                class="flex items-center px-4 py-2 hover:bg-gray-200"
                :class="{ 'bg-blue-500 text-white': $page.url.startsWith('/calendar') }"
            >
                <span class="material-icons mr-2">calendar_today</span>
                <span>Calendar</span>
            </Link>

            <Link 
                :href="route('reports.index')"
                class="flex items-center px-4 py-2 hover:bg-gray-200"
                :class="{ 'bg-blue-500 text-white': $page.url.startsWith('/reports') }"
            >
                <span class="material-icons mr-2">assessment</span>
                <span>Reports</span>
            </Link>

            <Link 
                :href="route('settings.index')"
                class="flex items-center px-4 py-2 hover:bg-gray-200"
                :class="{ 'bg-blue-500 text-white': $page.url.startsWith('/settings') }"
            >
                <span class="material-icons mr-2">settings</span>
                <span>Settings</span>
            </Link>
        </nav>
    </aside>
</template>

<style scoped>
.material-icons {
    font-size: 24px;
}
</style> 