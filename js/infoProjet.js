
window.onload = function(){
    let aoProjets = document.querySelectorAll(".desc");

    for(let i = 0;i<aoProjets.length;i++){
        aoProjets[i].addEventListener("click", function(){
            test(aoProjets[i]);
        });
    }
}


function test(objetProjet){
    console.log(objetProjet.id);
    var animProjets = new animProjet(0,0,objetProjet.id);
    let oRectangle3 = document.querySelector('.rectangleProjet3');
    console.log(oRectangle3);

    let texte = document.querySelector
}