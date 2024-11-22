<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { ChartPieIcon, DocumentTextIcon, DocumentChartBarIcon, ArrowDownTrayIcon } from '@heroicons/vue/24/outline';

type ReportSummary = {
    totalStudents: number;
    averageGrade: number;
    passingRate: number;
    attendanceRate: number;
};

defineProps<{
    reports: any[];
    summary: ReportSummary;
}>();

const activeTab = ref('academic');
const selectedPeriod = ref('current');
const selectedSection = ref('all');
const showGenerateModal = ref(false);

const reportTypes = [
    { id: 'academic', name: 'Academic Performance', icon: ChartPieIcon },
    { id: 'attendance', name: 'Attendance Records', icon: DocumentTextIcon },
    { id: 'behavior', name: 'Behavioral Reports', icon: DocumentChartBarIcon }
];

const generateReport = () => {
    // Implementation for report generation
    console.log('Generating report...');
    showGenerateModal.value = false;
};
</script>

<template>
    <Head title="Reports" />

    <AuthenticatedLayout>
        <div class="min-h-screen bg-gray-100 p-6">
            <div class="bg-white shadow-md rounded-lg p-6">
                <!-- Header -->
                <div class="flex justify-between items-center mb-6">
                    <h1 class="text-2xl font-bold">Reports Dashboard</h1>
                    <button 
                        @click="showGenerateModal = true"
                        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center"
                    >
                        <ArrowDownTrayIcon class="w-5 h-5 mr-2" />
                        Generate Report
                    </button>
                </div>

                <!-- Summary Cards -->
                <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <div class="bg-blue-50 p-4 rounded-lg">
                        <h3 class="text-sm font-medium text-blue-600">Total Students</h3>
                        <p class="text-2xl font-bold">{{ summary.totalStudents }}</p>
                    </div>
                    <div class="bg-green-50 p-4 rounded-lg">
                        <h3 class="text-sm font-medium text-green-600">Average Grade</h3>
                        <p class="text-2xl font-bold">{{ summary.averageGrade }}%</p>
                    </div>
                    <div class="bg-yellow-50 p-4 rounded-lg">
                        <h3 class="text-sm font-medium text-yellow-600">Passing Rate</h3>
                        <p class="text-2xl font-bold">{{ summary.passingRate }}%</p>
                    </div>
                    <div class="bg-purple-50 p-4 rounded-lg">
                        <h3 class="text-sm font-medium text-purple-600">Attendance Rate</h3>
                        <p class="text-2xl font-bold">{{ summary.attendanceRate }}%</p>
                    </div>
                </div>

                <!-- Report Type Tabs -->
                <div class="border-b border-gray-200 mb-6">
                    <div class="flex space-x-8">
                        <button 
                            v-for="type in reportTypes"
                            :key="type.id"
                            @click="activeTab = type.id"
                            :class="[
                                'py-4 px-1 border-b-2 font-medium text-sm flex items-center',
                                activeTab === type.id
                                    ? 'border-blue-500 text-blue-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            ]"
                        >
                            <component :is="type.icon" class="w-5 h-5 mr-2" />
                            {{ type.name }}
                        </button>
                    </div>
                </div>

                <!-- Filters -->
                <div class="flex space-x-4 mb-6">
                    <select 
                        v-model="selectedPeriod"
                        class="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option value="current">Current Period</option>
                        <option value="lastMonth">Last Month</option>
                        <option value="lastQuarter">Last Quarter</option>
                        <option value="lastYear">Last Year</option>
                    </select>

                    <select 
                        v-model="selectedSection"
                        class="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option value="all">All Sections</option>
                        <option value="diamond">Diamond</option>
                        <option value="emerald">Emerald</option>
                        <option value="ruby">Ruby</option>
                    </select>
                </div>

                <!-- Report Content -->
                <div class="bg-gray-50 rounded-lg p-4">
                    <div v-if="reports.length === 0" class="text-center py-8 text-gray-500">
                        No reports available for the selected criteria
                    </div>
                    <!-- Report content will be dynamically rendered based on activeTab -->
                </div>
            </div>

            <!-- Generate Report Modal -->
            <div v-if="showGenerateModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                <div class="bg-white rounded-lg p-6 w-full max-w-md">
                    <h2 class="text-xl font-bold mb-4">Generate Report</h2>
                    <form @submit.prevent="generateReport">
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Report Type</label>
                                <select 
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option value="academic">Academic Performance</option>
                                    <option value="attendance">Attendance Records</option>
                                    <option value="behavior">Behavioral Reports</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Format</label>
                                <select 
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                >
                                    <option value="pdf">PDF</option>
                                    <option value="excel">Excel</option>
                                    <option value="csv">CSV</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700">Date Range</label>
                                <div class="grid grid-cols-2 gap-4">
                                    <input 
                                        type="date" 
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                    <input 
                                        type="date" 
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="mt-6 flex justify-end space-x-3">
                            <button 
                                type="button"
                                @click="showGenerateModal = false"
                                class="px-4 py-2 border rounded-md hover:bg-gray-50"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit"
                                class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            >
                                Generate
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template> 