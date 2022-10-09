const header = document.querySelector('.header')
const btnMobile = document.querySelector('.menu-mobile')


function removerScroll() {
  if (header.classList.contains('nav-open')) {
    document.body.style.position = 'fixed'
  } else {
    document.body.style.position = 'relative'
  }
}

function toggleMenu() {
  header.classList.toggle('nav-open')

  removerScroll()
}

btnMobile.addEventListener('click', toggleMenu)

/* Direcionar Section */
const sectionAcessorios = document.querySelector('.js-acessorios')
const sectionComemore = document.querySelector('.js-comemore')

function direcionarSection() {
  header.classList.remove('nav-open')
  document.body.style.position = 'relative'
}

sectionAcessorios.addEventListener('click', direcionarSection)
sectionComemore.addEventListener('click', direcionarSection)

/*MODAL Contato*/

