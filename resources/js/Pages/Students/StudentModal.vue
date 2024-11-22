<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useForm } from '@inertiajs/vue3';
import type { Student } from '@/types/student';

const props = defineProps<{
    student?: Student | null;
}>();

const emit = defineEmits<{
    close: [];
}>();

const form = useForm({
    name: '',
    email: '',
    section: '',
    year_level: '',
    gender: '',
});

onMounted(() => {
    if (props.student) {
        form.name = props.student.name;
        form.email = props.student.email;
        form.section = props.student.section;
        form.year_level = props.student.year_level;
        form.gender = props.student.gender;
    }
});

const handleSubmit = () => {
    if (props.student) {
        form.put(`/students/${props.student.id}`, {
            onSuccess: () => emit('close'),
        });
    } else {
        form.post('/students', {
            onSuccess: () => emit('close'),
        });
    }
};
</script>

<template>
    <div class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
        <div class="bg-white rounded-lg p-6 w-full max-w-md">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-semibold">
                    {{ student ? 'Edit Student' : 'Add New Student' }}
                </h2>
                <button @click="emit('close')" class="text-gray-500 hover:text-gray-700">
                    <span class="sr-only">Close</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <form @submit.prevent="handleSubmit">
                <div class="space-y-4">
                    <div>
                        <label class="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            v-model="form.name"
                            type="text"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            required
                        />
                        <div v-if="form.errors.name" class="text-red-500 text-sm mt-1">
                            {{ form.errors.name }}
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            v-model="form.email"
                            type="email"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            required
                        />
                        <div v-if="form.errors.email" class="text-red-500 text-sm mt-1">
                            {{ form.errors.email }}
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Section</label>
                        <input
                            v-model="form.section"
                            type="text"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            required
                        />
                        <div v-if="form.errors.section" class="text-red-500 text-sm mt-1">
                            {{ form.errors.section }}
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Year Level</label>
                        <select
                            v-model="form.year_level"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            required
                        >
                            <option value="">Select Year Level</option>
                            <option value="Grade 11">Grade 11</option>
                            <option value="Grade 12">Grade 12</option>
                        </select>
                        <div v-if="form.errors.year_level" class="text-red-500 text-sm mt-1">
                            {{ form.errors.year_level }}
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Gender</label>
                        <select
                            v-model="form.gender"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <div v-if="form.errors.gender" class="text-red-500 text-sm mt-1">
                            {{ form.errors.gender }}
                        </div>
                    </div>
                </div>

                <div class="mt-6 flex justify-end space-x-3">
                    <button
                        type="button"
                        @click="emit('close')"
                        class="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        :disabled="form.processing"
                        class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
                    >
                        {{ student ? 'Update' : 'Create' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template> 