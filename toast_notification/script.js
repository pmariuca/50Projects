const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
  'Cats are nice!',
  'I like pink.',
  'Toast notifications',
  'Be happy!'
]

button.addEventListener('click', () => createNotification())

function createNotification() {
  const notification = document.createElement('div')
  notification.classList.add('toast')

  notification.innerText = getRandomMessage()

  toasts.appendChild(notification)

  setTimeout(() => {
    notification.remove()
  }, 3000)
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)]
}