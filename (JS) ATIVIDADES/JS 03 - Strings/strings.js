let fruta01 = "Uva";
let fruta02 = "Banana";
let fruta03 = "Morango";
let fruta04 = "Abacaxi";
let fruta05 = " manga ";
 
//length
console.log(fruta01.length);
console.log(fruta02.length);
console.log(fruta03.length);
console.log(fruta04.length);
console.log(fruta05.length);//se atente que o começo e no fim a um espaço em branco

//substring
console.log(fruta01.substring(0, 3));
console.log(fruta02.substring(0, 3));
console.log(fruta03.substring(0, 3));
console.log(fruta04.substring(0, 3));
console.log(fruta05.substring(0, 3));

//trim
console.log(fruta05.trim()); //ele irá remover o espaço em branco do começo  

//replace
console.log(fruta01.replace("Uva", 'carro'));
console.log(fruta02.replace("Banana", 'cachorro'));
console.log(fruta03.replace("Morango", 'predio' ));
console.log(fruta04.replace("Abacaxi", 'acerola'));
console.log(fruta05.replace(" manga ", 'amo javascript'));

//template string 
console.log(`As frutas selecionadas selecionas foram ${fruta01}, ${
    fruta02}, ${fruta03}, e por fim mas não menos importante a${fruta05}.`);