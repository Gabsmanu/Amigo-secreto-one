let nomes = [];

function adicionarNome() {
  let input = document.getElementById("nome");
  if (input.value.trim() !== "") {
    nomes.push(input.value);
    atualizarLista();
    input.value = "";
  }
}

function atualizarLista() {
  let lista = document.getElementById("lista");
  lista.innerHTML = "";
  nomes.forEach(nome => {
    let item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);
  });
}

function sortear() {
  if (nomes.length < 2) {
    alert("Adicione pelo menos 2 nomes para sortear!");
    return;
  }

  let sorteado = nomes[Math.floor(Math.random() * nomes.length)];
  document.getElementById("resultado").textContent = 
    "O amigo secreto é: " + sorteado;
}
