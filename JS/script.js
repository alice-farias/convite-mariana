const pages = document.querySelectorAll(".page");
let currentPage = 0;

function turnPage() {
  if (currentPage < pages.length - 1) {
    // Adiciona a classe "flipped" à página atual
    pages[currentPage].classList.add("flipped");
    // Incrementa a página atual
    currentPage++;
  } else {
    // Reseta todas as páginas se a última página for alcançada
    pages.forEach(page => {
      page.classList.remove("flipped");
    });
    currentPage = 0; // Volta para a primeira página
  }
}

// Adiciona um evento de clique para virada de página
document.addEventListener("click", turnPage);
