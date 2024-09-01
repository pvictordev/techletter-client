import { defineStore } from 'pinia'

export const useCardStore = defineStore('cardStore', {
  state: () => ({
    cards: [],
    currentPage: 1,
    cardsPerPage: 6
  }),
  getters: {
    filteredCards: (state) => {
      const startIndex = (state.currentPage - 1) * state.cardsPerPage
      const endIndex = startIndex + state.cardsPerPage
      return state.cards.slice(startIndex, endIndex)
    },
    totalPages: (state) => {
      return Math.ceil(state.cards.length / state.cardsPerPage)
    }
  },
  actions: {
    setCards(newCards: never[]) {
      this.cards = newCards
    },
    setPage(page: number) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    }
  }
})
