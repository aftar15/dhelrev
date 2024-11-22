import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '../types'

type LoginCredentials = {
  email: string
  password: string
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = ref(false)

  async function login(credentials: LoginCredentials) {
    try {
      // Implement your login API call here
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      })

      if (!response.ok) {
        throw await response.json()
      }

      const data = await response.json()
      user.value = data.user
      isAuthenticated.value = true
    } catch (error) {
      throw error
    }
  }

  async function loginWithGoogle() {
    try {
      // Implement your Google login logic here
      const response = await fetch('/api/login/google', {
        method: 'POST',
      })

      if (!response.ok) {
        throw await response.json()
      }

      const data = await response.json()
      user.value = data.user
      isAuthenticated.value = true
    } catch (error) {
      throw error
    }
  }

  function logout() {
    user.value = null
    isAuthenticated.value = false
  }

  return {
    user,
    isAuthenticated,
    login,
    loginWithGoogle,
    logout,
  }
}) 