<script setup>
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

defineProps({
    teachers: {
        type: Array,
        default: () => []
    }
});

const searchQuery = ref('');
</script>

<template>
    <Head title="Teachers" />

    <AuthenticatedLayout>
        <div class="min-h-screen bg-gray-100 p-6">
            <div class="bg-white shadow-md rounded-lg p-4">
                <div class="flex justify-between items-center mb-4">
                    <h1 class="text-2xl font-bold">Teachers</h1>
                    <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                        Add Teacher
                    </button>
                </div>
                <div class="flex mb-4">
                    <div class="relative flex-grow">
                        <input
                            v-model="searchQuery"
                            type="text"
                            placeholder="Search for a teacher by name or email"
                            class="w-full px-4 py-2 pr-10 border rounded"
                        />
                        <span class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="overflow-x-auto">
                    <table class="w-full text-left">
                        <thead>
                            <tr class="bg-gray-200">
                                <th class="p-2">Name</th>
                                <th class="p-2">Department</th>
                                <th class="p-2">Subject</th>
                                <th class="p-2">Email address</th>
                                <th class="p-2">Contact</th>
                                <th class="p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="teachers.length === 0">
                                <td colspan="6" class="text-center p-4 text-gray-500">
                                    No teachers found
                                </td>
                            </tr>
                            <tr v-else v-for="teacher in teachers" 
                                :key="teacher.email" 
                                class="border-b hover:bg-gray-50">
                                <td class="p-2">{{ teacher.name }}</td>
                                <td class="p-2">{{ teacher.department }}</td>
                                <td class="p-2">{{ teacher.subject }}</td>
                                <td class="p-2">{{ teacher.email }}</td>
                                <td class="p-2">{{ teacher.contact }}</td>
                                <td class="p-2">
                                    <button class="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-2">
                                        Edit
                                    </button>
                                    <button class="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template> 