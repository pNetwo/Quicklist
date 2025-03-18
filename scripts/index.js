const input = document.getElementById("new-item");
const list = document.getElementById("item-list");
const add = document.getElementById("add-btn");

// função para adicionar item.
function addItem() {
  const li = document.createElement("li");
  const id = Math.floor(100 + Math.random() * 900);

  if (input.value.trim() === "") {
    alert("Por favor, insira um item válido.");
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
  li.querySelector("input").addEventListener("change", () => {
    if (li.querySelector("input").checked) {
      li.classList.add("hidden");
    } else {
      li.classList.remove("item-removed");
    }
  });

  list.appendChild(li);

  input.value = "";
}

add.addEventListener("click", addItem);
