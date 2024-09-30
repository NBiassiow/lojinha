let scrollAmount=0;

function scrollProducts(direction) {
  const productList = document.getElementById('lista-produtos');
  const productWidth = productList.children[0].offsetWidth + 20;
  scrollAmount += direction * productWidth;
  productList.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

const secoes = document.querySelectorAll('.secao');

const body = document.body;

secoes.forEach(secao => {
  secao.addEventListener('mouseover', () => {
    const newBackground = secao.getAttribute('data-background');
    body.classList.add('transition');
    body.style.setProperty('--background', 'url(${newBackground})');
    body.style.backgroundImage = newBackground;
  });
  
  secao.addEventListener('mouseout', () => {
    body.style.backgroundImage = "url(https://media.mutualart.com/Images//2021_03/05/16/164809749/16115602-1183-4d29-9847-47821b60ed43.Jpeg)"
  });
});