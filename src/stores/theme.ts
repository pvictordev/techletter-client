import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDarkMode: false
  }),
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      this.applyTheme()
    },
    applyTheme() {
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    initTheme() {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      this.isDarkMode = darkModeMediaQuery.matches
      this.applyTheme()

      darkModeMediaQuery.addEventListener('change', (e) => {
        this.isDarkMode = e.matches
        this.applyTheme()
      })
    }
  }
})
