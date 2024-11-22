<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useForm } from '@inertiajs/vue3';
import type { Teacher } from '@/types/teacher';

const props = defineProps<{
    teacher?: Teacher | null;
}>();

const emit = defineEmits<{
    close: [];
}>();

const form = useForm({
    name: '',
    email: '',
    department: '',
    subject: '',
    contact: '',
});

onMounted(() => {
    if (props.teacher) {
        form.name = props.teacher.name;
        form.email = props.teacher.email;
        form.department = props.teacher.department;
        form.subject = props.teacher.subject;
        form.contact = props.teacher.contact;
    }
});

const handleSubmit = () => {
    if (props.teacher) {
        form.put(`/teachers/${props.teacher.id}`, {
            onSuccess: () => emit('close'),
        });
    } else {
        form.post('/teachers', {
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
                    {{ teacher ? 'Edit Teacher' : 'Add New Teacher' }}
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
                        <label class="block text-sm font-medium text-gray-700">Department</label>
                        <input
                            v-model="form.department"
                            type="text"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            required
                        />
                        <div v-if="form.errors.department" class="text-red-500 text-sm mt-1">
                            {{ form.errors.department }}
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Subject</label>
                        <input
                            v-model="form.subject"
                            type="text"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            required
                        />
                        <div v-if="form.errors.subject" class="text-red-500 text-sm mt-1">
                            {{ form.errors.subject }}
                        </div>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700">Contact</label>
                        <input
                            v-model="form.contact"
                            type="text"
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                            required
                        />
                        <div v-if="form.errors.contact" class="text-red-500 text-sm mt-1">
                            {{ form.errors.contact }}
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
                        {{ teacher ? 'Update' : 'Create' }}
                    </button>
                </div>
            </form>
        </div>
    </div>
</template> 