// hamburguer abre o menu, X fecha o menu
const nav = document.querySelector('#header nav');
const toggle = document.querySelectorAll('nav .toggle');

for (const element of toggle) {
  element.addEventListener('click', function(){
    nav.classList.toggle('show');
  })
}

// esconde o menu quando clica em um item
const links = document.querySelectorAll('nav ul li a');

for (const link of links){
  link.addEventListener('click', function(){
    nav.classList.remove('show')
  })
}

//mudar header da pagina quando der scroll
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

window.addEventListener('scroll', function(){
  if(window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})
