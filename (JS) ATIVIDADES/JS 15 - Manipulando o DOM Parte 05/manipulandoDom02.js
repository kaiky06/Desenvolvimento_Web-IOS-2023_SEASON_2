// Arrays para armazenar os itens e valores
var itens = [];
var quantidades = [];
var valores = [];

function adicionarItem() {
    var item = document.getElementById("item").value;
    var quantidade = parseInt(document.getElementById("qtde").value);
    var valor = parseFloat(document.getElementById("valor").value);

    // Validar entrada
    if (item && !isNaN(quantidade) && quantidade > 0 && !isNaN(valor) && valor > 0) {
        itens.push(item);
        quantidades.push(quantidade);
        valores.push(valor);

        atualizarListas();
        limparFormulario();
    } else {
        alert("Por favor, preencha todos os campos corretamente.");
    }
}

function atualizarListas() {
    var listaItens = document.getElementById("listaItens");
    var listaTotal = document.getElementById("listaTotal");
    var totalCompra = 0;

    // Limpar listas antes de atualizar
    listaItens.innerHTML = "";
    listaTotal.innerHTML = "";

    for (var i = 0; i < itens.length; i++) {
        var itemLista = document.createElement("li");
        itemLista.className = "list-group-item d-flex justify-content-between align-items-center";
        itemLista.innerHTML = `${quantidades[i]} ${itens[i]} - ${quantidades[i] * valores[i].toFixed(2)}`;

        var grupoBotoes = document.createElement("div");
        grupoBotoes.className = "btn-group";
        grupoBotoes.setAttribute("role", "group");

        var btnMais = criarBotaoControle("+", i, "btn-success", "adicionarQuantidade");
        var btnMenos = criarBotaoControle("-", i, "btn-warning", "subtrairQuantidade");
        var btnRemover = criarBotaoControle("x", i, "btn-danger", "removerItem");

        grupoBotoes.appendChild(btnMais);
        grupoBotoes.appendChild(btnMenos);
        grupoBotoes.appendChild(btnRemover);

        itemLista.appendChild(grupoBotoes);
        listaItens.appendChild(itemLista);

        totalCompra += quantidades[i] * valores[i];
        var totalItem = document.createElement("li");
        totalItem.className = "list-group-item d-flex justify-content-between align-items-center";
        totalItem.textContent = `${quantidades[i]} ${itens[i]} - ${quantidades[i] * valores[i].toFixed(2)}`;
        listaTotal.appendChild(totalItem);
    }

    var totalGeral = document.createElement("li");
    totalGeral.className = "list-group-item d-flex justify-content-between align-items-center font-weight-bold";
    totalGeral.textContent = `Total Geral: ${totalCompra.toFixed(2)}`;
    listaTotal.appendChild(totalGeral);
}

function criarBotaoControle(rotulo, indice, classeBtn, manipulador) {
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = `btn ${classeBtn}`;
    btn.textContent = rotulo;
    btn.setAttribute("data-indice", indice);
    btn.setAttribute("onclick", manipulador + "(" + indice + ")");
    return btn;
}

function adicionarQuantidade(indice) {
    quantidades[indice]++;
    atualizarListas();
}

function subtrairQuantidade(indice) {
    if (quantidades[indice] > 1) {
        quantidades[indice]--;
        atualizarListas();
    }
}

function removerItem(indice) {
    itens.splice(indice, 1);
    quantidades.splice(indice, 1);
    valores.splice(indice, 1);
    atualizarListas();
}

function limparFormulario() {
    document.getElementById("item").value = "";
    document.getElementById("qtde").value = "";
    document.getElementById("valor").value = "";
}
