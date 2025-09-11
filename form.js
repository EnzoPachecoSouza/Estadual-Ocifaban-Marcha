document.addEventListener("DOMContentLoaded", function () {
    atualizarSeletorBandas();
    resetForm();
});

function getAvaliador() {
    const avaliador = localStorage.getItem("nome");
    console.log(avaliador);
    return avaliador;

}

document.getElementById("avaliador").value = getAvaliador();
document.getElementById("nomeAvaliador").innerHTML = getAvaliador();

function atualizarFormulario() {

    const avaliador = getAvaliador();
    const aspectoDiv = document.getElementById("aspecto");
    const quesitosDiv = document.getElementById("quesitos");

    aspectoDiv.innerHTML = "";
    quesitosDiv.innerHTML = "";

    let aspecto = "";
    let quesitos = [];

    console.log("atualizou");

    //-----------------------------------------------------------------------------------------------------------------
    if (avaliador === "Paulo Baptista") {
        aspecto = "Aspecto Sopros";
        quesitos = ["Afinação", "Ritmo/Precisão Rítmica", "Dinâmica/Equilíbrio", "Articulação"];
    }
    else if (avaliador === "Marcelo Bambam") {
        aspecto = "Aspecto Sopros";
        quesitos = ["Afinação", "Ritmo/Precisão Rítmica", "Dinâmica/Equilíbrio", "Articulação"];
    }
    else if (avaliador === "Felipe Sangali 2") {
        aspecto = "Aspecto Sopros";
        quesitos = ["Afinação", "Ritmo/Precisão Rítmica", "Dinâmica/Equilíbrio", "Articulação"];
    }
    else if (avaliador === "Marco Almeida Jr") {
        aspecto = "Aspecto Interpretação";
        quesitos = ["Fraseado", "Expressão", "Regência", "Escolha de Repertório"];
    }
    else if (avaliador === "Jorge Scheffer") {
        aspecto = "Aspecto Interpretação";
        quesitos = ["Fraseado", "Expressão", "Regência", "Escolha de Repertório"];
    }
    else if (avaliador === "Hércules Alves") {
        aspecto = "Aspecto Percussão";
        quesitos = ["Afinação", "Ritmo/Precisão Rítmica", "Dinâmica/Equilíbrio", "Técnica Instrumental"];
    }
    else if (avaliador === "Luiz Caldana") {
        aspecto = "Aspecto Percussão";
        quesitos = ["Afinação", "Ritmo/Precisão Rítmica", "Dinâmica/Equilíbrio", "Técnica Instrumental"];
    }

    else if (avaliador === "Celso Ribeiro 2") {
        aspecto = "Aspecto Percussão";
        quesitos = ["Afinação", "Ritmo/Precisão Rítmica", "Dinâmica/Equilíbrio", "Técnica Instrumental"];
    }
    //-----------------------------------------------------------------------------------------------------------------

    else if (avaliador === "Eliane Humberg") {
        aspecto = "Aspecto Uniformidade e Instrumental";
        quesitos = ["Uniformidade", "Instrumental"];
    }

    else if (avaliador === "Antônio Carlos Schmidt") {
        aspecto = "Aspecto Marcha";
        quesitos = ["Marcha"];
    }

    else if (avaliador === "Felipe Sangali") {
        aspecto = "Aspecto Garbo";
        quesitos = ["Garbo"];
    }

    else if (avaliador === "Airton Moreira") {
        aspecto = "Aspecto Alinhamento";
        quesitos = ["Alinhamento"];
    }

    else if (avaliador === "Celso Ribeiro") {
        aspecto = "Aspecto Cobertura";
        quesitos = ["Cobertura"];
    }

    //-----------------------------------------------------------------------------------------------------------------

    else if (avaliador === "checkin") {
        aspecto = "Aspecto Check-In";
        quesitos = ["Check-in Correto", "Horário Feito", "A corporação seguiu a ordem de apresentação?", "Maestro(a)", "CPF"];
    }

    else if (avaliador === "Daniel Borges") {
        aspecto = "Aspecto Cronômetro";
        quesitos = ["Tempo de Apresentação", "Estourou o Tempo?", "", "Maestro(a)", "CPF"];
    }

    else if (avaliador === "etaria") {
        aspecto = "Aspecto Faixa Etária";
        quesitos = ["Componentes do Corpo Musical (Total)", "Quantidade acima da idade", "Máximo de 5%", "Componentes da Linha de Frente (Total)", "Quantidade acima da idade", "Máximo de 5%", "Componentes do Corpo Coreográfico", "Maestro(a)", "CPF"];
    }

    else if (avaliador === "checklist") {
        aspecto = "Aspecto Check List";
        quesitos = [
            "A Corporação se posicionou 30 minutos antes de sua apresentação?",
            "A Corporação está na Ordem de Apresentação?",
            "A Corporação possui Brasão, Faixa ou Estandarte? ",
            "O Corpo Coreográfico possui 8 componentes ou mais?",
            "O Regente está em traje social?",
            "O Instrumental está dentro do esperado na categoria? (BANDA MUSICAL art. 8º)",
            "A Percussão esta menor que 50 %? ",
        ];
    }

    //CHECKLIST DE LINHA DE FRENTE
    else if (avaliador === "Guilherme") {
        aspecto = "Aspecto Check List Linha de Frente";
        quesitos = [
            "O número de intregrantes da Linha de Frente está dentro do especificado?",
            "A uniformidade dos integrantes da Linha de Frente está guardando as cores da Corporação Musical?",
            "O Corpo Coreográfico está com o número mínimo de componentes exigido? ",
            "A Corporação possui Estandarte, Faixa ou Distintivo?",
            "A Corporação possui Pavilhão Nacional?",
            "As Guardas de Bandeira estão em ordem?"
        ];
    }

    //-----------------------------------------------------------------------------------------------------------------

    else if (avaliador === "Vanessa Vialta") {
        aspecto = "Aspecto Pelotão Cívico";
        quesitos = ["Uniformidade", "Marcha", "Garbo", "Alinhamento/Cobertura", "Deslocamento", "Conversão/Posicionamento"];
    }

    else if (avaliador === "Eduardo Caetano") {
        aspecto = "Aspecto Artístico";
        quesitos = ["Entrada", "Composição Coreográfica", "Evolução", "Formação", "Expressão e Garbo"];
    }

    else if (avaliador === "Débora Elizabeth") {
        aspecto = "Aspecto Técnico";
        quesitos = ["Sincronismo", "Ritmo", "Marcha", "Uniformidade", "Execução Coreográfica"];
    }

    else if (avaliador === "Joseph Araújo" || avaliador === "Karen Lavínia") {
        aspecto = "Aspecto Baliza";
        quesitos = ["Manuseio do Bastão", "Performance de Entrada", "Coreografia", "Dança", "Movimentos Acrobáticos", "Elementos", "Uniforme"];
    }

    else if (avaliador === "Theo Ribeiro") {
        aspecto = "Aspecto Mor";
        quesitos = ["Comando de Batão/Mace/Espada", "Comando de Voz/Apito", "Condução da Corporação", "Marcha", "Garbo", "Uniformidade"];
    }

    //---------------------------------------------------------------------------------------------------------------------

    if (aspecto === "Aspecto Sopros" || aspecto === "Aspecto Interpretação" || aspecto === "Aspecto Percussão") {
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;
        quesitos.forEach((q, index) => {
            quesitosDiv.innerHTML += `
                <label for="quesito${index + 1}">${q}:</label>
                <input type="number" step="0.2" id="quesito${index + 1}" name="quesito${index + 1}" min="0" max="10" placeholder="De 0,00 até 10,00" required><br>
            `;
        });
    }

    if (aspecto === "Aspecto Técnico" || aspecto === "Aspecto Artístico") {
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;

        // Quesito 1: SELECT Existente/Inexistente
        quesitosDiv.innerHTML += `
        <label for="quesito1">Corpo Coreográfico</label>
        <select id="quesito1" name="quesito1" onchange="handleTecArtExistenteChange()" required>
            <option value="">Selecione</option>
            <option value="Existente">Existente</option>
            <option value="Inexistente">Inexistente</option>
        </select><br>
    `;

        // Demais quesitos numéricos começam no quesito2
        quesitos.forEach((q, i) => {
            const idx = i + 2; // 2..n
            quesitosDiv.innerHTML += `
            <label for="quesito${idx}">${q}:</label>
            <input type="number" step="0.2" id="quesito${idx}" name="quesito${idx}"
                   min="0" max="10" placeholder="De 0,00 até 10,00" required><br>
        `;
        });
    }

    if (aspecto === "Aspecto Mor") {
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;

        // Quesito 1: SELECT Existente/Inexistente
        quesitosDiv.innerHTML += `
        <label for="quesito1">Mor</label>
        <select id="quesito1" name="quesito1" onchange="handleMorExistenteChange()" required>
            <option value="">Selecione</option>
            <option value="Existente">Existente</option>
            <option value="Inexistente">Inexistente</option>
        </select><br>
    `;

        // Demais quesitos numéricos começam no quesito2
        quesitos.forEach((q, i) => {
            const idx = i + 2; // 2..n
            quesitosDiv.innerHTML += `
            <label for="quesito${idx}">${q}:</label>
            <input type="number" step="0.2" id="quesito${idx}" name="quesito${idx}"
                   min="0" max="10" placeholder="De 0,00 até 10,00" required><br>
        `;
        });
    }




    if (aspecto === "Aspecto Baliza") {
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;

        // Quesito 1: SELECT Baliza
        quesitosDiv.innerHTML += `
        <label for="quesito1">Baliza:</label>
        <select id="quesito1" name="quesito1" onchange="handleBalizaTipoChange()" required>
            <option value="">Selecione</option>
            <option value="Feminina">Feminina</option>
            <option value="Masculino">Masculino</option>
            <option value="Trans">Trans</option>
            <option value="Inexistente">Inexistente</option>
        </select><br>
    `;

        // Demais quesitos: começam no quesito2
        quesitos.forEach((q, i) => {
            const idx = i + 2; // começa no 2
            quesitosDiv.innerHTML += `
            <label for="quesito${idx}">${q}:</label>
            <input type="number" step="0.2" id="quesito${idx}" name="quesito${idx}"
                   min="0" max="10" placeholder="De 0,00 até 10,00" required><br>
        `;
        });
    }


    //----------------------------------------------------------------------------------------------------------------

    else if (avaliador === "Airton Moreira") {
        aspecto = "Aspecto Alinhamento";
        quesitosDiv.innerHTML = `
    <div class="input-grid-config">
        <label for="colunas">Frente</label>
        <input class="input-pista" type="number" id="linhas" min="1" style="width: 60px;" />

        <label for="linhas">Lateral</label>
        <input class="input-pista" type="number" id="colunas" min="1" style="width: 60px;" />
    </div>

    <button type="button" onclick="renderAlinhamentoGrid()">Gerar Formação</button>

    <div class="quadrantes">
        <div class="quadrante">
            <h3>Alinhamento</h3>
            <div class="nota-container">
                <div class="nota-display" id="notaAlinhamento">10.00</div>
            </div>
            <div class="grid-checkboxes" id="alinhamento-grid"></div>
            <div class="erros-container">
                <label>ERROS</label>
                <div class="controle-erros">
                    <span class="contador" id="alinhamento-erros">0</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Campo oculto -->
    <input type="hidden" id="inputAlinhamento" name="quesito1" value="10.00">
    `;
    }

    //----------------------------------------------------------------------------------------------------------------

    else if (avaliador === "Celso Ribeiro") {
        aspecto = "Aspecto Cobertura";
        quesitosDiv.innerHTML = `
    <div class="input-grid-config">
        <label for="colunas">Frente</label>
        <input class="input-pista" type="number" id="linhas" min="1" style="width: 60px;" />

        <label for="linhas">Lateral</label>
        <input class="input-pista" type="number" id="colunas" min="1" style="width: 60px;" />
    </div>

    <button type="button" onclick="renderCoberturaGrid()">Gerar Formação</button>

    <div class="quadrantes">
        <div class="quadrante">
            <h3>Cobertura</h3>
            <div class="nota-container">
                <div class="nota-display" id="notaCobertura">10.00</div>
            </div>
            <div class="grid-checkboxes" id="cobertura-grid"></div>
            <div class="erros-container">
                <label>ERROS</label>
                <div class="controle-erros">
                    <span class="contador" id="cobertura-erros">0</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Campo oculto -->
    <input type="hidden" id="inputCobertura" name="quesito1" value="10.00">
    `;
    }

    //---------------------------------------------------------------------------------------------------------------------

    else if (avaliador === "Eliane Humberg") {
        aspecto = "Aspecto Uniformidade e Instrumental";
        quesitosDiv.innerHTML = `
    <div class="input-grid-config">
        <label for="colunas">Frente</label>
        <input class="input-pista" type="number" id="linhas" min="1" style="width: 60px;" />

        <label for="linhas">Lateral</label>
        <input class="input-pista" type="number" id="colunas" min="1" style="width: 60px;" />
    </div>

    <button type="button" onclick="renderUniformidadeInstrumentalGrid()">Gerar Formação</button>

    <div class="quadrantes">
        <div class="quadrante">
            <h3>Uniformidade</h3>
            <div class="nota-container">
                <div class="nota-display" id="notaUniformidade">10.00</div>
            </div>
            <div class="grid-checkboxes" id="uniformidade-grid"></div>
            <div class="erros-container">
                <label>ERROS</label>
                <div class="controle-erros">
                    <span class="contador" id="uniformidade-erros">0</span>
                </div>
            </div>
        </div>

        <div class="quadrante">
            <h3>Instrumental</h3>
            <div class="nota-container">
                <div class="nota-display" id="notaInstrumental">10.00</div>
            </div>
            <div class="grid-checkboxes" id="instrumental-grid"></div>
            <div class="erros-container">
                <label>ERROS</label>
                <div class="controle-erros">
                    <span class="contador" id="instrumental-erros">0</span>
                </div>
            </div>
        </div>
    </div>

    <!-- Campos ocultos para envio do formulário -->
    <input type="hidden" id="inputUniformidade" name="quesito1" value="10.00">
    <input type="hidden" id="inputInstrumental" name="quesito2" value="10.00">
    `;
    }
    //--------------------------------------------------------------------------------

    // else if (avaliador === "Antônio Carlos Schmidt") {
    //     aspecto = "Aspecto Garbo e Marcha";
    //     quesitosDiv.innerHTML = `
    //     <div class="input-grid-config">
    //         <label for="colunas">Frente</label>
    //         <input class="input-pista" type="number" id="linhas" min="1" style="width: 60px;" />
    //         <label for="linhas">Lateral</label>
    //         <input class="input-pista" type="number" id="colunas" min="1" style="width: 60px;" />

    //     </div>

    //     <button type="button" onclick="renderMarchaGarboGrid()">Gerar Formação</button>

    //     <div class="quadrantes">
    //      <div class="quadrante">
    //             <h3>Marcha</h3>
    //             <div class="nota-container">
    //                 <div class="nota-display" id="notaMarcha">10.00</div>
    //             </div>
    //             <div class="grid-checkboxes" id="marcha-grid"></div>
    //             <div class="erros-container">
    //                 <label>ERROS</label>
    //                 <div class="controle-erros">
    //                     <span class="contador" id="marcha-erros">0</span>
    //                 </div>
    //             </div>
    //         </div>

    //         <div class="quadrante">
    //             <h3>Garbo</h3>
    //             <div class="nota-container">
    //                 <div class="nota-display" id="notaGarbo">10.00</div>
    //             </div>
    //             <div class="grid-checkboxes" id="garbo-grid"></div>
    //             <div class="erros-container">
    //                 <label>ERROS</label>
    //                 <div class="controle-erros">
    //                     <span class="contador" id="garbo-erros">0</span>
    //                 </div>
    //             </div>
    //         </div>  
    //     </div>

    //     <!-- Campos ocultos para envio do formulário -->
    //     <input type="hidden" id="inputGarbo" name="quesito1" value="10.00">
    //     <input type="hidden" id="inputMarcha" name="quesito2" value="10.00">

    //     <div id="baliza-sexo-container">
    //     <h3>Rompimento de Marcha
    //     <br>
    //     (conforme art. 26º)</h3>
    //     <select id="verificaRompimento" name="verificaRompimento" required>
    //         <option value="">Selecione</option>
    //         <option value="Valido">Válido</option>
    //         <option value="Invalido">Inválido</option>
    //     </select>
    //     </div>
    // `;
    // }

    else if (avaliador === "Antônio Carlos Schmidt") {
        aspecto = "Aspecto Marcha";
        quesitosDiv.innerHTML = `
        <div class="input-grid-config">
            <label for="colunas">Frente</label>
            <input class="input-pista" type="number" id="linhas" min="1" style="width: 60px;" />
            <label for="linhas">Lateral</label>
            <input class="input-pista" type="number" id="colunas" min="1" style="width: 60px;" />
            
        </div>

        <button type="button" onclick="renderMarchaGrid()">Gerar Formação</button>

        <div class="quadrantes">
         <div class="quadrante">
                <h3>Marcha</h3>
                <div class="nota-container">
                    <div class="nota-display" id="notaMarcha">10.00</div>
                </div>
                <div class="grid-checkboxes" id="marcha-grid"></div>
                <div class="erros-container">
                    <label>ERROS</label>
                    <div class="controle-erros">
                        <span class="contador" id="marcha-erros">0</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- Campos ocultos para envio do formulário -->
        <input type="hidden" id="inputMarcha" name="quesito2" value="10.00">

        <div id="baliza-sexo-container">
        <h3>Rompimento de Marcha
        <br>
        (conforme art. 26º)</h3>
        <select id="verificaRompimento" name="verificaRompimento" required>
            <option value="">Selecione</option>
            <option value="Valido">Válido</option>
            <option value="Invalido">Inválido</option>
        </select>
        </div>
    `;
    }

    else if (avaliador === "Felipe Sangali") {
        aspecto = "Aspecto Garbo";
        quesitosDiv.innerHTML = `
        <div class="input-grid-config">
            <label for="colunas">Frente</label>
            <input class="input-pista" type="number" id="linhas" min="1" style="width: 60px;" />
            <label for="linhas">Lateral</label>
            <input class="input-pista" type="number" id="colunas" min="1" style="width: 60px;" />
            
        </div>

        <button type="button" onclick="renderGarboGrid()">Gerar Formação</button>

        <div class="quadrantes">
            <div class="quadrante">
                <h3>Garbo</h3>
                <div class="nota-container">
                    <div class="nota-display" id="notaGarbo">10.00</div>
                </div>
                <div class="grid-checkboxes" id="garbo-grid"></div>
                <div class="erros-container">
                    <label>ERROS</label>
                    <div class="controle-erros">
                        <span class="contador" id="garbo-erros">0</span>
                    </div>
                </div>
            </div>  
        </div>

        <!-- Campos ocultos para envio do formulário -->
        <input type="hidden" id="inputGarbo" name="quesito1" value="10.00">
        </div>
    `;
    }

    //---------------------------------------------------------------------------------------------------------------------

    else if (aspecto === "Aspecto Check-In") {
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;
        quesitos.forEach((q, index) => {
            if (index === 0) { // Para o primeiro quesito (Check-in Correto)
                quesitosDiv.innerHTML += `
                <label for="quesito${index + 1}">${q}:</label>
                <select id="quesito${index + 1}" name="quesito${index + 1}" required>
                    <option value="">Selecione</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select><br>
            `;
            } else if (index === 1) {// Para os outros quesitos
                let placeholderText = index === 1 ? "Exemplo: 11:40" : "";
                quesitosDiv.innerHTML += `
                <label for="quesito${index + 1}">${q}:</label>
                <input type="time" id="quesito${index + 1}" name="quesito${index + 1}" min="00:00" placeholder="${placeholderText}" required><br>
            `;
            } else if (index === 2) { // Para o primeiro quesito (Check-in Correto)
                quesitosDiv.innerHTML += `
                <label for="quesito${index + 1}">${q}</label>
                <select id="quesito${index + 1}" name="quesito${index + 1}" required>
                    <option value="">Selecione</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select><br>
            `;
            } else {
                quesitosDiv.innerHTML += `
                <label for="quesito${index + 1}">${q}:</label>
                <input type="text" id="quesito${index + 1}" name="quesito${index + 1}" required><br>
            `;
            }
        });
    }
    else if (aspecto === "Aspecto Cronômetro") {
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;
        quesitosDiv.innerHTML = `
            <label for="quesito1">${quesitos[0]}:</label>
            <input type="text" id="quesito1" name="quesito1" min="00:00" required><br>
            
            <label for="quesito2">${quesitos[1]}:</label>
            <select id="quesito2" name="quesito2" required onchange="verificarEstouro()">
                <option value="">Selecione</option>
                <option value="Sim">Sim</option>
                <option value="Não">Não</option>
            </select><br>
    
            <div id="campoEstouro" style="display: none;">
                <label for="quesito3">Quanto tempo estourou?</label>
                <input type="text" id="quesito3" name="quesito3" min="00:00" disabled><br>
            </div>

            <label for="quesito1">${quesitos[3]}:</label>
            <input type="text" id="quesito4" name="quesito4 "required><br>

            <label for="quesito1">${quesitos[4]}:</label>
            <input type="text" id="quesito5" name="quesito5" required><br>
        `;
    } else if (avaliador === "etaria") {
        aspecto = "Aspecto Faixa Etária";
        quesitos = [
            "Componentes do Corpo Musical (Total)", // campo numérico
            "Quantidade acima da idade",            // campo numérico
            "Máximo de 5%",                         // campo calculado (desabilitado)
            "Componentes da Linha de Frente (Total)",// campo numérico
            "Quantidade acima da idade",            // campo numérico
            "Máximo de 5%",                         // campo calculado (desabilitado)
            "Componentes do Corpo Coreográfico",    // campo numérico
            "Maestro(a)",                           // campo texto
            "CPF"                                    // campo texto
        ];

        quesitosDiv.innerHTML = `
        <div id="aspecto-faixa-etaria">
            <h3>${aspecto}</h3>
        </div>
        <div class="faixa-etaria-container">
            ${quesitos.map((quesito, index) => criarCampoFaixaEtaria(quesito, index)).join('')}
        </div>
    `;
    }
    else if (aspecto === "Aspecto Check List") {
        //lógica do aspecto check list
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;
        quesitos.forEach((q, index) => {
            // Para o primeiro quesito (Check-in Correto)
            quesitosDiv.innerHTML += `
                <label class="label-checkList" for="quesito${index + 1}">${q}</label>
                <select id="quesito${index + 1}" name="quesito${index + 1}" required>
                    <option value="">Selecione</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select><br>
            `;
        })
    } 
    else if (aspecto === "Aspecto Check List Linha de Frente") {
        //lógica do aspecto check list
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;
        quesitos.forEach((q, index) => {
            // Para o primeiro quesito (Check-in Correto)
            quesitosDiv.innerHTML += `
                <label class="label-checkList" for="quesito${index + 1}">${q}</label>
                <select id="quesito${index + 1}" name="quesito${index + 1}" required>
                    <option value="">Selecione</option>
                    <option value="Sim">Sim</option>
                    <option value="Não">Não</option>
                </select><br>
            `;
        })
    }
    else if (aspecto === "Dados de Apresentação") {
        //lógica do aspecto Dados de Apresentação
        aspectoDiv.innerHTML = `<h3>${aspecto}</h3>`;
        quesitos.forEach((q, index) => {
            if (index === 2 || index === 3 || index === 4) { // Para o segundo quesito (não obrigatório)
                quesitosDiv.innerHTML += `
                <label for="quesito${index + 1}">${q}:</label>
                <input type="text" id="quesito${index + 1}" name="quesito${index + 1}"><br>

            `;
            } else { // Para os outros quesitos
                quesitosDiv.innerHTML += `
                <label for="quesito${index + 1}">${q}:</label>
                <input type="text" id="quesito${index + 1}" name="quesito${index + 1}" required><br>
            `;
            }
        });
    }
}


