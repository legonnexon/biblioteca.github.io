let livro = "<div class='livro' id='livro'><p class='text' id='text'></p></div>";
let base = "<div class='base' id='base'></div>"
let borda = document.getElementById("borda");

document.getElementById('btn').onclick = function(e) {
  borda.innerHTML = " ";
  let number = document.getElementById('number').value;
  if (number > 100) { 
    alert("Muito Grande");
    window.location.reload();
  } 
  let i = 0;
  numberBooks = 0; //Verifica quantos livros tem
  do {
    var idBook = "livro" + i; //Vai ser usado para diferenciar os Ids do livros
    var idText = "text" + i;
    borda.innerHTML += livro; // Adicionar mais um livro
    document.getElementById("livro").setAttribute("id", idBook); //Mudar o Id para o identificador
    document.getElementById("text").setAttribute("id", idText); //Mudar o Id para o identificador

    // Uma cor aleatoria em HEX
    let corAleatoria =
      "#" +
      parseInt(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, "0");

    document.getElementById(idBook).style.backgroundColor = corAleatoria; // Adiciona a cor

    //Verifica quando colocar a estante
    if (numberBooks == 9) {
      borda.innerHTML += base;
      numberBooks = 0;
    } else if (numberBooks != 9) {
      numberBooks++;
    }

    // Make letras aleatorias
    function makeid(length) {
      var result = '';
      var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var charactersLength = characters.length;
      for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    }

    document.getElementById(idText).innerText = makeid(4);

    i++;
  } while (i < number);
}
