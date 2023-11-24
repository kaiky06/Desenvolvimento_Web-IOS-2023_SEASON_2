window.alert("Bem-vindo!");

document.title = "Testando DOM";

// Criar elementos HTML
var section = document.createElement("section");
var article = document.createElement("article");
var h1 = document.createElement("h1");
var p = document.createElement("p");

// Adicionar conteúdo aos elementos
h1.textContent = "Kaiky";
p.textContent = "i love javascript   :)";

// Adicionar elementos à estrutura da página
article.appendChild(h1);
article.appendChild(p);
section.appendChild(article);
document.body.appendChild(section);
