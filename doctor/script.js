// References
var database = firebase.database(); // database service
var storageRef = firebase.storage().ref(); // storage service

var array = [];
var number_of_images;

$(document).ready(function () {

    $('#save').hide();

    $('#generate').click(function () {
        number_of_images = $("#number_of_images").val();

        if (number_of_images == "" || number_of_images <= 0) {
            alert("Insira um número válido de imagens");
            throw new Error("Número inválido de imagens");
        }

        if ($('#insert_img_div:has(div)').length > 0) {
            $('#insert_img_div').html('');
        }

        $('#insert_img_div').append('<h4><b>Seleccione</b> ou <b>arraste de uma pasta</b> as imagens para cada categoria. <p><b>IMPORTANTE:</b>Os ficheiros não podem conter caracteres especiais (<>@!#$%^~&*()_+[]{}?:;|\'`´-=) no seu nome!</p></h4>');

        for (var i = 0; i < number_of_images; i++) {
            $("#insert_img_div").append('<div id="img' + i + '_div" class="col-sm-3 single_img_div"> <input type="file" id="input' + i + '" class="input" onchange="readURL(this, ' + i + ')" /> </div>');
        }
    });

    $('#save').click(function () {

        var nometemplate = $("#nometemplate").val();
        if (nometemplate == "") {
          alert("Insira um nome para a tarefa!");
          throw new Error("Sem nome para template");
        }
        else {
          database.ref('templates/' + nometemplate).set({
              ordem: array,
              tipo: "sequence"
          });
          alert("Tarefa guardada com sucesso!");
        }
    });
});

var counter = 0;

function readURL(input, i) {

  var specialChars = "<>@!#$%^&*()_+[]{}?:;ãẽĩõũáéíóúàèìòùâêîôû|'\"\\,/~`-=";

  for (var x = 0; x < input.files.length; x++) {
    if (check(input.files[x].name, specialChars) == true) {
      alert("O nome da imagem não pode ter caracteres especiais, por favor renomeie o ficheiro");
      $('#save').hide();
      throw new Error("Caracteres invalidos no titulo da imagem");
    }
  }

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        var path = 'templates/sequence/' + input.files[0].name;
        var imageRef = storageRef.child(input.files[0].name);
        var imagesImageRef = storageRef.child(path);

        reader.onload = function (e) {
            $('#input' + i).hide();
            $('#img' + i + '_div').append('<img id="img' + i + '" src="' + e.target.result + '" class="img">');

            var file = input.files[0];
            array.push(input.files[0].name);
            imagesImageRef.put(file).then(function () {
                console.log('Uploaded a blob or file!');
            });

            counter++;
            if (counter == number_of_images) {
                $('#save').show();
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}

// initialize
function Init() {

    var fileselect = $id("fileselect"),
        filedrag = $id("filedrag"),
        submitbutton = $id("submitbutton");

    // file select
    fileselect.addEventListener("change", FileSelectHandler, false);

    // is XHR2 available?
    var xhr = new XMLHttpRequest();
    if (xhr.upload) {

        // file drop
        filedrag.addEventListener("dragover", FileDragHover, false);
        filedrag.addEventListener("dragleave", FileDragHover, false);
        filedrag.addEventListener("drop", FileSelectHandler, false);
        filedrag.style.display = "block";

        // remove submit button
        submitbutton.style.display = "none";
    }

}

// getElementById
function $id(id) {
    return document.getElementById(id);
}

function check(string, chars){
  for(i = 0; i < chars.length;i++){
        if(string.indexOf(chars[i]) > -1){
            return true
        }
    }
    return false;
}
