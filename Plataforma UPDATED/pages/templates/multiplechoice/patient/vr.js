// References
var database = firebase.database(); // database service

// Global variables
var myParam = location.search.split('param=')[1]
myParamSpace = myParam.replace('%20', ' ');
var templatesRef = database.ref("templates/" + myParamSpace); // database templates

var historico = [];

templatesRef.once("value", function (snapshot) {
        rightAnswers = snapshot.val().respostasCertas,
        question = snapshot.val().pergunta,
        answers = snapshot.val().respostas,
        answerNumber = snapshot.val().nrEscolhas
        start();
});

var entity = [];
var sceneEl;
var terminado = false;

function customEnterVR() {
	var scene = document.querySelector('a-scene');
	if (scene) {
		if (scene.hasLoaded) {
			scene.enterVR();
		} else {
			scene.addEventListener('loaded', scene.enterVR);
		}
	}
}


function start() {
	document.addEventListener('mouseup', customEnterVR);	// 
	document.addEventListener('mousedown', customEnterVR);	// 	
	document.addEventListener('mouseleft', customEnterVR);	// 	
	document.addEventListener('mouseright', customEnterVR);	// 
	
	sceneEl = document.querySelector('a-scene');

	inserirPergunta();
	shuffle(answers);
	generateBtn();

	//$(":button").click(function () {
	//	console.log(this);
      //  var clickedButton = this.id;
    //});

	pergunta.addEventListener('click', function () { 
		console.log(pergunta);
	});
/*
	for (var i = 0; i < answers.length; i++) {
		if (entity[i] != null){
			console.log(entity[i]);
			entity[i].addEventListener('click', function () { 
				var g = entity[i].getAttribute('text', 'value');
				if (rightAnswers.includes(g.value) && !historico.includes(g.value)){
					entity[i].setAttribute('material', 'color: green');
					rightAnswers.remove(g.value);
			        historico.push(g.value);
			        checkIfDone();
				}
				else if (!historico.includes(g.value)){
					entity[i].setAttribute('material', 'color: red');
					setTimeout(function() {
			    		removerCorVermelha(entity[i]);
					}, 1000);
				}
			});
		}
		else{
			i = 0;
		}
	}
	*/

	if (entity[0] != null){
		entity[0].addEventListener('click', function () { 
			var g = entity[0].getAttribute('text', 'value');
			if (rightAnswers.includes(g.value) && !historico.includes(g.value)){
				entity[0].setAttribute('material', 'color: green');
				rightAnswers.remove(g.value);
		        historico.push(g.value);
		        checkIfDone();
			}
			else if (!historico.includes(g.value)){
				entity[0].setAttribute('material', 'color: red');
				setTimeout(function() {
		    		removerCorVermelha(entity[0]);
				}, 1000);
			}
		});
	}

	if (entity[1] != null){
		entity[1].addEventListener('click', function () { 
			var g = entity[1].getAttribute('text', 'value');
			if (rightAnswers.includes(g.value)  && !historico.includes(g.value)){
				entity[1].setAttribute('material', 'color: green');
				rightAnswers.remove(g.value);
		        historico.push(g.value);
		        checkIfDone();
			}
			else if (!historico.includes(g.value)){
				entity[1].setAttribute('material', 'color: red');
				setTimeout(function() {
		    		removerCorVermelha(entity[1]);
				}, 1000);
			}
		});
	}

	if (entity[2] != null){
		entity[2].addEventListener('click', function () { 
			var g = entity[2].getAttribute('text', 'value');
			if (rightAnswers.includes(g.value)  && !historico.includes(g.value)){
				entity[2].setAttribute('material', 'color: green');
				rightAnswers.remove(g.value);
		        historico.push(g.value);
		        checkIfDone();
			}
			else if (!historico.includes(g.value)){
				entity[2].setAttribute('material', 'color: red');
				setTimeout(function() {
		    		removerCorVermelha(entity[2]);
				}, 1000);
			}
		});
	}

	if (entity[3] != null){
		entity[3].addEventListener('click', function () { 
			var g = entity[3].getAttribute('text', 'value');
			if (rightAnswers.includes(g.value)  && !historico.includes(g.value)){
				entity[3].setAttribute('material', 'color: green');
				rightAnswers.remove(g.value);
		        historico.push(g.value);
		        checkIfDone();
			}
			else if (!historico.includes(g.value)){
				entity[3].setAttribute('material', 'color: red');
				setTimeout(function() {
		    		removerCorVermelha(entity[3]);
				}, 1000);
			}
		});
	}

	if (entity[4] != null){
		entity[4].addEventListener('click', function () { 
			var g = entity[4].getAttribute('text', 'value');
			if (rightAnswers.includes(g.value)  && !historico.includes(g.value)){
				entity[4].setAttribute('material', 'color: green');
				rightAnswers.remove(g.value);
		        historico.push(g.value);
		        checkIfDone();
			}
			else if (!historico.includes(g.value)){
				entity[4].setAttribute('material', 'color: red');
				setTimeout(function() {
		    		removerCorVermelha(entity[4]);
				}, 1000);
			}
		});
	}

	if (entity[5] != null){
		entity[5].addEventListener('click', function () { 
			var g = entity[5].getAttribute('text', 'value');
			if (rightAnswers.includes(g.value)  && !historico.includes(g.value)){
				entity[5].setAttribute('material', 'color: green');
				rightAnswers.remove(g.value);
		        historico.push(g.value);
		        checkIfDone();
			}
			else if (!historico.includes(g.value)){
				entity[5].setAttribute('material', 'color: red');
				setTimeout(function() {
		    		removerCorVermelha(entity[5]);
				}, 1000);
			}
		});
	}

	if (entity[6] != null){
		entity[6].addEventListener('click', function () { 
			var g = entity[6].getAttribute('text', 'value');
			if (rightAnswers.includes(g.value)  && !historico.includes(g.value)){
				entity[6].setAttribute('material', 'color: green');
				rightAnswers.remove(g.value);
		        historico.push(g.value);
		        checkIfDone();
			}
			else if (!historico.includes(g.value)){
				entity[6].setAttribute('material', 'color: red');
				setTimeout(function() {
		    		removerCorVermelha(entity[6]);
				}, 1000);
			}
		});
	}

	if (entity[7] != null){
		entity[7].addEventListener('click', function () { 
			var g = entity[7].getAttribute('text', 'value');
			if (rightAnswers.includes(g.value)  && !historico.includes(g.value)){
				entity[7].setAttribute('material', 'color: green');
				rightAnswers.remove(g.value);
		        historico.push(g.value);
		        checkIfDone();
			}
			else if (!historico.includes(g.value)){
				entity[7].setAttribute('material', 'color: red');
				setTimeout(function() {
		    		removerCorVermelha(entity[7]);
				}, 1000);
			}
		});
	}

	if(terminado){
		a.addEventListener('click', function () {
			console.log("teste");
			window.location.replace("../../../patients_side/dashboard.html");
		});
	}

};


