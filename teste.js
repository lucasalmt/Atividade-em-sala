const Z = 7;

// 1. Declaração de Variáveis - Escopo
function declaracaoVariaveisEscopo() {
    console.log("var variable"); // var variable
    console.log(x); // undefined
    var x = 5; // só seta o valor para x
    console.log(x); // 5

    console.log("let variable"); // let variable
    let y = 6; // só seta o valor para y
    console.log(y); // Error
    console.log(y); // 6

    console.log("const variable DENTRO DO main"); // const variable
    // só seta o valor para y
    console.log(Z); // 7
    console.log(Z); // 7
}

// 1.1. Declaração de Variáveis
function declaracaoVariaveis() {
    let nome = "Ariel";
    const idade = 30;
    var cidade = "Sorocaba";
}

// 2. Tipos de Dados
function tiposDeDados() {
    let numero = 42;
    let texto = "Olá, mundo!";
    let booleano = true;
    let lista = [1, 2, 3];
    let objeto = { nome: "Ariel", idade: 30 };
    console.log(
        typeof numero,
        typeof texto,
        typeof booleano,
        typeof lista,
        typeof objeto
    );
}

// 3. Estruturas Condicionais
function estruturasCondicionais() {
    let idade = 18;
    //   if (idade >= 18) {
    //     console.log("Maior de idade");
    //   } else {
    //     console.log("Menor de idade");
    //   }

    if (idade >= 18) return console.log("Maior de idade");

    console.log("Menor de idade");
}

function retornaSomaNumeros(number1, number2) {
    return number1 + number2;
}

function main() {
    declaracaoVariaveis();
    // tiposDeDados();
    estruturasCondicionais();
    //   console.log(retornaSomaNumeros(1, 2));
    let numberSomado = retornaSomaNumeros("1", false);
    console.log(numberSomado);
}



function lacosderepeticao() {
    for (let i = 1; i <= 5; i++) {
        console.log('iteração ${i}');
    }

    const NOMES = ["Gabriela", "Laine", "Lucas"];
    for (let index = 0; index < NOMES.length; index++) {
        const NOME = NOMES[index];
        console.log('iteração ${NOME}');

    }
}



lacosderepeticao();

function funcoesEArrowFunction() {
    function soma(a, b) {
        return a + b;


        const multiplica = (a, b) => a * b;

        console.log(soma(3, 4));
        console.log(multiplica(3, 4));
    }

    function arraysEMetodos() {
        let numeros = [1, 2, 3, 4, 5];

        console.log(
            "map:",
            numeros.map((n) => n * 2)
        ); // [2,4,6,8,10]
    }

    console.log(
        "filtro:",
        numeros.filter((n) => n > 2)
    ); // puxa todos os numeros qdeacordo com a condicao array

    console.log(
        "find:",
        numeros.find((n) => n > 3)
    ); //find: 4 ele pega o primeiro numero encontrado apenas


    console.log(
        "reduce:",
        numeros.reduce((acc, n) => acc + n, 0)
    );

    console.log(
        "some:",
        numeros.some((n) => n < 4)
    ); //logica boleana verdadeiro ou falso 

    console.log(
        "every:",
        numeros.every((n) => n < 0)
    ); // todos os elementos devem ser verdadeiros 

    console.log(
        "sort (crescente):",
        [...numeros].sort((a, b) => b - a)
    ); // tres pontos significa spread vai espalhar todos os valores inclui objetos e afins

    console.log(
        "includes:",
        numeros.sort((n) => n > 3)
    ); // verifica se existe o numer 3

}

function objetosEJson() {
    let pessoa = { nome: "Lucas", idade: 20 };
    let json = JSON.stringify(pessoa);
    console.log(json);
}

function localStorageFunc() {
    localStorage.setItem("idade", "31");
    console.log (
        localStorage.getItem("idade")
    )
}

function sessionStorageFunc() {
sessionStorage.setItem("oi", "sala");
}

function princiapaisUsosDoDoc () {
const titulo = document.querySelector("p");
}


function main() {
    //   declaracaoVariaveis();
    //   tiposDeDados();
    //   estruturasCondicionais();
    //     console.log(retornaSomaNumeros(1, 2));
    //   let numberSomado = retornaSomaNumeros("1", false);
    //   console.log(numberSomado);
    // localStorageFunc();


main();
}