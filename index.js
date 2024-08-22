let pagina = document;





let botaoSubmeter = document.getElementById("botao-submeter");
botaoSubmeter.addEventListener("click", submeter);




console.log(pagina);

function submeter(){
    let nome = document.getElementById("nome").value;
    console.log(nome);
   
    let idade = document.getElementById("idade").value;
    console.log(idade);
    let cpf = document.getElementById("cpf").value;
    console.log(cpf);

    if (nome == ""){
        alert("nome vazio")
    }
}