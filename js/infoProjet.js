
window.onload = function(){

    //au moment de la création de la page, ajout des events listener pour les projets
    let aoProjets = document.querySelectorAll(".desc");

    for(let i = 0;i<aoProjets.length;i++){
        aoProjets[i].addEventListener("click", function(){
            test(aoProjets[i]);
        });
    }
}

//fonction qui va créer l'objet du projet
function test(objetProjet){
    console.log(objetProjet.id);
    var animProjets = new animProjet(0,0,objetProjet.id);
    let oRectangle3 = document.querySelector('.rectangleProjet3');
    console.log(oRectangle3);

    
}