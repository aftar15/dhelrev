<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import TeacherModal from './TeacherModal.vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline';
import type { Teacher } from '@/types/teacher';

const props = defineProps<{
    teachers: Teacher[];
}>();

const searchQuery = ref('');
const showModal = ref(false);
const editingTeacher = ref<Teacher | null>(null);

const handleEdit = (teacher: Teacher) => {
    editingTeacher.value = teacher;
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
    editingTeacher.value = null;
};
</script>

<template>
    <Head title="Teachers" />

    <AuthenticatedLayout>
        <div class="min-h-screen bg-gray-100 p-6">
            <!-- Header -->
            <div class="mb-6 flex justify-between items-center">
                <h1 class="text-2xl font-semibold text-gray-900">Teachers</h1>
                <button
                    @click="showModal = true"
                    class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                    Add Teacher
                </button>
            </div>

            <!-- Search Bar -->
            <div class="mb-6">
                <div class="relative max-w-xl">
                    <input
                        v-model="searchQuery"
                        type="text"
                        placeholder="Search teachers..."
                        class="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300"
                    />
                    <MagnifyingGlassIcon 
                        class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                    />
                </div>
            </div>

            <!-- Teachers Table -->
            <div class="bg-white rounded-lg shadow overflow-hidden">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="teacher in teachers" :key="teacher.id">
                            <td class="px-6 py-4 whitespace-nowrap">{{ teacher.name }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ teacher.department }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ teacher.subject }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ teacher.email }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">{{ teacher.contact }}</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <button
                                    @click="handleEdit(teacher)"
                                    class="text-blue-600 hover:text-blue-900 mr-4"
                                >
                                    Edit
                                </button>
                                <button
                                    @click="$inertia.delete(`/teachers/${teacher.id}`)"
                                    class="text-red-600 hover:text-red-900"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Teacher Modal -->
            <TeacherModal
                v-if="showModal"
                :teacher="editingTeacher"
                @close="closeModal"
            />
        </div>
    </AuthenticatedLayout>
</template> 