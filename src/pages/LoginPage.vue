<template>
  <div class="login">
    <div class="login-container">
      <!-- Left side with form -->
      <div class="login-form-container">
        <div class="logo-section">
          <img src="@/assets/images/logo.svg" alt="Logo" class="logo" />
          <h1 class="logo-text">Welcome Back!</h1>
        </div>

        <form @submit.prevent="handleSubmit" class="login-form">
          <!-- Google Login Button -->
          <button type="button" @click="handleGoogleLogin" class="google-login-btn">
            <img src="@/assets/icons/google.svg" alt="Google" class="google-icon" />
            <span>Login with Google</span>
          </button>

          <!-- Separator -->
          <div class="separator">
            <div class="line"></div>
            <span>OR</span>
            <div class="line"></div>
          </div>

          <!-- Email Input -->
          <div class="form-group">
            <label for="email">Email</label>
            <div class="input-wrapper">
              <img src="@/assets/icons/email.svg" alt="Email" class="input-icon" />
              <input
                type="email"
                id="email"
                v-model="form.email"
                placeholder="example@gmail.com"
                :class="{ 'error': errors.email }"
                required
              />
            </div>
            <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
          </div>

          <!-- Password Input -->
          <div class="form-group">
            <label for="password">Password</label>
            <div class="input-wrapper">
              <img src="@/assets/icons/lock.svg" alt="Password" class="input-icon" />
              <input
                :type="showPassword ? 'text' : 'password'"
                id="password"
                v-model="form.password"
                placeholder="Enter your password"
                :class="{ 'error': errors.password }"
                required
              />
              <button 
                type="button" 
                @click="togglePassword" 
                class="toggle-password"
              >
                <img 
                  :src="showPassword ? '@/assets/icons/eye-off.svg' : '@/assets/icons/eye.svg'"
                  alt="Toggle password"
                />
              </button>
            </div>
            <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
          </div>

          <!-- Forgot Password Link -->
          <div class="forgot-password">
            <router-link to="/forgot-password">Forgot Password?</router-link>
          </div>

          <!-- Submit Button -->
          <button type="submit" class="submit-btn" :disabled="isLoading">
            {{ isLoading ? 'Logging in...' : 'Login' }}
          </button>

          <!-- Register Link -->
          <p class="register-link">
            Don't have an account? 
            <router-link to="/register">Sign up</router-link>
          </p>
        </form>
      </div>

      <!-- Right side with background -->
      <div class="login-background">
        <div class="background-overlay"></div>
        <img src="@/assets/images/login-bg.svg" alt="Background" class="background-image" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()

const showPassword = ref(false)
const isLoading = ref(false)

const form = reactive({
  email: '',
  password: ''
})

const errors = reactive({
  email: '',
  password: ''
})

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleGoogleLogin = async () => {
  try {
    isLoading.value = true
    await authStore.loginWithGoogle()
    router.push('/dashboard')
  } catch (error) {
    console.error('Google login failed:', error)
  } finally {
    isLoading.value = false
  }
}

const handleSubmit = async () => {
  try {
    isLoading.value = true
    // Reset errors
    errors.email = ''
    errors.password = ''

    await authStore.login(form)
    router.push('/dashboard')
  } catch (error: any) {
    if (error.response?.data?.errors) {
      const serverErrors = error.response.data.errors
      errors.email = serverErrors.email?.[0] || ''
      errors.password = serverErrors.password?.[0] || ''
    }
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped lang="scss">
.login {
  min-height: 100vh;
  display: flex;
  background-color: $background;

  .login-container {
    display: flex;
    width: 100%;
    min-height: 100vh;
  }

  .login-form-container {
    flex: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 480px;
    margin: 0 auto;
  }

  .logo-section {
    text-align: center;
    margin-bottom: 2rem;

    .logo {
      width: 80px;
      height: 80px;
    }

    .logo-text {
      font-family: $font-family-base;
      font-size: 2.25rem;
      font-weight: 800;
      color: $text;
      margin-top: 1rem;
    }
  }

  .login-form {
    width: 100%;
  }

  .google-login-btn {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
    padding: 0.75rem;
    border: 1px solid $secondary;
    border-radius: 0.5rem;
    background: white;
    font-size: 1rem;
    color: $text;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: #f8f9fa;
    }
  }

  .separator {
    display: flex;
    align-items: center;
    margin: 1.5rem 0;
    gap: 1rem;

    .line {
      flex: 1;
      height: 1px;
      background: $secondary;
    }

    span {
      color: $secondary;
      font-size: 0.875rem;
    }
  }

  .form-group {
    margin-bottom: 1.5rem;

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: $text;
      font-size: 0.875rem;
    }
  }

  .input-wrapper {
    position: relative;
    display: flex;
    align-items: center;

    input {
      width: 100%;
      padding: 0.75rem 1rem 0.75rem 2.5rem;
      border: 1px solid $secondary;
      border-radius: 0.5rem;
      font-size: 1rem;
      transition: all 0.2s;

      &:focus {
        outline: none;
        border-color: $primary;
        box-shadow: 0 0 0 2px rgba($primary, 0.1);
      }

      &.error {
        border-color: $error;
      }
    }

    .input-icon {
      position: absolute;
      left: 0.75rem;
      width: 1.25rem;
      height: 1.25rem;
      color: $secondary;
    }
  }

  .error-message {
    color: $error;
    font-size: 0.875rem;
    margin-top: 0.25rem;
  }

  .forgot-password {
    text-align: right;
    margin-bottom: 1.5rem;

    a {
      color: $primary;
      font-size: 0.875rem;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .submit-btn {
    width: 100%;
    padding: 0.75rem;
    background: $primary;
    color: white;
    border: none;
    border-radius: 0.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background: darken($primary, 5%);
    }

    &:disabled {
      opacity: 0.7;
      cursor: not-allowed;
    }
  }

  .register-link {
    text-align: center;
    margin-top: 1.5rem;
    color: $secondary;
    font-size: 0.875rem;

    a {
      color: $primary;
      text-decoration: none;
      font-weight: 600;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .login-background {
    display: none;
    position: relative;
    flex: 1;
    background-color: #f4f4f4;
    overflow: hidden;

    @media (min-width: $breakpoint-lg) {
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