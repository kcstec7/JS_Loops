/*
    Meu primeiro script em JS - Exemplo com a aplicação das 3 formas de loop
    KarlaCS - 23/11/2020
*/

const tamLarguraLinha = 50;
let objetivosRotina = ['Trabalhar', 'Estudar', 'Viajar', 'Dormir', 'Comer', 'Confraternizar', 'Amar', 'Divertir-se!'];
let tamMaiorString = 0;
let txtLinha = "";

// Verifica o tamanho da maior string na lista
for (let i = 0; i < objetivosRotina.length; i++) {

    if (objetivosRotina[i].length > tamMaiorString) {
        tamMaiorString = objetivosRotina[i].length;
    }
}

// Atribui a diferença fixa (mínima) entre palavras
const tamDiferencaFixa = (tamLarguraLinha - (3 * tamMaiorString)) / 2;

// Monta o cabeçalho
MontarCabecalho();

// Inicia com o FOR
for (let i = 0; i < objetivosRotina.length; i++) {

    txtLinha = RetornarTextoComEspacos(objetivosRotina[i]);

    let item = 0;

    // Em segundo lugar, usa o WHILE
    while (item < objetivosRotina.length) {

        if (item === i) {
            txtLinha += RetornarTextoComEspacos(objetivosRotina[item]);
            break;
        }

        item++;
    }

    item = 0;

    // Por último, aplica o DO WHILE
    do {
        if (item === i) {
            txtLinha += RetornarTextoComEspacos(objetivosRotina[item]);
            break;
        }
        item++;
    } while (item < objetivosRotina.length)

    // Imprime a linha com as 3 vras, uma de cada forma de loop
    console.log(txtLinha);
}

// Funções

function MontarCabecalho() {
    txtLinha = RetornarTextoComEspacos("<FOR>");
    txtLinha += RetornarTextoComEspacos("<WHILE>");
    txtLinha += RetornarTextoComEspacos("<DO WHILE>");
    console.log(txtLinha);
    console.log("--------------------------------------------------");
}

function RetornarTextoComEspacos(texto) {

    const txtEspacos = "               ";
    let qtdEspacos = 0;

    qtdEspacos = tamDiferencaFixa + (tamMaiorString - texto.length);

    return texto + txtEspacos.substr(0, qtdEspacos);

}