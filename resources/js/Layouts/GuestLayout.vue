<script setup>
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <div class="login">
        <div class="login-container">
            <!-- Left side with form -->
            <div class="login-form-container">
                <div class="logo-section">
                    <Link :href="route('home')">
                        <img src="/img/logo.svg" alt="Logo" class="logo" />
                    </Link>
                </div>
                <slot />
            </div>

            <!-- Right side with background -->
            <div class="login-background">
                <div class="background-overlay"></div>
                <img src="/img/auth-background.svg" alt="Background" class="background-image" />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.login {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: v.$background;

    .login-container {
        display: flex;
        width: 100%;
        max-width: 1200px;
        min-height: 600px;
        background: white;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    }

    .login-form-container {
        flex: 1;
        padding: 2.5rem;
        max-width: 480px;
        margin: 0 auto;
    }

    .logo-section {
        text-align: center;
        margin-bottom: 2rem;

        .logo {
            height: 3rem;
            width: auto;
        }
    }

    .login-background {
        display: none;
        position: relative;
        flex: 1;
        background-color: #f4f4f4;
        overflow: hidden;

        @media (min-width: v.$breakpoint-lg) {
            display: block;
        }

        .background-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            z-index: 1;
        }

        .background-image {
            position: absolute;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
}
</style>
