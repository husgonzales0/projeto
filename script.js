function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")
  
  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('light')) {
    // se tiver light mode, adicionar imagem light
    img.setAttribute('src', './assets/avatar.png')
    img.setAttribute("alt", "Foto de Hugo na janela fazendo cara de mau")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute('src','./assets/avatar1.png')
    img.setAttribute("alt", "Maiky Brito")
  }
}