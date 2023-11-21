function finalizarPag() {
    window.location.href = '../adm';
}

function sair() {
  window.location.href = "../";
}

function meuPerfil() {
window.location.href = "../perfil";
}

const cells = document.querySelectorAll('selecionaQuiz');

function deletarPergunta(button) {
  var row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

document.addEventListener("DOMContentLoaded", function() {
  const cells = document.querySelectorAll('.selecionaPergunta');

  cells.forEach((cell) => {
    cell.addEventListener('click', () => {
      const cellText = cell.textContent.trim();
      if (cellText !== "") {
        window.location.href = '../adm/editarResposta';
      }
    });
  });

  const btnDeletar = document.querySelectorAll('.btn-deletar');
  btnDeletar.forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation(); 
      deletarPergunta(button);
    });
  });
});


function editarTitulo(element) {
  const textoOriginal = element.textContent;

  const input = document.createElement("input");
  input.value = textoOriginal;

  element.replaceWith(input);

  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      const novoTexto = input.value;
      element.textContent = novoTexto;
      input.replaceWith(element);
    }
  });

  input.addEventListener("blur", function () {
    const novoTexto = input.value;
    element.textContent = novoTexto;
    input.replaceWith(element);
  });

  input.focus();
}