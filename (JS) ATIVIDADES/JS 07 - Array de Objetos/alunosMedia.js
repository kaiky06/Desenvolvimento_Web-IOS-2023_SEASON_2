let alunos = [{
    nome: "Kaiky",                  
    sobrenome: "Oliveira",          
    notas: [10, 6.2, 4.5, 9.5],     
    endereco: {                     
        rua: "rua das Uvas",           
        bairro: "almirante",         
        num: "129"                   
    },                              
    diciplina:"matematica",     
    faltas: 2,
    RA:96753263,
    matriculado:true        
},
{
    nome: "Pietro",
    sobrenome: "Abrahamian",
    notas: [9.8, 6.0, 9, 10],
    endereco: {
        rua: "rua dos Morangos",
        bairro: "salvador",
        num: "710"
    },
    diciplina:"Matematica",
    faltas: 2,
    RA:54353263,
    matriculado:true        

},
{
    nome: "Gabriel",    
    sobrenome: "Dias",
    notas: [10, 6.2, 10, 8.5],
    endereco: {
        rua: "rua dos Abacates",
        bairro: "victoria",
        num: "139"
    },
    diciplina:"Matematica",
    faltas: 0,
    RA:86753263,
    matriculado:true        
}
];

for (let i of alunos ){
    let media = 0;
  
    for (let n of i.notas) {
      media += n;
    }
  
    let mediaSoma = media / 4;
  
    if (mediaSoma >= 7) {
      console.log(
        `Aluno ${i.nome}, que mora na ${i.endereco.rua}, sua MÉDIA é: ${Math.floor(mediaSoma)}, portando foi APROVADO!!!`
      );
    } else {
      console.log(
        `Aluno ${i.nome}, que mora na ${i.endereco.rua}, sau MÉDIA é: ${Math.floor(mediaSoma)}, portando foi REPROVADO!!!`
      );
    }
  }  