//-----------------------------------------------------------------------------------------------------------
function renderAlinhamentoGrid() {
    const colunas = parseInt(document.getElementById('linhas').value);
    const linhas = parseInt(document.getElementById('colunas').value);

    if (isNaN(linhas) || isNaN(colunas) || linhas <= 0 || colunas <= 0) {
        alert('Informe um número válido de linhas e colunas.');
        return;
    }

    document.getElementById('alinhamento-erros').innerText = '0';
    gerarGrid('alinhamento', linhas, colunas);
}

function renderCoberturaGrid() {
    const colunas = parseInt(document.getElementById('linhas').value);
    const linhas = parseInt(document.getElementById('colunas').value);

    if (isNaN(linhas) || isNaN(colunas) || linhas <= 0 || colunas <= 0) {
        alert('Informe um número válido de linhas e colunas.');
        return;
    }

    document.getElementById('cobertura-erros').innerText = '0';
    gerarGrid('cobertura', linhas, colunas);
}

function renderUniformidadeInstrumentalGrid() {
    const colunas = parseInt(document.getElementById('linhas').value);
    const linhas = parseInt(document.getElementById('colunas').value);

    if (isNaN(linhas) || isNaN(colunas) || linhas <= 0 || colunas <= 0) {
        alert('Informe um número válido de linhas e colunas.');
        return;
    }

    document.getElementById('uniformidade-erros').innerText = '0';
    document.getElementById('instrumental-erros').innerText = '0';

    gerarGrid('uniformidade', linhas, colunas);
    gerarGrid('instrumental', linhas, colunas);
}

