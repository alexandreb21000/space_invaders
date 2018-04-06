//Événement clic bouton (submit)
document.getElementById('bouton').addEventListener ('click', Valider);

//Fonction valider (submit)
function Valider(event){
    
    var error = 0;
    var missPseudo = document.getElementById("missPseudo") ;
    var pseudo = document.getElementById("pseudo");
    localStorage.setItem("pseudo", pseudo.value);
    
    if (document.getElementById("pseudo").value == ''){
        error++;
        missPseudo.textContent = 'Pseudo manquant';
    } else {
        missPseudo.innerHTML = '';
    }

    if(error > 0){
        event.preventDefault();
    }
}