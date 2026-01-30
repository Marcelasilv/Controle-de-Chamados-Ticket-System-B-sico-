function criar() {
  const texto = document.getElementById("ticket").value;
  if (!texto) return;

  const li = document.createElement("li");
  li.innerText = texto + " (Aberto)";
  li.onclick = () => li.innerText = texto + " (Resolvido)";

  document.getElementById("lista").appendChild(li);
  document.getElementById("ticket").value = "";
}