function renderMarchaGrid() {
    const colunas = parseInt(document.getElementById('linhas').value);
    const linhas = parseInt(document.getElementById('colunas').value);

    if (isNaN(linhas) || isNaN(colunas) || linhas <= 0 || colunas <= 0) {
        alert('Informe um número válido de linhas e colunas.');
        return;
    }

    document.getElementById('marcha-erros').innerText = '0';

    gerarGrid('marcha', linhas, colunas);
}

function renderGarboGrid() {
    const colunas = parseInt(document.getElementById('linhas').value);
    const linhas = parseInt(document.getElementById('colunas').value);

    if (isNaN(linhas) || isNaN(colunas) || linhas <= 0 || colunas <= 0) {
        alert('Informe um número válido de linhas e colunas.');
        return;
    }

    document.getElementById('garbo-erros').innerText = '0';

    gerarGrid('garbo', linhas, colunas);
}
//-----------------------------------------------------------------------------------------------------------




function toggleHole(checkbox, tipo) {
    // const cell = checkbox.parentElement;
    // const isHole = checkbox.dataset.hole === "true";
    // if (isHole) {
    //     checkbox.dataset.hole = "false";
    //     cell.classList.remove("hole");
    // } else {
    //     checkbox.dataset.hole = "true";
    //     checkbox.checked = false; // buraco nunca conta erro
    //     cell.classList.add("hole");
    // }
    // contarSelecionados(tipo); // recalc nota/erros

    const cell = checkbox.parentElement;
    const isHole = checkbox.dataset.hole === "true";

    if (isHole) {
        // saindo do buraco → volta a ser normal (vazio)
        checkbox.dataset.hole = "false";
        cell.classList.remove("hole");
        checkbox.checked = false;    // garante vazio
    } else {
        // entrando em buraco → nunca conta erro
        checkbox.dataset.hole = "true";
        cell.classList.add("hole");
        checkbox.checked = false;    // garante vazio
    }

    contarSelecionados(tipo);      // recalcula nota/erros na hora
}





