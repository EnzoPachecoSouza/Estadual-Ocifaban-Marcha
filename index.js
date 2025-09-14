function verificarLogin(event) {
    event.preventDefault();

    const usuarios = [
        { nome: "teste", email: "teste@teste.com", senha: "1234" },
        { nome: "Paulo Baptista", email: "paulo@appavaliaai.com", senha: "Pb1234@" }, //SOPROS
        { nome: "Marcelo Bambam", email: "marcelo@appavaliaai.com", senha: "Mb1324#" }, //SOPROS
        // { nome: "Felipe Sangali", email: "felipe@appavaliaai.com", senha: "Fs1432#" }, //SOPROS
        { nome: "Marco Almeida Jr", email: "marco@appavaliaai.com", senha: "Ma1325#" }, //INTERPRETAÇÃO
        { nome: "Jorge Scheffer", email: "jorge@appavaliaai.com", senha: "Js5678#" }, //INTERPRETAÇÃO
        { nome: "Hércules Alves", email: "hercules@appavaliaai.com", senha: "Ha0987#" }, //PERCUSSÃO
        { nome: "Luiz Caldana", email: "luiz@appavaliaai.com", senha: "Lc0990#" }, //PERCUSSÃO
        // { nome: "Celso Ribeiro", email: "celso@appavaliaai.com", senha: "Cr1675#" }, //PERCUSSÃO

        { nome: "Eliane Humberg", email: "eliane@appavaliaai.com", senha: "Eh0009@" }, //UNIFORMIDADE E INSTRUMENTAL
        { nome: "Celso Ribeiro", email: "celso@appavaliaai.com", senha: "Cr1675#" }, //COBERTURA
        { nome: "Felipe Sangali", email: "felipe@appavaliaai.com", senha: "Fs1432#" }, //GARBO
        { nome: "Antônio Carlos Schmidt", email: "schmidth@appavaliaai.com", senha: "Acs0120#" }, //MARCHA
        { nome: "Airton Moreira", email: "airton@appavaliaai.com", senha: "Am1440#" }, //ALINHAMENTO

        { nome: "Vanessa Vialta", email: "vanessa@appavaliaai.com", senha: "Vv0132@" }, //PELOTÃO CÍVICO
        { nome: "Júlia Nascimento", email: "julia@appavaliaai.com", senha: "Jn0780@" }, //BALIZA FEMININO
        { nome: "Karen Lavínia", email: "karen@appavaliaai.com", senha: "Kl3678@" }, //BALIZA MASCULINO
        { nome: "Débora Elizabeth", email: "debora@appavaliaai.com", senha: "De2043@" }, //CORPO COREOGRÁFICO - TÉCNICO
        { nome: "Eduardo Caetano", email: "eduardo@appavaliaai.com", senha: "Ec0675@" }, //CORPO COREOGRÁFICO - ARTÍSTICO
        { nome: "Theo Ribeiro", email: "theo@appavaliaai.com", senha: "Tr9806@" }, //MOR
        { nome: "Guilherme Souza", email: "guilherme@appavaliaai.com", senha: "Gs6091@" }, //CHECK LIST checkin

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
