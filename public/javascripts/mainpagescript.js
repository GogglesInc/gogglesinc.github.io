const upperbar = document.querySelector('.upperbar')
upperbar.classList.toggle('barafter')
const getstartbtn = document.querySelector('#getstart')
getstartbtn.addEventListener('click', () => {
  window.scrollTo({
    top: 640,
    behavior: 'smooth'
  })
})

$(window).on('scroll', function () {
  if ($(window).scrollTop() >= $(
    '#header').offset().top + $('#header')
    .outerHeight() - window.innerHeight) {
    alert('You reached the end of the DIV')
  }
})