function gerarGrid(tipo, linhas, colunas) {
    // const gridContainer = document.getElementById(`${tipo}-grid`);
    // gridContainer.innerHTML = '';

    // for (let i = 0; i < linhas; i++) {
    //     const row = document.createElement('div');
    //     row.style.display = 'flex';
    //     row.style.marginBottom = '5px';

    //     for (let j = 0; j < colunas; j++) {
    //         const checkbox = document.createElement('input');
    //         checkbox.type = 'checkbox';
    //         checkbox.style.marginRight = '5px';
    //         checkbox.addEventListener('change', () => { // 'change' detecta marcar ou desmarcar
    //             contarSelecionados(tipo);
    //         });

    //         row.appendChild(checkbox);
    //     }

    //     gridContainer.appendChild(row);
    // }
    const gridContainer = document.getElementById(`${tipo}-grid`);
    gridContainer.innerHTML = '';

    for (let i = 0; i < linhas; i++) {
        const row = document.createElement('div');
        row.className = 'grid-row';

        for (let j = 0; j < colunas; j++) {
            const cell = document.createElement('span');
            cell.className = 'cell';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.dataset.hole = 'false'; // padrão: avaliável

            // --- suporte a long-press (mobile) ---
            let pressTimer = null;
            let suppressNextClick = false;

            const startPress = () => {
                clearTimeout(pressTimer);
                pressTimer = setTimeout(() => {
                    suppressNextClick = true;   // evita o clique normal depois do long-press
                    toggleHole(checkbox, tipo); // marca buraco
                }, 500);
            };
            const endPress = () => clearTimeout(pressTimer);

            cell.addEventListener('pointerdown', startPress);
            cell.addEventListener('pointerup', endPress);
            cell.addEventListener('pointerleave', endPress);
            cell.addEventListener('pointercancel', endPress);

            // --- CLICK: único handler ---
            checkbox.addEventListener('click', (e) => {
                if (suppressNextClick) {
                    e.preventDefault();
                    suppressNextClick = false;
                    return;
                }
                if (e.shiftKey) {             // desktop: Shift+clique = buraco
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    toggleHole(checkbox, tipo);
                    return;
                }
                if (checkbox.dataset.hole === 'true') {
                    // clicar no buraco apenas remove o buraco; não vira “erro”
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    toggleHole(checkbox, tipo);
                    return;
                }
                // clique normal segue (marca/desmarca erro)
            });

            // --- CHANGE: ignore mudanças vindas do toggleHole e de buraco ---
            checkbox.addEventListener('change', () => {
                // se for buraco, nunca conta erro
                if (checkbox.dataset.hole === 'true') return;
                contarSelecionados(tipo);
            });



            cell.appendChild(checkbox);
            row.appendChild(cell);
        }

        gridContainer.appendChild(row);
    }

    contarSelecionados(tipo); // zera contagem ao criar
}

