function verificarLogin(event) {
    event.preventDefault();

    const usuarios = [
        { nome: "teste", email: "teste@teste.com", senha: "1234" },
        { nome: "Edmilson Chiquinho", email: "teste1@teste.com", senha: "1234" },
        { nome: "Marcelo Bambam", email: "teste2@teste.com", senha: "1234" },
        { nome: "Marco Almeida Jr", email: "teste3@teste.com", senha: "1234" },
        { nome: "Jorge Scheffer", email: "teste4@teste.com", senha: "1234" },
        { nome: "Hércules Alves", email: "teste5@teste.com", senha: "1234" },
        { nome: "Luiz Caldana", email: "teste6@teste.com", senha: "1234" },

        { nome: "Eliane Humberg", email: "teste7@teste.com", senha: "1234" },
        { nome: "Celso Ribeiro", email: "teste8@teste.com", senha: "1234" },
        { nome: "Felipe Sangali", email: "teste9@teste.com", senha: "1234" },
        { nome: "Antônio Carlos Schmidt", email: "teste10@teste.com", senha: "1234" },
        { nome: "Airton Moreira", email: "teste11@teste.com", senha: "1234" }
    ];

    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    // Verifica se o usuário existe no array
    const usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.senha === senha);

    if (usuarioEncontrado) {
        // Salvar dados do usuário no localStorage para usar na próxima página
        localStorage.setItem("nome", usuarioEncontrado.nome);

        // Redirecionar para a página do formulário
        window.location.href = 'form.html';
    } else {
        alert("E-mail ou senha incorretos!");
    }
}
