function verificarLogin(event) {
    event.preventDefault();

    const usuarios = [
        { nome: "teste", email: "teste@teste.com", senha: "1234" },
        { nome: "Paulo Baptista", email: "teste1@teste.com", senha: "1234" }, //SOPROS
        { nome: "Marcelo Bambam", email: "teste2@teste.com", senha: "1234" }, //SOPROS
        { nome: "Felipe Sangali 2", email: "teste90@teste.com", senha: "1234" }, //SOPROS
        { nome: "Marco Almeida Jr", email: "teste3@teste.com", senha: "1234" }, //INTERPRETAÇÃO
        { nome: "Jorge Scheffer", email: "teste4@teste.com", senha: "1234" }, //INTERPRETAÇÃO
        { nome: "Hércules Alves", email: "teste5@teste.com", senha: "1234" }, //PERCUSSÃO
        { nome: "Luiz Caldana", email: "teste6@teste.com", senha: "1234" }, //PERCUSSÃO
        { nome: "Celso Ribeiro 2", email: "teste80@teste.com", senha: "1234" }, //PERCUSSÃO

        { nome: "Eliane Humberg", email: "teste7@teste.com", senha: "1234" }, //UNIFORMIDADE E INSTRUMENTAL
        { nome: "Celso Ribeiro", email: "teste8@teste.com", senha: "1234" }, //COBERTURA
        { nome: "Felipe Sangali", email: "teste9@teste.com", senha: "1234" }, //GARBO
        { nome: "Antônio Carlos Schmidt", email: "teste10@teste.com", senha: "1234" }, //MARCHA
        { nome: "Airton Moreira", email: "teste11@teste.com", senha: "1234" }, //ALINHAMENTO

        { nome: "Vanessa Vialta", email: "teste12@teste.com", senha: "1234" }, //PELOTÃO CÍVICO
        { nome: "Joseph Araújo", email: "teste13@teste.com", senha: "1234" }, //BALIZA FEMININO
        { nome: "Karen Lavínia", email: "teste14@teste.com", senha: "1234" }, //BALIZA MASCULINO
        { nome: "Débora Elizabeth", email: "teste15@teste.com", senha: "1234" }, //CORPO COREOGRÁFICO - TÉCNICO
        { nome: "Eduardo Caetano", email: "teste16@teste.com", senha: "1234" }, //CORPO COREOGRÁFICO - ARTÍSTICO
        { nome: "Theo Ribeiro", email: "teste17@teste.com", senha: "1234" }, //MOR
        { nome: "Guilherme", email: "teste18@teste.com", senha: "1234" } //CHECK LIST
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
