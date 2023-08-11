document.addEventListener("click", (event) => {
  if (event.target.dataset.type === "remove") {
    const id = event.target.dataset.id;

    remove(id).then(() => {
      event.target.closest("li").remove();
    });
  } else if (event.target.dataset.type === "edit") {
    const id = event.target.dataset.id;

    const title = prompt("Enter new title:");

    if (title) {
      edit({ id, title }).then(() => {
        const elemId = "#title_" + id;
        document.querySelector(elemId).innerHTML = title;
      });
    }
  }
});

async function remove(id) {
  await fetch(`/${id}`, { method: "DELETE" });
}

async function edit(data) {
  await fetch(`/${data.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });
}
