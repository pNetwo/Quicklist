const input = document.getElementById("new-item");
const list = document.getElementById("item-list");
const add = document.getElementById("add-btn");

// display de itens removidos.
const removedMessage = document.getElementById("removed-message");

// Função para mostrar mensagem de item removido.
function showRemovedItem() {
  removedMessage.classList.remove("hidden");

  setTimeout(() => {
    removedMessage.classList.add("hidden");
  }, 3000);

  return;
}

// função para adicionar item.
function addItem() {
  const li = document.createElement("li");
  const id = Math.floor(100 + Math.random() * 900);
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

  if (input.value.trim() === "") {
    alert("Por favor, insira um item válido.");
    return;
  } else if (!regex.test(input.value.trim())) {
    alert("Por favor, insira um item válido sem números.");
    return;
  }

  li.innerHTML = `
    <input type="checkbox" name="item" id="item${id}"" />
    <label for="item${id}" class="checkbox-label"></label>
    <span>${input.value.trim()}</span>
    <img class="delete-item" src="/assets/icons/trash-default.svg" alt="lixeira" />
  `;

  //remover apenas itens com checkbox marcado.
  li.querySelector("input").addEventListener("change", () => {
    if (li.querySelector("input").checked) {
      li.querySelector(".delete-item").addEventListener("click", () => {
        li.remove();

        showRemovedItem();
      });
    }
  });

  // alert para marcar a função.
  li.querySelector(".delete-item").addEventListener("click", () => {
    if (!li.querySelector("input").checked) {
      alert("Marque a caixa de seleção para remover o item.");
    }
  });

  // Mostrar display de item removido.

  list.appendChild(li);

  input.value = "";
}

add.addEventListener("click", addItem);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addItem();
  }
});