function inserirPergunta(){
	var entityPergunta = sceneEl.querySelector('#pergunta');
	entityPergunta.setAttribute('geometry', {
	  primitive: 'plane',
	  width: 2.5,
	  height: 0.2
	  });
	  entityPergunta.setAttribute('material', {
	    color: 'black',
	    opacity: '0.2'
	  });
	  entityPergunta.setAttribute('position', '0 2.5 -1.5');
	  entityPergunta.setAttribute('text', {
	    value: question,
	    color: 'white',
	    align: 'center',
	    width: '2',
	    align: 'center'
	  });

//	geometry="primitive: plane; width: 3.5; height: auto" material="color: blue" position="0 2.5 -1.5"
	//console.log(entityPergunta);
};

function generateBtn(){
	var y = 2.1;

	for (var i = 0; i < answers.length; i++) {
		entity.push(document.createElement('a-entity'));
		entity[i].setAttribute('id', "resposta" + i);
		entity[i].setAttribute('geometry', {
			primitive: 'plane',
			width: 2.5,
			height: 0.2
		});
		entity[i].setAttribute('material', {
			color: 'white',
			opacity: 0.8
		});
		entity[i].setAttribute('position', '0 ' + y + ' -1.5');
		entity[i].setAttribute('text', {
			value: answers[i],
			color: 'black'
		});

		//
		sceneEl.appendChild(entity[i]);
		//console.log(entity[i]);
		
		y-= 0.25;
	}
};


/*Shuffles array*/
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
};

function removerCorVermelha(ent){
	ent.setAttribute('material', 'color: white');
};

function checkIfDone(){
	if (rightAnswers.length == 0) {
        
        //$("#message").append("<h2>MUITO BEM! CONCLUIU A TAREFA COM SUCESSO!</h2>");
        
        var v = sceneEl.querySelectorAll('a-entity');
        console.log(v);

        for (var i = 0; i < v.length; i++) {
        	v[i].parentNode.removeChild(v[i]);
        }

        var a = document.createElement('a-entity');
		a.setAttribute('id', "fim");
		a.setAttribute('geometry', {
			primitive: 'plane',
			width: 2.5,
			height: 1
		});
		a.setAttribute('material', {
			color: 'green'
		});
		a.setAttribute('position', '0  2 -1.5');
		a.setAttribute('text', {
			value: "MUITO BEM! CONCLUIU A TAREFA COM SUCESSO! Aguarde.",
			color: 'white'
		});

		//
		sceneEl.appendChild(a);

		setTimeout(function() {
			window.location.replace("../../../patients_side/dashboardVR.html");
          }, 1500);
	}
};



Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

