/* 

//editor H1

// Função para obter o valor armazenado no localStorage
function obterTextoFixoH1() {
    return localStorage.getItem('textoFixoH1') || '';
}

// Função para salvar o texto fixo no localStorage
function salvarTextoFixoH1(texto) {
    localStorage.setItem('textoFixoH1', texto);
}

// Função para exibir o texto fixo na tag
function exibirTextoFixoH1() {
    var tagResultadoH1 = document.getElementById('principal');
    tagResultadoH1.innerHTML = obterTextoFixoH1();
}

// Função para enviar o texto para a tag e salvar no localStorage
function enviarParaTagH1() {
    var textoInputH1 = document.getElementById('textH1').value;
    salvarTextoFixoH1(textoInputH1);
    exibirTextoFixoH1();
}

// Função para preencher o campo de entrada com o texto fixo atual
function editarTextoH1() {
    document.getElementById('textH1').value = obterTextoFixoH1();
}

// Exibe o texto fixo ao carregar a página
window.onload = exibirTextoFixoH1;

//editor P

function obterTextoFixoP() {
    return localStorage.getItem('textoFixoP') || '';
}

// Função para salvar o texto fixo no localStorage
function salvarTextoFixoP(texto) {
    localStorage.setItem('textoFixoP', texto);
}

// Função para exibir o texto fixo na tag
function exibirTextoFixoP() {
    var tagResultadoP = document.getElementById('paragrafo');
    tagResultadoP.innerHTML = obterTextoFixoP();
}

// Função para enviar o texto para a tag e salvar no localStorage
function enviarParaTagP() {
    var textoInputP = document.getElementById('textP').value;
    salvarTextoFixoP(textoInputP);
    exibirTextoFixoP();
}

// Função para preencher o campo de entrada com o texto fixo atual
function editarTextoP() {
    document.getElementById('textP').value = obterTextoFixoP();
}

// Exibe o texto fixo ao carregar a página
window.onload = exibirTextoFixoP;

*/



// Funções para o H1
function obterTextoFixoH1() {
    return localStorage.getItem('textoFixoH1') || '';
}

function salvarTextoFixoH1(texto) {
    localStorage.setItem('textoFixoH1', texto);
}

function exibirTextoFixoH1() {
    var tagResultadoH1 = document.getElementById('principal');
    tagResultadoH1.innerHTML = obterTextoFixoH1();
}

function enviarParaTagH1() {
    var textoInputH1 = document.getElementById('textH1').value;
    salvarTextoFixoH1(textoInputH1);
    exibirTextoFixoH1();
}

function editarTextoH1() {
    document.getElementById('textH1').value = obterTextoFixoH1();
}

// Funções para o P
function obterTextoFixoP() {
    return localStorage.getItem('textoFixoP') || '';
}

function salvarTextoFixoP(texto) {
    localStorage.setItem('textoFixoP', texto);
}

function exibirTextoFixoP() {
    var tagResultadoP = document.getElementById('paragrafo');
    tagResultadoP.innerHTML = obterTextoFixoP();
}

function enviarParaTagP() {
    var textoInputP = document.getElementById('textP').value;
    salvarTextoFixoP(textoInputP);
    exibirTextoFixoP();
}

function editarTextoP() {
    document.getElementById('textP').value = obterTextoFixoP();
}

// Adiciona os eventos de onload



// Funções para a Imagem


function obterImagem() {
    return localStorage.getItem('imagem') || '';
}

function salvarImagem(dataUrl) {
    localStorage.setItem('imagem', dataUrl);
}

function exibirImagem() {
    var tagResultadoImagem = document.getElementById('imagem1');
    var imagemDataUrl = obterImagem();

    if (imagemDataUrl) {
        tagResultadoImagem.innerHTML = '<img src="' + imagemDataUrl + '" alt="Imagem salva">';
    } else {
        tagResultadoImagem.innerHTML = 'Nenhuma imagem salva.';
    }
}

function enviarImagem() {
    var fileInput = document.getElementById('imagemadded');
    var file = fileInput.files[0];

    if (file) {
        var reader = new FileReader();

        reader.onload = function (e) {
            console.log("Conteúdo da imagem lido com sucesso:", e.target.result);
            salvarImagem(e.target.result);
            exibirImagem();
        };

        reader.readAsDataURL(file);
    } else {
        console.log('Nenhum arquivo selecionado.');
    }
}

function editarImagem() {
    var imagemDataUrl = obterImagem();
    if (imagemDataUrl) {
        var resposta = window.prompt('Editar imagem. Deixe em branco para manter a mesma imagem ou insira uma nova URL:');
        if (resposta !== null) {
            salvarImagem(resposta || imagemDataUrl);
            exibirImagem();
        }
    } else {
        console.log('Nenhuma imagem salva para editar.');
    }
}



window.onload = function () {
    exibirTextoFixoH1();
    exibirTextoFixoP();
    exibirImagem();
};