function contarSelecionados(tipo) {
    // const checkboxes = document.querySelectorAll(`#${tipo}-grid input[type="checkbox"]`);
    // let selecionados = 0;

    // checkboxes.forEach(checkbox => {
    //     if (checkbox.checked) {
    //         selecionados++;
    //     }
    // });

    // // Atualiza quantidade de erros
    // document.getElementById(`${tipo}-erros`).innerText = selecionados;

    // // Calcula a nota: 5 - (0.10 * quantidade de erros)
    // let nota = 10 - (selecionados * 0.10);
    // if (nota < 0) nota = 0;

    // // Atualiza a nota visualmente
    // if (tipo === 'garbo') {
    //     document.getElementById('notaGarbo').innerText = nota.toFixed(2);
    //     document.getElementById('inputGarbo').value = nota.toFixed(2); // Atualiza o campo oculto
    // } else if (tipo === 'marcha') {
    //     document.getElementById('notaMarcha').innerText = nota.toFixed(2);
    //     document.getElementById('inputMarcha').value = nota.toFixed(2); // Atualiza o campo oculto
    // } else if (tipo === 'alinhamento') {
    //     document.getElementById('notaAlinhamento').innerText = nota.toFixed(2);
    //     document.getElementById('inputAlinhamento').value = nota.toFixed(2); // Atualiza o campo oculto
    // } else if (tipo === 'cobertura') {
    //     document.getElementById('notaCobertura').innerText = nota.toFixed(2);
    //     document.getElementById('inputCobertura').value = nota.toFixed(2); // Atualiza o campo oculto
    // } else if (tipo === 'uniformidade') {
    //     document.getElementById('notaUniformidade').innerText = nota.toFixed(2);
    //     document.getElementById('inputUniformidade').value = nota.toFixed(2);
    // } else if (tipo === 'instrumental') {
    //     document.getElementById('notaInstrumental').innerText = nota.toFixed(2);
    //     document.getElementById('inputInstrumental').value = nota.toFixed(2);
    // }


    // // Desabilita checkboxes se a nota chegar a 5
    // checkboxes.forEach(checkbox => {
    //     if (!checkbox.checked) {
    //         checkbox.disabled = nota <= 0;
    //     }
    // });
    const checkboxes = document.querySelectorAll(`#${tipo}-grid input[type="checkbox"]`);
    let selecionados = 0;

    checkboxes.forEach(checkbox => {
        if (checkbox.checked && checkbox.dataset.hole !== "true") {
            selecionados++;
        }
    });

    document.getElementById(`${tipo}-erros`).innerText = selecionados;

    let nota = 10 - (selecionados * 0.10);
    if (nota < 0) nota = 0;

    if (tipo === 'garbo') {
        document.getElementById('notaGarbo').innerText = nota.toFixed(2);
        document.getElementById('inputGarbo').value = nota.toFixed(2);
    } else if (tipo === 'marcha') {
        document.getElementById('notaMarcha').innerText = nota.toFixed(2);
        document.getElementById('inputMarcha').value = nota.toFixed(2);
    } else if (tipo === 'alinhamento') {
        document.getElementById('notaAlinhamento').innerText = nota.toFixed(2);
        document.getElementById('inputAlinhamento').value = nota.toFixed(2);
    } else if (tipo === 'cobertura') {
        document.getElementById('notaCobertura').innerText = nota.toFixed(2);
        document.getElementById('inputCobertura').value = nota.toFixed(2);
    } else if (tipo === 'uniformidade') {
        document.getElementById('notaUniformidade').innerText = nota.toFixed(2);
        document.getElementById('inputUniformidade').value = nota.toFixed(2);
    } else if (tipo === 'instrumental') {
        document.getElementById('notaInstrumental').innerText = nota.toFixed(2);
        document.getElementById('inputInstrumental').value = nota.toFixed(2);
    }

    // desabilita só os não-buracos quando a nota zerar
    // checkboxes.forEach(checkbox => {
    //     if (checkbox.dataset.hole === "true") {
    //         checkbox.disabled = false; // buracos sempre podem ser desmarcados
    //     } else {
    //         checkbox.disabled = (!checkbox.checked && nota <= 0);
    //     }
    // });
    // ✅ soma apenas marcados que NÃO são buraco
    checkboxes.forEach(checkbox => {
        if (checkbox.checked && checkbox.dataset.hole !== "true") {
            selecionados++;
        }
    });
}

function handleBalizaTipoChange() {
    const tipo = document.getElementById("quesito1").value; // Feminina, Masculino, Trans, Inexistente
    // Seleciona só os inputs numéricos deste aspecto (quesito2+)
    const inputsNumericos = Array.from(document.querySelectorAll('#quesitos input[type="number"][id^="quesito"]'))
        .filter(inp => {
            const n = parseInt(inp.id.replace("quesito", ""), 10);
            return !isNaN(n) && n >= 2;
        });

    if (tipo === "Inexistente") {
        // Zera e desabilita
        inputsNumericos.forEach(inp => {
            inp.value = "0.00";
            inp.disabled = true;
            inp.classList.add("disabled");
        });
    } else if (tipo === "Feminina" || tipo === "Masculino" || tipo === "Trans") {
        // Habilita normalmente
        inputsNumericos.forEach(inp => {
            inp.disabled = false;
            inp.classList.remove("disabled");
            // não mexe no valor; o avaliador preenche
        });
    } else {
        // Sem seleção: habilita, mas limpa os valores para evitar confusão
        inputsNumericos.forEach(inp => {
            inp.disabled = false;
            inp.classList.remove("disabled");
            inp.value = "";
        });
    }
}

function handleTecArtExistenteChange() {
    const valor = document.getElementById("quesito1").value; // Existente | Inexistente
    const inputsNumericos = Array.from(
        document.querySelectorAll('#quesitos input[type="number"][id^="quesito"]')
    ).filter(inp => {
        const n = parseInt(inp.id.replace("quesito", ""), 10);
        return !isNaN(n) && n >= 2; // só quesito2+
    });

    if (valor === "Inexistente") {
        inputsNumericos.forEach(inp => {
            inp.value = "0.00";
            inp.disabled = true;
            inp.classList.add("disabled");
        });
    } else if (valor === "Existente") {
        inputsNumericos.forEach(inp => {
            inp.disabled = false;
            inp.classList.remove("disabled");
        });
    } else {
        inputsNumericos.forEach(inp => {
            inp.disabled = false;
            inp.classList.remove("disabled");
            inp.value = "";
        });
    }
}

function handleMorExistenteChange() {
    const valor = document.getElementById("quesito1").value; // Existente | Inexistente
    const inputsNumericos = Array.from(
        document.querySelectorAll('#quesitos input[type="number"][id^="quesito"]')
    ).filter(inp => {
        const n = parseInt(inp.id.replace("quesito", ""), 10);
        return !isNaN(n) && n >= 2; // só quesito2+
    });

    if (valor === "Inexistente") {
        inputsNumericos.forEach(inp => {
            inp.value = "0.00";
            inp.disabled = true;
            inp.classList.add("disabled");
        });
    } else if (valor === "Existente") {
        inputsNumericos.forEach(inp => {
            inp.disabled = false;
            inp.classList.remove("disabled");
        });
    } else {
        inputsNumericos.forEach(inp => {
            inp.disabled = false;
            inp.classList.remove("disabled");
            inp.value = "";
        });
    }
}
 



function resetarAlinhamento() {
    document.getElementById('notaAlinhamento').innerText = '10.00';
    document.getElementById('inputAlinhamento').value = '10.00';
    document.getElementById('alinhamento-erros').innerText = '0';
    document.getElementById('alinhamento-grid').innerHTML = '';
}

function resetarCobertura() {
    document.getElementById('notaCobertura').innerText = '10.00';
    document.getElementById('inputCobertura').value = '10.00';
    document.getElementById('cobertura-erros').innerText = '0';
    document.getElementById('cobertura-grid').innerHTML = '';
}

function resetarUniformidadeInstrumental() {
    // Resetar campos visuais e ocultos para Alinhamento
    document.getElementById('notaUniformidade').innerText = '10.00';
    document.getElementById('inputUniformidade').value = '10.00';
    document.getElementById('uniformidade-erros').innerText = '0';
    document.getElementById('uniformidade-grid').innerHTML = '';

    // Resetar campos visuais e ocultos para Marcha
    document.getElementById('notaInstrumental').innerText = '10.00';
    document.getElementById('inputInstrumental').value = '10.00';
    document.getElementById('instrumental-erros').innerText = '0';
    document.getElementById('instrumental-grid').innerHTML = '';
}

function resetarMarcha() {
    // Resetar campos visuais e ocultos para Alinhamento
    document.getElementById('notaMarcha').innerText = '10.00';
    document.getElementById('inputMarcha').value = '10.00';
    document.getElementById('marcha-erros').innerText = '0';
    document.getElementById('marcha-grid').innerHTML = '';
}

function resetarGarbo() {
    // Resetar campos visuais e ocultos para Marcha
    document.getElementById('notaGarbo').innerText = '10.00';
    document.getElementById('inputGarbo').value = '10.00';
    document.getElementById('garbo-erros').innerText = '0';
    document.getElementById('garbo-grid').innerHTML = '';
}
//-------------------------------------------------------------------------------------------

function criarCampoFaixaEtaria(quesito, index) {
    const idFormatado = `faixa${index}`;
    let inputType = "number";
    let readOnly = "";

    // Definir o tipo de input
    if (quesito === "Maestro(a)" || quesito === "CPF") {
        inputType = "text";
    }

    if (quesito === "Máximo de 5%") {
        readOnly = "readonly";
        inputType = "text"; // Aqui é o ajuste importante
    }


    return `
        <div class="campo-faixa-etaria">
            <label for="${idFormatado}">${quesito}</label>
            <input 
                type="${inputType}" 
                id="${idFormatado}" 
                name="quesito${index + 1}" 
                value="${quesito === 'Máximo de 5%' ? '0%' : ''}"
                ${readOnly}
                oninput="validarFaixaEtaria(${index})"
            >
        </div>
    `;
}


