// References
var database = firebase.database(); // database service
var auth = firebase.auth();         // auth service

var tpatients = $('#showtemplates')  // table patients
var table = "<div id='showtemplates' class='box-body table-responsive no-padding'>" +
  "<table class='table table-hover'>" +
  "<tbody>" +
  "<tr><th>Nome</th></tr>" +
  "</tbody>" +
  "</table>" +
  "</div>";

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    var username = (user.email).split('@')[0];
    var refTemplates = database.ref('patients/' + username);

    refTemplates.once("value", function (snapshot) {
      for (var i = 0; i < snapshot.val().ptemplates.length; i++) {
        tpatients.replaceWith(table);
        var teste = $("#showtemplates table");
        teste.append($('<tr id="' + snapshot.val().ptemplates[i] +'" onclick="redirect('+ snapshot.val().ptemplates[i] +')">')
             .append($('<td>')
             .text(snapshot.val().ptemplates[i])
          )
        )
      }
    });
  } else {
    // No user is signed in.
  }
});

function redirect(pagina) {
  console.log(pagina);
  var refTemplates2 = database.ref('templates/' + pagina.id);
  refTemplates2.once("value", function (snapshot) {
    window.location = '../../pages/templates/' + snapshot.val().tipo + '/patient/patient.html' + '?param=' + pagina.id;
  });

}
