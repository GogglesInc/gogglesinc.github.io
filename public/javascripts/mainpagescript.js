const upperbar = document.querySelector('.upperbar')
const getstartbtn = document.querySelector('#getstart')
getstartbtn.addEventListener('click', () => {
  window.scrollTo({
    top: 640,
    behavior: 'smooth'
  })
})

window.addEventListener('scroll', eventscroll = () => {
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
