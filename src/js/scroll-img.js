const imgHero = document.querySelector('.img-hero');
const sectionSobre = document.querySelector('#sobre');
const sectionProjetos = document.querySelector('#projetos');

window.addEventListener('scroll', () => {
  const scrollValue = window.pageYOffset;
  const sobreOffset = sectionSobre.offsetTop;
  const projetosOffset = sectionProjetos.offsetTop;

  if (scrollValue >= sobreOffset && scrollValue < projetosOffset) {
    imgHero.style.position = 'fixed';
    imgHero.style.top = '0';
  } else if (scrollValue >= projetosOffset) {
    imgHero.style.position = 'absolute';
    imgHero.style.top = `${projetosOffset - sobreOffset}px`;
  } else {
    imgHero.style.position = 'static';
  }
});
