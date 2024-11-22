<script setup>
defineProps({
    label: {
        type: String,
        required: true
    }
});
</script>

<template>
    <div class="flex items-center justify-between">
        <span class="text-gray-700">{{ label }}</span>
        <input type="checkbox" class="toggle-checkbox" />
    </div>
</template>

<style scoped>
.toggle-checkbox {
    @apply appearance-none w-10 h-5 bg-gray-300 rounded-full relative outline-none cursor-pointer transition-colors;
}

.toggle-checkbox:checked {
    @apply bg-blue-500;
}

.toggle-checkbox::before {
    content: '';
    @apply absolute w-4 h-4 bg-white rounded-full top-0.5 left-0.5 transition-transform;
}

.toggle-checkbox:checked::before {
    @apply transform translate-x-5;
}
</style> 