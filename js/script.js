function modoEscuro() {
        document.body.classList.toggle("dark");

        const botao = document.querySelector("button");

        if (document.body.classList.contains("dark")) {
          botao.innerHTML = "☀️ Modo Claro";
        } else {
          botao.innerHTML = "🌙 Modo Escuro";
        }
      }