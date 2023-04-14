// Seleciona o elemento img-hero
const imgHero = document.querySelector('.img-hero');

// Seleciona as sections hero e sobre
const sectionHero = document.querySelector('.hero');
const sectionSobre = document.querySelector('.sobre');

// Obtém a posição vertical (em pixels) da section sobre em relação ao topo da página
const posicaoSobre = sectionSobre.offsetTop;

// Adiciona um evento de rolagem à janela
window.addEventListener('scroll', function() {
  // Obtém a posição vertical (em pixels) da janela em relação ao topo da página
  const posicaoJanela = window.pageYOffset;

  // Verifica se a janela está abaixo da section hero e acima da section sobre
  if (posicaoJanela >= sectionHero.offsetHeight && posicaoJanela < posicaoSobre - imgHero.offsetHeight) {
    // Fixa o elemento img-hero
    imgHero.style.position = 'fixed';
    imgHero.style.top = '0';
  } else {
    // Desfixa o elemento img-hero
    imgHero.style.position = 'static';
  }
});