function validarFaixaEtaria(index) {
    const totalCorpoMusical = parseInt(document.getElementById('faixa0').value) || 0;
    const acimaCorpoMusical = parseInt(document.getElementById('faixa1').value) || 0;

    const totalLinhaFrente = parseInt(document.getElementById('faixa3').value) || 0;
    const acimaLinhaFrente = parseInt(document.getElementById('faixa4').value) || 0;

    // Não permitir números negativos
    const campo = document.getElementById(`faixa${index}`);
    if (campo.type === "number" && parseInt(campo.value) < 0) {
        campo.value = 0;
    }

    // Cálculo para Corpo Musical
    if (index === 0 || index === 1) {
        calcularPorcentagem(
            totalCorpoMusical,
            acimaCorpoMusical,
            'faixa2' // campo "Máximo de 5%" Corpo Musical
        );
    }

    // Cálculo para Linha de Frente
    if (index === 3 || index === 4) {
        calcularPorcentagem(
            totalLinhaFrente,
            acimaLinhaFrente,
            'faixa5' // campo "Máximo de 5%" Linha de Frente
        );
    }
}

function calcularPorcentagem(total, acimaIdade, campoResultadoId) {
    const campoResultado = document.getElementById(campoResultadoId);

    if (total === 0) {
        campoResultado.value = "0%";
        campoResultado.style.backgroundColor = ""; // limpa o alerta
        return;
    }

    const porcentagem = ((acimaIdade / total) * 100).toFixed(2);
    campoResultado.value = `${porcentagem}%`;

    if (porcentagem > 5) {
        campoResultado.style.backgroundColor = "red";
        campoResultado.style.color = "white";
    } else {
        campoResultado.style.backgroundColor = "";
        campoResultado.style.color = "";
    }
}


//-------------------------------------------------------------------------------------------

function alterarErro(tipo, alteracao) {
    // Capitaliza a primeira letra para combinar com os IDs
    const tipoCapitalizado = tipo.charAt(0).toUpperCase() + tipo.slice(1);
    const elementoErros = document.getElementById(`erros${tipoCapitalizado}`);
    let erros = parseInt(elementoErros.textContent);

    // Calcula o novo valor
    let novoValor = erros + alteracao;

    // Aplica limites: mínimo 0, máximo 40
    if (novoValor < 0) {
        novoValor = 0;
    } else if (novoValor > 40) {
        novoValor = 40;
        alert("⚠️ O limite máximo de 40 erros foi atingido!");
    }

    // Atualiza a exibição
    elementoErros.textContent = novoValor;

    // Calcula nova nota (5.00 - novoValor * 0.10)
    const nota = Math.max(0, 10 - (novoValor * 0.1)).toFixed(2);

    // Atualiza exibição e campo oculto
    document.getElementById(`nota${tipoCapitalizado}`).textContent = nota;
    document.getElementById(`input${tipoCapitalizado}`).value = nota;

    // Atualiza o estado dos botões
    atualizarEstadoBotoes(tipo, novoValor);
}


// Função para atualizar o estado dos botões (habilitar/desabilitar)
function atualizarEstadoBotoes(tipo, valorAtual) {
    const tipoCapitalizado = tipo.charAt(0).toUpperCase() + tipo.slice(1);

    // Encontra os botões pelo seu ID baseado no tipo
    const btnMinus = document.querySelector(`button[onclick="alterarErro('${tipo}', -1)"]`);
    const btnPlus = document.querySelector(`button[onclick="alterarErro('${tipo}', 1)"]`);

    if (btnMinus && btnPlus) {
        // Desabilita o botão de diminuir se o valor for 0
        btnMinus.disabled = (valorAtual === 0);

        // Desabilita o botão de aumentar se o valor for 40
        btnPlus.disabled = (valorAtual === 40);

        // Adiciona/remove a classe CSS para mudar a aparência
        if (valorAtual === 0) {
            btnMinus.classList.add("disabled");
        } else {
            btnMinus.classList.remove("disabled");
        }

        if (valorAtual === 40) {
            btnPlus.classList.add("disabled");
        } else {
            btnPlus.classList.remove("disabled");
        }
    }
}

// Função para calcular nota baseada em erros
function calcularNota(erros) {
    return Math.max(0, 10 - (erros * 0.1)).toFixed(2);
}



function verificarFaixaEtaria() {
    const selectFaixaEtaria = document.getElementById("quesito2"); // Campo "Possui membros acima da idade?"
    const campoQuantidade = document.getElementById("campoQuantidade"); // Div para a pergunta extra

    if (selectFaixaEtaria.value === "Sim") {
        campoQuantidade.style.display = "block"; // Mostra o campo se "Sim" for selecionado
    } else {
        campoQuantidade.style.display = "none"; // Oculta o campo se "Não" for selecionado
        document.getElementById("quesito3").value = "0"; // Limpa o valor do input
    }
}


function verificarEstouro() {
    const select = document.getElementById("quesito2");
    const campoEstouro = document.getElementById("campoEstouro");
    const inputEstouro = document.getElementById("quesito3"); // Adicionei a captura do input

    if (select.value === "Sim") {
        campoEstouro.style.display = "block";
        inputEstouro.removeAttribute("disabled"); // 🔹 Agora pode digitar
        inputEstouro.value = ""; // 🔹 Limpa o campo ao exibir
    } else {
        campoEstouro.style.display = "none";
        inputEstouro.value = "00:00"; // 🔹 Define um valor padrão
        inputEstouro.setAttribute("disabled", "true"); // 🔹 Impede a edição novamente
    }
}


function abrirModalConfirmacao(event) {
    event.preventDefault();

    const avaliador = getAvaliador();
    const corporacao = document.getElementById("corporacao").value;
    const termosAceitos = document.getElementById("aceitarTermos").checked;

    // Validações
    if (!avaliador) {
        alert("⚠️ Selecione um avaliador antes de enviar.");
        return;
    }
    if (!corporacao) {
        alert("⚠️ Selecione a corporação antes de enviar.");
        return;
    }
    if (!termosAceitos) {
        alert("⚠️ Você deve aceitar os termos antes de enviar a avaliação.");
        return;
    }

    let modalBody = document.getElementById("modalBody");
    modalBody.innerHTML = ""; // Limpa o conteúdo anterior

    // Tratamento específico para Uniformidade e Instrumental
    if (avaliador === "Airton Moreira") {
        const errosAlinhamento = document.getElementById("alinhamento-erros").textContent;


        modalBody.innerHTML = `
            <p><strong>Alinhamento</strong>Apontamentos: ${errosAlinhamento}</p>
        `;
    } else if (avaliador === "Celso Ribeiro") {
        const errosCobertura = document.getElementById("cobertura-erros").textContent;


        modalBody.innerHTML = `
            <p><strong>Cobertura</strong>Apontamentos: ${errosCobertura}</p>
        `;
    } else if (avaliador === "Antônio Carlos Schmidt") {
        const errosMarcha = document.getElementById("marcha-erros").textContent;

        modalBody.innerHTML = `
            <p><strong>Marcha</strong>Apontamentos: ${errosMarcha}</p>
        `;
    }
    else if (avaliador === "Felipe Sangali") {
        const errosGarbo = document.getElementById("garbo-erros").textContent;

        modalBody.innerHTML = `
            <p><strong>Garbo</strong>Apontamentos: ${errosGarbo}</p>
        `;
    }
    else if (avaliador === "Eliane Humberg") {
        const errosUniformidade = document.getElementById("uniformidade-erros").textContent;
        const errosInstrumental = document.getElementById("instrumental-erros").textContent;


        modalBody.innerHTML = `
            <p><strong>Uniformidade</strong>Apontamentos: ${errosUniformidade}</p>
            <p><strong>Instrumental</strong>Apontamentos: ${errosInstrumental}</p>
        `;
    }
    else {
        // Captura todos os inputs e selects dentro da div "quesitos"
        const inputs = document.querySelectorAll("#quesitos input, #quesitos select");

        inputs.forEach((input) => {
            let nomeQuesito = document.querySelector(`label[for="${input.id}"]`);
            let valorCampo = input.value.trim();

            if (nomeQuesito) {
                let nome = nomeQuesito.innerText;
                let valor = valorCampo !== "" ? valorCampo : "Não informado";

                let item = document.createElement("p");
                item.innerHTML = `<strong>${nome}</strong>${valor}`;
                modalBody.appendChild(item);
            }
        });
    }

    // Exibe o modal
    document.getElementById("modalConfirmacao").style.display = "flex";
}


