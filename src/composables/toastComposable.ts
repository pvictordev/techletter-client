import { ref } from 'vue'
import { useToast } from 'vue-toastification'

export function toastComposable() {
  const toast = useToast()
  const email = ref('')
  const errorMessage = ref('')

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
  }

  const handleSubmit = () => {
    if (validateEmail(email.value)) {
      errorMessage.value = ''
      email.value = ''
      showSuccess()
    } else {
      showFailure()
      errorMessage.value = 'Please enter a valid email address.'
    }
  }

  const showSuccess = () => {
    toast.success('Successfully subscribed!')
  }

  const showFailure = () => {
    toast.error('Enter a valid email address')
  }

  return {
    email,
    errorMessage,
    handleSubmit
  }
}
