// progressive enchancement
document.body.classList.toggle('js-enabled');

document.addEventListener('DOMContentLoaded', function(event) 
{
    let hamburger = document.getElementById('hamburger');
    // If JS is enabled, it will un-expand the hamburger
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.onclick = function()
    {   
        if(this.getAttribute('aria-expanded') == 'false')
        {
            this.setAttribute('aria-expanded', 'true');
        }else{
            this.setAttribute('aria-expanded', 'false');
        }
    }
});

document.addEventListener('click', function(event) {
    // verifica se o clique foi fora do botão do menu ou do menu em si
    if (!event.target.closest('#hamburger') && !event.target.closest('.menu')) {
        // se sim, esconde o menu
        hamburger.setAttribute('aria-expanded', 'false');
    }
});

window.addEventListener('scroll', function(event) {
    // verifica se o menu está expandido
    if (hamburger.getAttribute('aria-expanded') == 'true') {
        // se sim, esconde o menu
        hamburger.setAttribute('aria-expanded', 'false');
    }
});
  