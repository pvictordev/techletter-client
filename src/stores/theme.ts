import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    isDarkMode: false
  }),
  actions: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode
      this.applyTheme()
      this.saveThemePreference()
    },
    applyTheme() {
      if (this.isDarkMode) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    },
    initTheme() {
      const savedTheme = localStorage.getItem('isDarkMode')

      if (savedTheme !== null) {
        this.isDarkMode = JSON.parse(savedTheme)
      } else {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
        this.isDarkMode = darkModeMediaQuery.matches
        darkModeMediaQuery.addEventListener('change', (e) => {
          this.isDarkMode = e.matches
          this.applyTheme()
          this.saveThemePreference()
        })
      }
      this.applyTheme()
    },
    saveThemePreference() {
      localStorage.setItem('isDarkMode', JSON.stringify(this.isDarkMode))
    }
  }
})
