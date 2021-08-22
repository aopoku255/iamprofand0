let moon = document.querySelector('.moon-link')

moon.addEventListener('click', () => {
  document.body.classList.toggle('body-color')
  moon.style.backgroundColor == '#ffc107' ? '#ffc107' : '#f4f4f4'
})
