document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  document.querySelector(".confirmation-message").style.display = "block";

  const formData = new FormData(this);

  fetch(this.action, {
    method: this.method,
    body: formData,
  })
    .then((response) => {
      if (response.ok) {
        console.log("Mensagem enviada com sucesso!");
      } else {
        console.error("Erro ao enviar a mensagem.");
      }
    })
    .catch((error) => {
      console.error("Erro ao enviar o formulário:", error);
    });

  this.reset();
});
