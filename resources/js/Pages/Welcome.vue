<script setup>
import { Head, Link } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';

defineProps({
    canLogin: Boolean,
    canRegister: Boolean
});
</script>

<template>
    <Head title="Welcome to SCNHS" />
    <GuestLayout>
        <!-- Hero Section -->
        <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <div class="container mx-auto px-6 py-24">
                <div class="text-center">
                    <h1 class="text-5xl font-bold mb-4">Transform Your Learning Journey</h1>
                    <p class="text-xl mb-8">Join our digital learning platform for personalized education experience</p>
                    <div class="space-x-4">
                        <Link v-if="canLogin" 
                              :href="route('login')"
                              class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition">
                            Get Started
                        </Link>
                        <Link v-if="canRegister" 
                              :href="route('register')"
                              class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        <!-- Features Section -->
        <div class="py-24 bg-gray-50">
            <div class="container mx-auto px-6">
                <div class="grid md:grid-cols-3 gap-12">
                    <div class="bg-white p-8 rounded-xl shadow-sm">
                        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Personalized Learning</h3>
                        <p class="text-gray-600">Adaptive learning paths tailored to your unique needs and pace.</p>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-sm">
                        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Expert Teachers</h3>
                        <p class="text-gray-600">Learn from experienced educators dedicated to your success.</p>
                    </div>
                    <div class="bg-white p-8 rounded-xl shadow-sm">
                        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-semibold mb-2">Interactive Content</h3>
                        <p class="text-gray-600">Engage with dynamic learning materials and real-time feedback.</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Stats Section -->
        <div class="py-24 bg-white">
            <div class="container mx-auto px-6">
                <div class="grid md:grid-cols-3 gap-12 text-center">
                    <div>
                        <div class="text-4xl font-bold text-blue-600 mb-2">1000+</div>
                        <div class="text-gray-600">Students Enrolled</div>
                    </div>
                    <div>
                        <div class="text-4xl font-bold text-blue-600 mb-2">50+</div>
                        <div class="text-gray-600">Expert Teachers</div>
                    </div>
                    <div>
                        <div class="text-4xl font-bold text-blue-600 mb-2">100+</div>
                        <div class="text-gray-600">Available Courses</div>
                    </div>
                </div>
            </div>
        </div>
    </GuestLayout>
</template>