function fecharModalConfirmacao() {
    document.getElementById("modalConfirmacao").style.display = "none";
}

function confirmarEnvio() {
    fecharModalConfirmacao(); // Fecha o modal
    enviarAvaliacao(); // Chama a função de envio real
}


function enviarAvaliacao() {
    let avaliador = getAvaliador();
    let corporacao = document.getElementById("corporacao").value;

    if (!avaliador) {
        alert("⚠️ Selecione um avaliador antes de enviar.");
        return;
    }

    if (!corporacao) {
        alert("⚠️ Selecione a corporação antes de enviar.");
        return;
    }

    let dados = { avaliador, corporacao };
    let camposInvalidos = false;

    // Captura todos os inputs (incluindo hidden) e selects dentro da div "quesitos"
    // const inputs = document.querySelectorAll("#quesitos input, #quesitos select");
    // Só pega campos de quesitos (ex.: name="quesito1", "quesito2"...)
    const inputs = document.querySelectorAll('#quesitos input[name^="quesito"], #quesitos select[name^="quesito"]');


    if (avaliador === "Antônio Carlos Schmidt") {
        let camposInvalidos = false;

        // Pega os valores das notas ocultas de Garbo e Marcha
        const inputMarcha = document.getElementById("inputMarcha");

        const valorMarcha = parseFloat(inputMarcha.value);

        if (isNaN(valorMarcha) || valorMarcha < 0) {
            alert("⚠️ O valor de Marcha deve ser maior ou igual a 0.");
            camposInvalidos = true;
        } else {
            dados["quesito1"] = valorMarcha;
        }

        if (camposInvalidos) return;

        // Valida o Rompimento de Marcha como quesito3
        const rompimentoSelect = document.getElementById("verificaRompimento");
        if (!rompimentoSelect || !rompimentoSelect.value) {
            alert("⚠️ Selecione se o Rompimento de Marcha está Válido ou Inválido.");
            return;
        }
        dados["quesito3"] = rompimentoSelect.value;
    }

    if (avaliador === "Felipe Sangali") {
        let camposInvalidos = false;

        // Pega os valores das notas ocultas de Garbo e Marcha
        const inputGarbo = document.getElementById("inputGarbo");

        const valorGarbo = parseFloat(inputGarbo.value);

        if (isNaN(valorGarbo) || valorGarbo < 0) {
            alert("⚠️ O valor de Garbo deve ser maior ou igual a 0.");
            camposInvalidos = true;
        } else {
            dados["quesito2"] = valorGarbo;
        }

        if (camposInvalidos) return;
    }


    else {
        // Para os outros avaliadores (seu código original)

        inputs.forEach((input) => {
            let nomeCampo = input.name; // Nome do quesito
            let valorCampo = input.value.trim();

            if (avaliador === "Airton Moreira" || avaliador === "Celso Ribeiro") {
                if (input.type === "hidden") {
                    let valor = valorCampo === "" ? NaN : parseFloat(valorCampo);
                    if (isNaN(valor) || valor < 0 || valor > 10) {
                        alert(`⚠️ O valor do campo "${nomeCampo}" deve estar entre 0 e 10`);
                        camposInvalidos = true;
                        return;
                    }
                    dados[nomeCampo] = valor;
                }
            } else if (input.type === "number") {
                // Normaliza vírgula para ponto ANTES de validar/parsear
                const valorNormalizado = valorCampo.replace(',', '.');
                let valor = valorNormalizado === "" ? NaN : parseFloat(valorNormalizado);

                // Validação específica dos técnicos
                if (["Edmilson Chiquinho", "Marcelo Bambam", "Marco Almeida Jr. ", "Jorge Scheffer", "Hércules Alves", "Luiz Caldana", "Eliane Humberg", "Bruno Machado"].includes(avaliador)) {
                    // Checagem de casas decimais (máx. 2)
                    if (valorNormalizado.includes('.')) {
                        const casasDecimais = (valorNormalizado.split('.')[1] || "");
                        if (casasDecimais.length > 2) {
                            alert(`⚠️ O valor do campo "${nomeCampo}" deve ter no máximo 2 casas decimais.`);
                            camposInvalidos = true;
                            return;
                        }
                    }

                    // Faixa permitida é 5–10 (o texto do alerta abaixo também deve refletir isso)
                    if (isNaN(valor) || valor < 0 || valor > 10) {
                        alert(`⚠️ O valor do campo "${nomeCampo}" deve estar entre 0 e 10.`);
                        camposInvalidos = true;
                        return;
                    }
                }

                // Faixa Etária
                if (avaliador === "etaria" && (isNaN(valor) || valor < 0)) {
                    alert(`⚠️ O valor do campo "${nomeCampo}" deve ser maior ou igual a 0`);
                    camposInvalidos = true;
                    return;
                }

                // Emerson Palazzi (mantive sua lógica, mas ajustei mensagem)
                if (avaliador === "Eliane Humberg" && (isNaN(valor) || valor < 0 || valor > 10)) {
                    alert(`⚠️ O valor do campo "${nomeCampo}" deve estar entre 0 e 10.`);
                    camposInvalidos = true;
                    return;
                }



                // Demais avaliadores numéricos (5–10)
                if (
                    avaliador !== "etaria" &&
                    avaliador !== "Antônio Carlos Schmidt" &&
                    avaliador !== "Felipe Sangali" &&
                    avaliador !== "Eliane Humberg" &&
                    (isNaN(valor) || valor < 0 || valor > 10)
                ) {
                    alert(`⚠️ O valor do campo "${nomeCampo}" deve estar entre 0 e 10`);
                    camposInvalidos = true;
                    return;
                }

                dados[nomeCampo] = valor;
            }

            else {
                if (valorCampo === "") {
                    if (avaliador === "Dados" && nomeCampo === "quesito2" || nomeCampo === "quesito3" || nomeCampo === "quesito4") {
                        // Exceção para esse caso específico
                    } else {
                        alert(`⚠️ O campo "${nomeCampo}" não pode estar vazio`);
                        camposInvalidos = true;
                        return;
                    }
                }
                dados[nomeCampo] = valorCampo;
            }
        });

        // Completa com vazio os quesitos faltantes, se desejar (se quiser manter)
        for (let i = 1; i <= 14; i++) {
            if (!("quesito" + i in dados)) {
                dados["quesito" + i] = "";
            }
        }

        if (camposInvalidos) return;
    }

    console.log("✅ Dados enviados:", dados);

    document.getElementById("button-send").classList.add("disabled");

    // Armazena a banda avaliada no localStorage
    const bandasAvaliadas = JSON.parse(localStorage.getItem(`bandasAvaliadas_${avaliador}`)) || [];
    if (!bandasAvaliadas.includes(corporacao)) {
        bandasAvaliadas.push(corporacao);
        localStorage.setItem(`bandasAvaliadas_${avaliador}`, JSON.stringify(bandasAvaliadas));
    }

    fetch("https://script.google.com/macros/s/AKfycbx_5iPHlf5aa2vgL43f-8KGGCa4QLOelDKE0mbLYqReTrWJLSYUyIbsgdShYsUS4wwYBA/exec", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
    })
        .then(() => {
            alert("✅ Avaliação enviada com sucesso!");
            document.getElementById("icon-pdf").classList.remove("disabled");
            document.getElementById("button-send").classList.add("disabled");

            desabilitarCampos();

            // Bloqueia especificamente os botões de erro (se houver)
            const botoesErro = document.querySelectorAll('.btn-erro');
            botoesErro.forEach(botao => {
                botao.disabled = true;
                botao.classList.add("disabled");
            });
        })
        .catch(error => {
            console.error("❌ Erro ao enviar:", error);
            document.getElementById("button-send").classList.remove("disabled");
        });
}



