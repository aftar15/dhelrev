import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    isLoading: false,
    theme: 'light'
  }),
  actions: {
    setLoading(status: boolean) {
      this.isLoading = status
    },
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  }
}) 