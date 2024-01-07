function toggleMode() { //criei uma função com o nome toggleMode que está linkada no botão//
  const html = document.documentElement //criei uma constante que se chama html e coloquei ela para procurar no documento, um elemento dele//

  html.classList.toggle('light') //nessa linha ele vai pegar a constante, vai procurar na lista de classe se tem a classe 'light', a funcção toggle faz ele adicionar essa classe se não tiver e se tiver ele tira//

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {
    img.setAttribute('src', './assets/avatar-light.png')
    img.setAttribute('alt', 'Foto de um cara com fundo azul')
  } else {
    img.setAttribute('src','./assets/avatar.png')
    img.setAttribute('alt', 'Ftodo de Mayk Brito sorrindo')
  }
}