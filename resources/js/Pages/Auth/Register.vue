<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import GuestLayout from '@/Layouts/GuestLayout.vue';
import InputError from '@/Components/InputError.vue';
import { ref } from 'vue';

const showPassword = ref(false);
const showConfirmPassword = ref(false);
const isLoading = ref(false);

const form = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
});

const submit = async () => {
    isLoading.value = true;
    try {
        await form.post(route('register'), {
            onFinish: () => form.reset('password', 'password_confirmation'),
        });
    } catch (error) {
        console.error('Registration error:', error);
    } finally {
        isLoading.value = false;
    }
};

const togglePassword = (field) => {
    if (field === 'password') {
        showPassword.value = !showPassword.value;
    } else {
        showConfirmPassword.value = !showConfirmPassword.value;
    }
};
</script>

<template>
    <div class="login-page">
        <Head title="Register" />

        <div class="left-section">
            <div class="school-logo">
                <div class="logo-container">
                    <img src="/img/logo.jpg" alt="School Logo" class="logo-img" />
                </div>
                <div class="school-name">
                    <h1>Surigao City National High School</h1>
                </div>
            </div>
        </div>

        <div class="right-section">
            <div class="login-container">
                <h2>Create <span class="highlight">Account</span></h2>

                <form @submit.prevent="submit">
                    <!-- Name Input -->
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <div class="input-wrapper">
                            <img src="/img/user.svg" alt="User" class="input-icon" />
                            <input
                                id="name"
                                type="text"
                                v-model="form.name"
                                placeholder="John Doe"
                                :class="{ 'error': form.errors.name }"
                                required
                                autofocus
                            />
                        </div>
                        <InputError :message="form.errors.name" />
                    </div>

                    <!-- Email Input -->
                    <div class="form-group">
                        <label for="email">Email</label>
                        <div class="input-wrapper">
                            <img src="/img/email.svg" alt="Email" class="input-icon" />
                            <input
                                id="email"
                                type="email"
                                v-model="form.email"
                                placeholder="example@gmail.com"
                                :class="{ 'error': form.errors.email }"
                                required
                            />
                        </div>
                        <InputError :message="form.errors.email" />
                    </div>

                    <!-- Password Input -->
                    <div class="form-group">
                        <label for="password">Password</label>
                        <div class="input-wrapper">
                            <img src="/img/lock.svg" alt="Password" class="input-icon" />
                            <input
                                id="password"
                                :type="showPassword ? 'text' : 'password'"
                                v-model="form.password"
                                placeholder="••••••••"
                                :class="{ 'error': form.errors.password }"
                                required
                            />
                            <button 
                                type="button"
                                @click="() => togglePassword('password')"
                                class="toggle-password"
                            >
                                <img 
                                    :src="showPassword ? '/img/eye-off.svg' : '/img/eye.svg'"
                                    alt="Toggle password"
                                    class="toggle-icon"
                                />
                            </button>
                        </div>
                        <InputError :message="form.errors.password" />
                    </div>

                    <!-- Confirm Password Input -->
                    <div class="form-group">
                        <label for="password_confirmation">Confirm Password</label>
                        <div class="input-wrapper">
                            <img src="/img/lock.svg" alt="Confirm Password" class="input-icon" />
                            <input
                                id="password_confirmation"
                                :type="showConfirmPassword ? 'text' : 'password'"
                                v-model="form.password_confirmation"
                                placeholder="••••••••"
                                required
                            />
                            <button 
                                type="button"
                                @click="() => togglePassword('confirm')"
                                class="toggle-password"
                            >
                                <img 
                                    :src="showConfirmPassword ? '/img/eye-off.svg' : '/img/eye.svg'"
                                    alt="Toggle password"
                                    class="toggle-icon"
                                />
                            </button>
                        </div>
                    </div>

                    <!-- Submit Button -->
                    <button 
                        type="submit" 
                        class="login-btn"
                        :disabled="isLoading"
                    >
                        {{ isLoading ? 'Creating Account...' : 'Register' }}
                    </button>

                    <!-- Login Link -->
                    <p class="register-link">
                        Already have an account? 
                        <Link :href="route('login')">Sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.login-page {
    min-height: 100vh;
    display: flex;
    background: v.$background;

    .left-section {
        flex: 1;
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/img/school-bg.jpg');
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;

        @media (max-width: v.$breakpoint-lg) {
            display: none;
        }
    }

    .school-logo {
        text-align: center;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;

        .logo-container {
            width: 150px;
            height: 150px;
            display: flex;
            align-items: center;
            justify-content: center;

            .logo-img {
                width: 100%;
                height: auto;
            }
        }

        .school-name {
            h1 {
                font-size: 2rem;
                font-weight: 700;
                line-height: 1.2;
                max-width: 400px;
            }
        }
    }

    .right-section {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        background-color: #f5f5f5;
    }

    .login-container {
        background: white;
        padding: 2.5rem;
        border-radius: 1rem;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 400px;

        h2 {
            text-align: center;
            font-size: 1.875rem;
            font-weight: 700;
            margin-bottom: 2rem;
            color: v.$text;

            .highlight {
                color: v.$primary;
            }
        }
    }
}

// Reuse the same form styles from Login.vue
.form-group {
    margin-bottom: 1.5rem;

    label {
        display: block;
        font-size: 0.875rem;
        font-weight: 500;
        color: v.$text;
        margin-bottom: 0.5rem;
    }
}

.input-wrapper {
    position: relative;

    .input-icon {
        position: absolute;
        left: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        width: 1.25rem;
        height: 1.25rem;
        color: #9ca3af;
    }

    input {
        width: 100%;
        padding: 0.75rem 0.75rem 0.75rem 2.5rem;
        border: 1px solid #e5e7eb;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        transition: all 0.2s;

        &:focus {
            outline: none;
            border-color: v.$primary;
            box-shadow: 0 0 0 3px rgba(v.$primary, 0.1);
        }

        &.error {
            border-color: v.$error;
        }
    }

    .toggle-password {
        position: absolute;
        right: 0.75rem;
        top: 50%;
        transform: translateY(-50%);
        background: none;
        border: none;
        padding: 0;
        cursor: pointer;

        .toggle-icon {
            width: 1.25rem;
            height: 1.25rem;
            color: #9ca3af;
        }
    }
}

.login-btn {
    width: 100%;
    padding: 0.75rem;
    background: v.$primary;
    color: white;
    font-weight: 600;
    border: none;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: all 0.2s;
    margin-top: 1.5rem;

    &:hover {
        background: rgba(v.$primary, 0.9);
    }

    &:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
}

.register-link {
    text-align: center;
    margin-top: 1.5rem;
    color: v.$text;
    font-size: 0.875rem;

    a {
        color: v.$primary;
        text-decoration: none;
        font-weight: 600;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>