function atualizarSeletorBandas() {
    const avaliador = getAvaliador();
    const seletor = document.getElementById("corporacao");

    // Limpa o seletor
    seletor.innerHTML = '<option value="">-- Escolha --</option>';

    // Obtém as bandas já avaliadas pelo avaliador
    const bandasAvaliadas = JSON.parse(localStorage.getItem(`bandasAvaliadas_${avaliador}`)) || [];

    // Filtra as bandas disponíveis
    const bandasNaoAvaliadas = bandasDisponiveis.filter(banda => !bandasAvaliadas.includes(banda));

    // Adiciona as bandas não avaliadas ao seletor
    bandasNaoAvaliadas.forEach(banda => {
        const option = document.createElement("option");
        option.value = banda;
        option.textContent = banda;
        seletor.appendChild(option);
    });
}

const bandasDisponiveis = [
    "01 • Banda A",
    "02 • Banda B",
    "03 • Banda C",
    "04 • Banda D",
    "05 • Banda E"
];


function desabilitarCampos() {
    // Seleciona todos os inputs e selects
    let elementos = document.querySelectorAll("input, select");

    // Desativa cada um
    elementos.forEach(elemento => {
        elemento.disabled = true;
    });

    // Desativa os botões de erro para Uniformidade e Instrumental
    const botoesErro = document.querySelectorAll('.btn-erro');
    botoesErro.forEach(botao => {
        botao.disabled = true;
        botao.classList.add("disabled");
    });
}

function habibilitarCampos() {
    // Seleciona todos os inputs e selects
    let elementos = document.querySelectorAll("input, select");

    // Habilita cada um
    elementos.forEach(elemento => {
        elemento.disabled = false;
    });

    // Habilita os botões de erro para Uniformidade e Instrumental
    const botoesErro = document.querySelectorAll('.btn-erro');
    botoesErro.forEach(botao => {
        botao.disabled = false;
        botao.classList.remove("disabled");
    });

    // Atualiza o estado dos botões baseado nos valores atuais
    const avaliador = getAvaliador();
    if (avaliador === "Airton Moreira") {
        const errosAlin = parseInt(document.getElementById("errosAlinhamento").textContent);

        // Atualiza os botões de uniformidade
        document.getElementById("btnMinusAlinhamento").disabled = (errosAlin === 0);
        document.getElementById("btnPlusAlinhamento").disabled = (errosAlin === 40);
    } else if (avaliador === "Celso Ribeiro") {
        const errosCober = parseInt(document.getElementById("errosCobertura").textContent);

        // Atualiza os botões de instrumental
        document.getElementById("btnMinusCobertura").disabled = (errosCober === 0);
        document.getElementById("btnPlusCobertura").disabled = (errosCober === 40);
    }
}

// // Função para gerar PDF
// function printPDF() {
// if (document.getElementById("icon-pdf").classList.contains("disabled")) {
//     alert("⚠️ Você precisa enviar a avaliação primeiro!");
//     return;
// }

// window.print();

// // Habilita o botão de reset após gerar o PDF
// document.getElementById("icon-reset").classList.remove("disabled");


const SELETOR_ALVO_CAPTURA = ".container-pai"; // mude se necessário

async function printPDF(formatoPreferido = 'png') {
    if (document.getElementById("icon-pdf").classList.contains("disabled")) {
        alert("⚠️ Você precisa enviar a avaliação primeiro!");
        return;
    }
    const avaliador = getAvaliador();
    const corporacao = document.getElementById("corporacao")?.value || "";
    if (!avaliador || !corporacao) {
        alert("⚠️ Preencha Avaliador e Corporação antes de gerar.");
        return;
    }
    const nomeBase = sanitizeFileName(`${corporacao} - ${avaliador}`);

    // alvo da captura (use "body" se quiser a página inteira)
    const alvo = document.querySelector(SELETOR_ALVO_CAPTURA) || document.body;
    if (!alvo) {
        alert("⚠️ Não encontrei o elemento da avaliação para capturar.");
        return;
    }

    // Dimensões REAIS do conteúdo (inclui o que está fora da viewport)
    const pageWidth = Math.max(
        alvo.scrollWidth,
        document.documentElement.scrollWidth,
        document.body.scrollWidth,
        window.innerWidth
    );
    const pageHeight = Math.max(
        alvo.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.scrollHeight,
        window.innerHeight
    );

    // Escala segura (aumente/diminua conforme a necessidade/performace)
    const baseScale = Math.min(window.devicePixelRatio || 2, 3);

    const canvas = await html2canvas(alvo, {
        backgroundColor: "#ffffff",
        useCORS: true,
        scrollX: 0,
        scrollY: 0,
        windowWidth: pageWidth,
        windowHeight: pageHeight,
        scale: baseScale,
        // Ajustes no DOM clonado para evitar cortes
        onclone: (doc) => {
            const el = doc.querySelector(SELETOR_ALVO_CAPTURA) || doc.body;

            // Remover limites que possam cortar o conteúdo
            el.style.overflow = "visible";
            el.style.height = "auto";
            el.style.maxHeight = "none";
            el.style.maxWidth = "none";

            // Desativar transforms que às vezes causam clipping
            el.style.transform = "none";

            // Se houver wrappers/containers que limitam altura/overflow, libere-os também:
            // doc.querySelectorAll('.wrapper, .content, #formulario').forEach(node => {
            //   node.style.overflow = "visible";
            //   node.style.height = "auto";
            //   node.style.maxHeight = "none";
            //   node.style.transform = "none";
            // });

            // Opcional: esconda elementos que não devem sair na imagem (ex.: botões)
            // Basta adicionar class="nocapture" neles no seu HTML/CSS
            doc.querySelectorAll('.nocapture').forEach(node => (node.style.display = 'none'));

            // Opcional: elementos fixos/sticky podem sobrepor; torne-os estáticos na captura
            doc.querySelectorAll('.fixed, .sticky').forEach(node => (node.style.position = 'static'));
        },
        // Ignora explicitamente elementos marcados
        ignoreElements: (el) => el.classList?.contains('nocapture'),
    });

    await salvarImagemAuto(canvas, nomeBase);
    document.getElementById("icon-reset")?.classList.remove("disabled");
}

function sanitizeFileName(nome) {
    return nome.replace(/[\/\\?%*:|"<>]/g, "_").trim();
}

// 1) Download automático p/ Downloads
// 2) Tenta gravar silenciosamente no OPFS (armazenamento privado do site) — opcional
async function salvarImagemAuto(canvas, nomeBase) {
    return new Promise(resolve => {
        canvas.toBlob(async (blob) => {
            if (!blob) {
                alert("❌ Erro ao gerar imagem.");
                return resolve(false);
            }

            // --- (1) Download automático ---
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${nomeBase}.png`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            URL.revokeObjectURL(url);

            // --- (2) OPFS (persistente no site) ---
            try {
                if (navigator.storage && navigator.storage.getDirectory) {
                    const root = await navigator.storage.getDirectory();
                    const dir = await root.getDirectoryHandle("avaliacoes", { create: true });
                    const fileHandle = await dir.getFileHandle(`${nomeBase}.png`, { create: true });
                    const writable = await fileHandle.createWritable();
                    await writable.write(blob);
                    await writable.close();
                }
            } catch (e) {
                // OPFS indisponível — ignore, já baixou
            }

            resolve(true);
        }, "image/png", 1.0);
    });
}


// }



function resetForm() {
    document.getElementById("formulario").reset();
    document.getElementById("corporacao").selectedIndex = 0;
    console.log("Formulário resetado");

    const avaliador = getAvaliador();


    if (avaliador === "Eliane Humberg") {
        resetarUniformidadeInstrumental();
    }

    if (avaliador === "Antônio Carlos Schmidt") {
        resetarMarcha();
    }

    if (avaliador === "Felipe Sangali") {
        resetarGarbo();
    }

    if (avaliador === "Airton Moreira") {
        resetarAlinhamento();
        atualizarSeletorBandas();
    }
    if (avaliador === "Celso Ribeiro") {
        resetarCobertura();
        atualizarSeletorBandas();
    }



    // Desabilita os botões novamente
    document.getElementById("icon-pdf").classList.add("disabled");
    document.getElementById("icon-reset").classList.add("disabled");
    document.getElementById("button-send").classList.remove("disabled");

    habibilitarCampos();
    atualizarSeletorBandas();
}