document.getElementById("password-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var password = document.getElementById("password-input").value;
    
    if (password === "valeapena") {
      // Senha correta, redirecionar para a página protegida
      window.location.href = "access/candidatura.html";
    } else {
      // Senha incorreta, exibir mensagem de erro
      document.getElementById("error-message").textContent = "digitou errado, tenta de novo.";
    }
  });