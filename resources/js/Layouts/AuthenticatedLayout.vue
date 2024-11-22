<script setup>
import { Link } from '@inertiajs/vue3';
import { 
    HomeIcon, 
    UserGroupIcon, 
    UsersIcon, 
    CalendarIcon, 
    DocumentChartBarIcon,
    Cog6ToothIcon
} from '@heroicons/vue/24/outline';

const handleImageError = (event) => {
    // Remove the broken image
    event.target.style.display = 'none';
    // Show the fallback icon
    event.target.nextElementSibling.style.display = 'block';
};
</script>

<template>
    <div class="min-h-screen bg-gray-100">
        <!-- Sidebar -->
        <div class="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
            <!-- Logo and School Name -->
            <div class="p-6 flex flex-col items-center">
                <div class="w-32 h-32 mb-3">
                    <img 
                        src="/images/school-logo.jpg" 
                        alt="Surigao City NHS Logo" 
                        class="w-full h-full object-contain"
                    />
                </div>
                <h1 class="text-xl font-bold text-center">Surigao City NHS</h1>
            </div>

            <!-- Navigation -->
            <nav class="mt-6 px-4 space-y-2">
                <Link 
                    :href="route('dashboard')"
                    class="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    :class="{ 'bg-blue-50': $page.url === '/dashboard' }"
                >
                    <HomeIcon class="w-8 h-8 mr-3 text-gray-600" />
                    <span class="text-[28px] text-[#746F6F] font-bold">Dashboard</span>
                </Link>

                <Link 
                    :href="route('teachers.index')"
                    class="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    :class="{ 'bg-blue-50': $page.url.startsWith('/teachers') }"
                >
                    <UserGroupIcon class="w-8 h-8 mr-3 text-gray-600" />
                    <span class="text-[28px] text-[#746F6F] font-bold">Teachers</span>
                </Link>

                <Link 
                    :href="route('students.index')"
                    class="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    :class="{ 'bg-blue-50': $page.url.startsWith('/students') }"
                >
                    <UsersIcon class="w-8 h-8 mr-3 text-gray-600" />
                    <span class="text-[28px] text-[#746F6F] font-bold">Students</span>
                </Link>

                <Link 
                    :href="route('calendar.index')"
                    class="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    :class="{ 'bg-blue-50': $page.url.startsWith('/calendar') }"
                >
                    <CalendarIcon class="w-8 h-8 mr-3 text-gray-600" />
                    <span class="text-[28px] text-[#746F6F] font-bold">Calendar</span>
                </Link>

                <Link 
                    :href="route('reports.index')"
                    class="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    :class="{ 'bg-blue-50': $page.url.startsWith('/reports') }"
                >
                    <DocumentChartBarIcon class="w-8 h-8 mr-3 text-gray-600" />
                    <span class="text-[28px] text-[#746F6F] font-bold">Reports</span>
                </Link>

                <Link 
                    :href="route('settings.index')"
                    class="flex items-center px-4 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    :class="{ 'bg-blue-50': $page.url.startsWith('/settings') }"
                >
                    <Cog6ToothIcon class="w-8 h-8 mr-3 text-gray-600" />
                    <span class="text-[28px] text-[#746F6F] font-bold">Settings</span>
                </Link>
            </nav>
        </div>

        <!-- Main Content -->
        <div class="pl-64">
            <slot />
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../../css/_variables' as vars;

.layout {
    min-height: 100vh;
    background: vars.$background;
}

.navbar {
    background: white;
    border-bottom: 1px solid vars.$secondary;
    position: sticky;
    top: 0;
    z-index: 50;
}

.navbar-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 1rem;
    height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar-left {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.navbar-logo {
    display: flex;
    align-items: center;
}

.navbar-links {
    display: none;
    gap: 1.5rem;

    @media (min-width: vars.$breakpoint-md) {
        display: flex;
    }
}

.nav-link {
    padding: 0.5rem 0.75rem;
    color: #4b5563;
    font-size: 0.875rem;
    font-weight: 500;
    border-radius: 0.375rem;
    transition: all 0.2s;

    &:hover {
        background: #f3f4f6;
    }

    &.active {
        color: #4F46E5;
        background: #eff6ff;
    }
}

.user-menu {
    position: relative;
}

.user-menu-button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    color: #4b5563;
    font-size: 0.875rem;
    font-weight: 500;
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 0.375rem;
    transition: all 0.2s;

    &:hover {
        background: #f3f4f6;
    }
}

.dropdown-icon {
    width: 1.25rem;
    height: 1.25rem;
}

.dropdown-menu {
    position: absolute;
    right: 0;
    top: 100%;
    margin-top: 0.5rem;
    width: 12rem;
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    border: 1px solid #e5e7eb;
    overflow: hidden;
}

.dropdown-item {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    text-align: left;
    color: #4b5563;
    font-size: 0.875rem;
    transition: all 0.2s;

    &:hover {
        background: #f3f4f6;
    }
}

.page-header {
    background: white;
    border-bottom: 1px solid #e5e7eb;
    margin-bottom: 1.5rem;
}

.header-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1.5rem 1rem;
}

.main-content {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1.5rem 1rem;
}
</style>
