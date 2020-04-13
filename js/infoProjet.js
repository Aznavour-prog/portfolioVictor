
window.onload = function(){

    //au moment de la création de la page, ajout des events listener pour les projets
    let aoProjets = document.querySelectorAll(".desc");
    var createImage = function(src, title) { 
        var img = new Image(); 
        img.src = src; 
        img.alt = title; 
        img.title = title; 
        return img; 
      }; 
      // array of images 
        var images = []; 
        var sSrc = ['captureAffiche.jpg','captureJeu.jpg','captureJeuTitre.jpg','captureArcade.jpg','captureArcadeWireframe.jpg','captureArcadeJeu.jpg','theLonelySniper.jpg','compositionPersonnage.jpg','compositionPersonnage2.jpg','portfolio-6.jpg','portfolio-3.jpg','portfolio-5.jpg'];
      // push two images to the array 
      for(let i = 0;i<sSrc.length;i++){
        images[i] = createImage('/images/' + sSrc[i], "image"+i); 
      }
      console.log(images);
    for(let i = 0;i<aoProjets.length;i++){
        aoProjets[i].addEventListener("click", function(){
            test(aoProjets[i],images);
        });
    }
}

//fonction qui va créer l'objet du projet
function test(objetProjet,images){
    console.log(objetProjet.id);
    
       
       
      
      // output 
        console.log(images);
    var animProjets = new animProjet(0,0,objetProjet.id,images);
    let oRectangle3 = document.querySelector('.rectangleProjet3');
    console.log(oRectangle3);

    
}