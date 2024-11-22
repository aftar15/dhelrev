<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import StudentModal from './StudentModal.vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import type { Student } from '@/types/student';

const props = defineProps<{
    students: Student[];
}>();

const searchQuery = ref('');
const showModal = ref(false);
const editingStudent = ref<Student | null>(null);

const handleEdit = (student: Student) => {
    editingStudent.value = student;
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    editingStudent.value = null;
};
</script>

<template>
    <Head title="Students" />

    <AuthenticatedLayout>
        <div class="min-h-screen bg-gray-100 p-6">
            <!-- Header -->
            <div class="mb-6 flex justify-between items-center">
                <h1 class="text-2xl font-semibold text-gray-900">Students</h1>
                <button
                    @click="showModal = true"
                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Add Student
                </button>
            </div>

            <!-- Search Bar -->
            <div class="mb-6">
                <div class="relative max-w-xl">
                    <input
                        v-model="searchQuery"
                        type="text"
                        placeholder="Search students..."
                        class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                    />
                    <MagnifyingGlassIcon 
                        class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                    />
                </div>
            </div>

            <!-- Students Table -->
            <div class="bg-white rounded-lg shadow overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Section</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Year Level</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Gender</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="student in students" :key="student.id">
                            <td class="px-6 py-4 whitespace-nowrap">{{ student.name }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ student.section }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ student.year_level }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ student.email }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ student.gender }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <button
                                    @click="handleEdit(student)"
                                    class="text-blue-600 hover:text-blue-900 mr-4"
                                >
                                    Edit
                                </button>
                                <button
                                    @click="$inertia.delete(`/students/${student.id}`)"
                                    class="text-red-600 hover:text-red-900"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Student Modal -->
            <StudentModal
                v-if="showModal"
                :student="editingStudent"
                @close="closeModal"
            />
        </div>
    </AuthenticatedLayout>
</template>