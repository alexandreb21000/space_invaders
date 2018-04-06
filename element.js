
var form21 = new Sprite ( 'form1.png', 450, 50);
var form1 = new Sprite ( 'form2.png', 550, 50);
var form2 = new Sprite ( 'form3.png', 650, 50);
var form3 = new Sprite ( 'form4.png', 750, 50);
var form4 = new Sprite ( 'form1.png', 850, 50);
var form5 = new Sprite ( 'form2.png', 950, 50);
var form6 = new Sprite ( 'form4.png', 1050,50);

var form7 = new Sprite ( 'form1.png', 300, 150);
var form8 = new Sprite ( 'form2.png', 400, 150);
var form9 = new Sprite ( 'form3.png', 500, 150);
var form10 = new Sprite ( 'form4.png', 600, 150);
var form11 = new Sprite ( 'form1.png', 700, 150);
var form12 = new Sprite ( 'form2.png', 800, 150);
var form13 = new Sprite ( 'form4.png', 900, 150);

var form14 = new Sprite ( 'form1.png', 450, 250);
var form15 = new Sprite ( 'form2.png', 550, 250);
var form16 = new Sprite ( 'form3.png', 650, 250);
var form17 = new Sprite ( 'form4.png', 750, 250);
var form18 = new Sprite ( 'form1.png', 850, 250);
var form19 = new Sprite ( 'form2.png', 950, 250);
var form20 = new Sprite ( 'form4.png', 1050, 250);



var missile = new Sprite ('missile.png', 0, 0);
missile.display = "none";

var missile2 = new Sprite ('missile2.png', 0, 0);
missile2.display= "none";

/*var explose = new Sprite ('explose.gif', 0, 0);
explose.display = "none";*/  

var vaisseau = new Sprite ( 'vaisseau.png', 600, 470);


document.onkeydown = function( event ) {
    if ( event.keyCode == 37) {                         //déplacement vers la gauche 
        vaisseau.left -= 10;
    } else if ( event.keyCode == 39 ) {                 //déplacement vers la droite
        vaisseau.left += 10;
    }
   

if ( vaisseau.left < 0 ) {                             //Détection des bords de la page // évite que le vaisseau déborde
    vaisseau.left = 0;
}
if (vaisseau.left > document.body.clientWidth - vaisseau._node.width ) {
    vaisseau.left = document.body.clientWidth - vaisseau._node.width
}
if ( event.keyCode == 32) {
    if ( missile.display == "none" ) {
    missile.display = "block";
    missile.left = vaisseau.left + (vaisseau._node.width - missile._node.width) / 2 ;
    missile.top = vaisseau.top;
    missile.startAnimation( moveMissile, 20 );
        }
    }  
    if ( event.keyCode == 96) {
        if ( missile2.display == "none" ) {
            for(var i=1; i<=21; i++ ) {
                var form = window["form"+i];}
        missile2.display = "block";
        missile2.left = form5.left + (form5._node.width - missile2._node.width) / 2 ;
        missile2.top = form5.top;
        missile2.startAnimation( moveMissile2, 20 );
        }
}
};


var Points = 0;
if ( Points > 4) {
    document.location.href="win.html";
    localStorage.clear();
}

function moveMissile(missile){
    

    missile.top -= 8 ; 
    if ( missile.top < -40 ) { 
        missile.stopAnimation();
        missile.display = "none"
    }

    for(var i=1; i<=21; i++ ) {
        var form = window["form"+i];
        if ( form.display == 'none') continue;
        if ( missile.checkCollision( form )) {
        Points++;
        localStorage.setItem(Points, Points++);
        document.getElementById('Score').value = Points;
        missile.stopAnimation();
        missile.display = "none";
        form.stopAnimation();
        form.display="none";
        explose.display='block';
        }
        if (Points >= 42) {
            document.location.href="win.html";
        }
    }
}

function moveMissile2(missile2){
    

    missile2.top -= 8 ; 
    if ( missile2.top < -40 ) { 
        missile2.stopAnimation();
        missile2.display = "none"
    }

    for(var i=1; i<=21; i++ ) {
        var form = window["form"+i];
        if ( form.display == 'none') continue;
        if ( missile2.checkCollision( vaisseau )) {
            document.location.href="loose.html";
            localStorage.clear(); //Vide les données stockées
        missile2.stopAnimation();
        missile.display = "none";
        }
    }
}


function moveFormToLeft ( form ) {
    form.left -= 3;
    if ( form.left <= 0 ) {
        form.top += 50; 
        form.startAnimation ( moveFormToRight, 20 );
    }
    for(var i=1; i<=21; i++ ) {
        var form = window["form"+i];
        if ( form.display == 'none') continue;
        if ( vaisseau.checkCollision( form )) {
        form.stopAnimation();
        form.display = "none";
        document.location.href="loose.html";
        localStorage.clear(); //Vide les données stockées
        }
    }
}


function moveFormToRight ( form ) {
    form.left += 3;
    if ( form.left > document.body.clientWidth - form._node.width ) {
        form.top += 50; 
        form.startAnimation ( moveFormToLeft, 20 );
    }
        for(var i=1; i<=21; i++ ) {
            var form = window["form"+i];
            if ( form.display == 'none') continue;
            if ( vaisseau.checkCollision( form )) {
            form.stopAnimation();
            form.display = "none";
            document.location.href="loose.html";
            localStorage.clear(); //Vide les données stockées

        }
    }
}
for(var i=1; i<=21; i++ ) {
    window["form" + i].startAnimation( moveFormToRight, 20)
}

document.getElementById('pseudo').value = localStorage.getItem("pseudo");






  
