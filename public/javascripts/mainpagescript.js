const upperbar = document.querySelector('.upperbar')
const getstartbtn = document.querySelector('#getstart')
// const disclaimerbtn = document.querySelector('#disclaimer')
// const disclaimerscreen = document.querySelector('header')

window.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset !== undefined ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop
  let bar
  if (scrollTop >= 640) {
    bar = true
  }
  if (bar === true) {
    upperbar.classList.add('barafter')
  } else {
    upperbar.classList.remove('barafter')
  }
})

getstartbtn.addEventListener('click', () => {
  window.scrollTo({
    top: 640,
    behavior: 'smooth'
  })
})

// disclaimerbtn.addEventListener('click', () => {
//   disclaimerscreen.style.display = 'none'
// })

const services = document.querySelectorAll('.grid-child')

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle('show', entry.isIntersecting)
    if (entry.isIntersecting) observer.unobserve(entry.target)
  })
}, {
  threshold: 0.3
})

services.forEach(service => {
  observer.observe(service)
})
