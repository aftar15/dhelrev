<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { ref, computed } from 'vue';
import { router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

type User = {
    avatar: string | null;
    firstName: string;
    lastName: string;
    title: string;
    email: string;
    about: string;
    password?: string;
};

const props = defineProps<{
    user: User;
    status?: string;
}>();

const avatar = ref<File | null>(null);
const DEFAULT_AVATAR = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iI2NjYyI+PHBhdGggZD0iTTEyIDEyYzIuMjEgMCA0LTEuNzkgNC00cy0xLjc5LTQtNC00LTQgMS43OS00IDQgMS43OSA0IDQgNHptMCAyYy0yLjY3IDAtOCAxLjM0LTggNHYyaDE2di0yYzAtMi42Ni01LjMzLTQtOC00eiIvPjwvc3ZnPg==';

const avatarUrl = computed(() => {
    if (avatar.value) {
        return URL.createObjectURL(avatar.value);
    }
    if (props.user.avatar) {
        return `/storage/${props.user.avatar}`;
    }
    return DEFAULT_AVATAR;
});

const form = ref({
    firstName: props.user.firstName,
    lastName: props.user.lastName,
    title: props.user.title,
    email: props.user.email,
    about: props.user.about,
    password: props.user.password,
});

const processing = ref(false);

const saveChanges = async () => {
    processing.value = true;
    try {
        await router.put(route('user.update'), {
            firstName: form.value.firstName,
            lastName: form.value.lastName,
            title: form.value.title,
            email: form.value.email,
            about: form.value.about,
            password: form.value.password,
        });
        processing.value = false;
        router.visit(route('user.index'));
    } catch (error) {
        processing.value = false;
        console.error('Error updating user:', error);
    }
};

const cancelChanges = () => {
    router.visit(route('user.index'));
};

const handleAvatarChange = (event: Event) => {
    const file = (event.target as HTMLInputElement).files[0];
    avatar.value = file;
};
</script>

<template>
    <Head title="Settings" />

    <AuthenticatedLayout>
        <div class="min-h-screen bg-gray-100 p-6">
            <div class="bg-white shadow-md rounded-lg p-6">
                <!-- Header -->
                <div class="flex justify-between items-center mb-6">
                    <h1 class="text-2xl font-bold">Settings</h1>
                </div>

                <!-- Profile Section -->
                <div class="max-w-3xl mx-auto">
                    <div class="space-y-6">
                        <!-- Avatar Upload -->
                        <div class="text-center">
                            <div class="w-32 h-32 mx-auto bg-gray-200 rounded-full overflow-hidden">
                                <img 
                                    :src="avatarUrl"
                                    alt="Profile"
                                    class="w-full h-full object-cover"
                                    @error="$event.target.src = DEFAULT_AVATAR"
                                />
                            </div>
                            <div class="mt-4">
                                <label class="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                                    <span>Change Avatar</span>
                                    <input 
                                        type="file" 
                                        class="hidden" 
                                        accept="image/*"
                                        @change="handleAvatarChange"
                                    />
                                </label>
                            </div>
                        </div>

                        <!-- Profile Form -->
                        <form @submit.prevent="saveChanges" class="space-y-6">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label class="block text-sm font-medium text-gray-700">FIRST NAME</label>
                                    <input 
                                        v-model="form.firstName"
                                        type="text" 
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700">LAST NAME</label>
                                    <input 
                                        v-model="form.lastName"
                                        type="text" 
                                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    />
                                </div>
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700">TITLE</label>
                                <input 
                                    v-model="form.title"
                                    type="text" 
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700">EMAIL</label>
                                <input 
                                    v-model="form.email"
                                    type="email" 
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label class="block text-sm font-medium text-gray-700">ABOUT</label>
                                <textarea 
                                    v-model="form.about"
                                    rows="4" 
                                    class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <!-- Password Change Section -->
                            <div class="border-t pt-6">
                                <h3 class="text-lg font-medium mb-4">Change Password</h3>
                                <div class="space-y-4">
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700">CURRENT PASSWORD</label>
                                        <input 
                                            v-model="form.currentPassword"
                                            type="password" 
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700">NEW PASSWORD</label>
                                        <input 
                                            v-model="form.newPassword"
                                            type="password" 
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div>
                                        <label class="block text-sm font-medium text-gray-700">CONFIRM NEW PASSWORD</label>
                                        <input 
                                            v-model="form.newPasswordConfirmation"
                                            type="password" 
                                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        />
                                    </div>
                                </div>
                            </div>

                            <!-- Action Buttons -->
                            <div class="flex justify-end space-x-4">
                                <button 
                                    type="button"
                                    @click="cancelChanges"
                                    class="px-4 py-2 border rounded-md hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button 
                                    type="submit"
                                    class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                    :disabled="processing"
                                >
                                    {{ processing ? 'Saving...' : 'Save Changes' }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
