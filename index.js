function verificarLogin(event) {
    event.preventDefault();

    const usuarios = [
        { nome: "teste", email: "teste@teste.com", senha: "1234" },
        { nome: "Paulo Baptista", email: "paulo@appavaliaai.com", senha: "Pb1234@" }, //SOPROS
        { nome: "Marcelo Bambam", email: "marcelo@appavaliaai.com", senha: "Mb1324#" }, //SOPROS
        { nome: "Felipe Sangali 2", email: "felipe@appavaliaai.com", senha: "Fs1432#" }, //SOPROS
        { nome: "Marco Almeida Jr", email: "marco@appavaliaai.com", senha: "Ma1325#" }, //INTERPRETAÇÃO
        { nome: "Jorge Scheffer", email: "jorge@appavaliaai.com", senha: "Js5678#" }, //INTERPRETAÇÃO
        { nome: "Hércules Alves", email: "hercules@appavaliaai.com", senha: "Ha0987#" }, //PERCUSSÃO
        { nome: "Luiz Caldana", email: "luiz@appavaliaai.com", senha: "Lc0990#" }, //PERCUSSÃO
        { nome: "Celso Ribeiro 2", email: "celso@appavaliaai.com", senha: "Cr1675#" }, //PERCUSSÃO

        { nome: "Eliane Humberg", email: "eliane@appavaliaai.com", senha: "Eh0009@" }, //UNIFORMIDADE E INSTRUMENTAL
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
        { nome: "Guilherme", email: "teste18@teste.com", senha: "1234" }, //CHECK LIST checkin

        { nome: "Checkin", email: "checkin@appavaliaai.com", senha: "Ck1234#" }, //CHECK IN
        { nome: "Cronômetro", email: "cronometro@appavaliaai.com", senha: "Cr1234#" }, //CRONOMETRO
        { nome: "Faixa Etária", email: "faixa@appavaliaai.com", senha: "Fe1234#" }, // FAIXA ETARIA
        { nome: "Checklist", email: "checklist@appavaliaai.com", senha: "Cl1234#" }, // CHECK LIST
        { nome: "Dados", email: "dados@appavaliaai.com", senha: "1234" }
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
