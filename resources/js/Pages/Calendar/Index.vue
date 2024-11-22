<script setup lang="ts">
import { Head } from '@inertiajs/vue3';
import { ref } from 'vue';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';

defineProps({
    events: {
        type: Array,
        default: () => []
    }
});

const currentDate = ref(new Date());
const searchQuery = ref('');
const showEventModal = ref(false);
const newEvent = ref({
    title: '',
    date: '',
    description: '',
    type: 'event'
});

const daysInMonth = () => {
    return new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 0).getDate();
};

const firstDayOfMonth = () => {
    return new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), 1).getDay();
};

const prevMonth = () => {
    currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
};

const nextMonth = () => {
    currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
};

const monthName = () => {
    return currentDate.value.toLocaleString('default', { month: 'long', year: 'numeric' });
};

const emptyDays = () => {
    return Array.from({ length: firstDayOfMonth() }, (_, i) => i);
};

const monthDays = () => {
    return Array.from({ length: daysInMonth() }, (_, i) => i + 1);
};
</script>

<template>
    <Head title="Calendar" />

    <AuthenticatedLayout>
        <div class="min-h-screen bg-gray-100 p-6">
            <div class="bg-white shadow-md rounded-lg p-4">
                <div class="flex justify-between items-center mb-4">
                    <h1 class="text-2xl font-bold">Calendar</h1>
                    <button 
                        @click="showEventModal = true"
                        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Add Event
                    </button>
                </div>

                <!-- Calendar Navigation -->
                <div class="flex justify-between items-center mb-6">
                    <div class="flex items-center space-x-4">
                        <button @click="prevMonth" class="p-2 hover:bg-gray-100 rounded-full">
                            <ChevronLeftIcon class="w-5 h-5" />
                        </button>
                        <h2 class="text-xl font-semibold">{{ monthName() }}</h2>
                        <button @click="nextMonth" class="p-2 hover:bg-gray-100 rounded-full">
                            <ChevronRightIcon class="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <!-- Calendar Grid -->
                <div class="grid grid-cols-7 gap-2 mb-2">
                    <div v-for="day in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']" 
                         :key="day" 
                         class="text-center font-medium text-gray-500 py-2"
                    >
                        {{ day }}
                    </div>
                </div>
                <div class="grid grid-cols-7 gap-2">
                    <div v-for="i in emptyDays()" 
                         :key="`empty-${i}`" 
                         class="h-32 bg-gray-50 rounded-lg"
                    >
                    </div>
                    <div v-for="day in monthDays()" 
                         :key="day" 
                         class="h-32 border rounded-lg p-2 hover:bg-gray-50"
                    >
                        <div class="font-semibold mb-1">{{ day }}</div>
                        <div class="space-y-1">
                            <div v-for="event in events" 
                                 :key="event.id" 
                                 class="text-xs p-1 rounded bg-blue-100 text-blue-800 truncate"
                            >
                                {{ event.title }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add Event Modal -->
        <div v-if="showEventModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div class="bg-white rounded-lg p-6 w-full max-w-md">
                <h2 class="text-xl font-bold mb-4">Add New Event</h2>
                <form @submit.prevent>
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Title</label>
                            <input 
                                v-model="newEvent.title"
                                type="text" 
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Date</label>
                            <input 
                                v-model="newEvent.date"
                                type="date" 
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Description</label>
                            <textarea 
                                v-model="newEvent.description"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                rows="3"
                            ></textarea>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700">Type</label>
                            <select 
                                v-model="newEvent.type"
                                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            >
                                <option value="event">Event</option>
                                <option value="reminder">Reminder</option>
                                <option value="task">Task</option>
                            </select>
                        </div>
                    </div>
                    <div class="mt-6 flex justify-end space-x-3">
                        <button 
                            type="button"
                            @click="showEventModal = false"
                            class="px-4 py-2 border rounded-md hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit"
                            class="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Save Event
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </AuthenticatedLayout>
</template> 