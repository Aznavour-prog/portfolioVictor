class animProjet{
    constructor(hauteur,largeur,id){
        
        this.hauteur = hauteur;
        this.largeur = largeur;
        this.id = id;
        this.creerRectangle();
    }


    //fonction utilisé pour créer le rectangle et ses classes css 
    creerRectangle(){
        //création des éléments HTML et des classe CSS
        let rectangle1 = document.createElement('div');
        let rectangle2 = document.createElement('div');
        
        rectangle2.classList.add('rectangleProjet2');
        rectangle1.classList.add('rectangleProjet');

        //selection de la page principale afin de parenter mes nouveaux éléments 
        let page = document.querySelector("#page");
        let body = document.querySelector("body");
        body.style.height = "100%";
        body.style.overflowY = "hidden";
        page.appendChild(rectangle2);
        page.appendChild(rectangle1);

        //ajout d'un event listener afin de pouvoir générer le texte dépendament de l'id de la div cliqué
        rectangle1.addEventListener("animationend", this.creerInfo(page));
        rectangle1.style.display = "block";
        rectangle2.style.display = "block";
        rectangle1.style.opacity = 1;
        rectangle2.style.opacity = 1;
        let objet = this;
        let gotoTop = document.querySelector(".gototop");
        //gotoTop.style.opacity =0;
        body.scrollTop = 500;
    }
    
    //fonction qui créer les éléments de la div créer par créerRectangle()
    creerInfo(page){
       

        //création de tout les éléments HTML
        let rectangle3 = document.createElement('div');
        let oDelete = document.createElement('div');
        let aDelete = document.createElement('a');
        let iDelete = document.createElement('i');
        let pInfo = document.createElement('p');
        //ajout des classes CSS
        iDelete.classList.add("icon-cross");
        pInfo.classList.add("oDivInfo");
        let objet = this;
        //ajout d'un event listener pour enlever l'information
        aDelete.addEventListener("click", function(){
            objet.clearBody();
        });
        rectangle3.classList.add('rectangleProjet3');
        rectangle3.style.display = "block";
        rectangle3.style.opacity = 1;
        //parentage des éléments à la division principal
        page.appendChild(rectangle3); 
        rectangle3.appendChild(oDelete);
        rectangle3.appendChild(pInfo);
        oDelete.appendChild(aDelete);
        aDelete.appendChild(iDelete);
        let oDivImage = document.createElement('div');
        oDivImage.classList.add('oDivImage');
        let oImageGrande = document.createElement('img');
        oImageGrande.classList.add('oImageGrande');
        oDivImage.classList.add('oScreening');
        rectangle3.appendChild(oDivImage);
        let aoImg = [];
        rectangle3.appendChild(oImageGrande);
        let oArray = [];
        

        
        //selon le projet choisie je voulais avoir des images différentes et un texte différent (pour certains projet je ne savais pas quel images mettrent donc je n'ai juste pas d'array pour l'instant)
        switch(this.id){
            case 'projet1' :
                aoImg = ['captureAffiche.jpg','captureJeu.jpg','captureJeuTitre.jpg'];
                pInfo.innerHTML = "<h3 style='color:black'>Krypt :</h3> Dans ce projet je voulais faire le plus possible, j'était responsable du personnage principale (modélisation et animation) et de plusieurs fonctionnalité intégré dans ce petit jeu, je m'étais aussi occupé du système de dégat et le controlleur d'animation que notre personnage allait utilisé.";
            break;
            case 'projet2':
                aoImg = ['captureArcade.jpg','captureArcadeWireframe.jpg','captureArcadeJeu.jpg'];
                pInfo.innerHTML = "<h3 style='color:black'>Animation de 3D pour le Timcade :</h3> La Timcade était un projet d'équipe, j'ai fait la production de quelques modèles de l'arcade principale et l'animation de plusieurs des moments de la cinématique. Je m'étais aussi occupé du scénario même si celui-ci était très simple pour le projet qui était demandé.";
            break;
            case 'projet3':
                aoImg = ['theLonelySniper.jpg','compositionPersonnage.jpg','compositionPersonnage2.jpg'];
                pInfo.innerHTML = "<h3 style='color:black'>The lonely sniper, un projet Blender :</h3> Ce projet était intéressant puisque j'ai du produire un projet tout en apprenant un nouveau programme de modélisation 3D. Le projet avait été fait dans blender et j'ai utilisé le projet dans des compositions photoshop puisque je n'ai pas eu le temps de faire un produit parfait.";
            break;
            case 'projet4':
                //Je n'ai pas d'image ici, je vais donc prendre des images au hasard
                aoImg = ['portfolio-6.jpg','portfolio-3.jpg','portfolio-5.jpg'];
                pInfo.innerHTML = "<h3 style='color:black'>Projet de PHP pour la TDI de Maisonneuve :</h3> Dans ce projet je me suis occupé de tout ce qui était back-end, nous avons fait ce back-end entièrement en PHP et en AJAX. J'avais fait aussi quelques maquettes pour le concept de design original mais celui-ci a changé énormément au cours du projet.";
            break;
        }

        //initiation de la source de la grande image pour la première du carroussel
        oImageGrande.src = '../images/' + aoImg[0];

        //parentage de la div du carroussel a la div principale et initiation de la src des images
        for(let i = 0;i<3;i++){
            oArray[i] = document.createElement('img');
            oArray[i].classList.add('imageCaroussel');
            oArray[i].src = '../images/' + aoImg[i];
            oDivImage.appendChild(oArray[i]);
            oArray[i].addEventListener('click',function(){
                objet.changeImage(oArray[i]);
            });
        }
    }


    //fonction qui est utilisé afin de pouvoir recliqué sur un projet ()
    clearBody(){
        let body = document.querySelector("body"); 
        let page = document.querySelector("#page");
        let rectangle1 = document.querySelector(".rectangleProjet");
        let rectangle2 = document.querySelector(".rectangleProjet2");
        let rectangle3 = document.querySelector(".rectangleProjet3");
        rectangle1.style.opacity = 0;
        rectangle2.style.opacity = 0;
        rectangle3.style.opacity = 0;
        //utilisé afin de détruire les anciennes divisions de l'élément principal
        setTimeout(function(){
            rectangle1.parentNode.removeChild(rectangle1);
            rectangle2.parentNode.removeChild(rectangle2);
            rectangle3.parentNode.removeChild(rectangle3);
        },800);
        //utilisé afin de pouvoir redonner l'opportunité de scroll pour l'utilisateur
        body.style.height = "";
        body.style.overflowY = "";
    }


    //fonction utilisé sur les images de la division d'information afin de pouvoir changer la grosse image
    changeImage(imageTarget){
        let oImageCaroussel = [];

        //loop utilisé pour enlever la possibilité de changer l'image pendant l'animation de changement
        for(let i = 0;i<3;i++){
            oImageCaroussel[i] = document.querySelectorAll('.imageCaroussel')[i];
            oImageCaroussel[i].style.pointerEvents = 'none';
        }
        console.log(oImageCaroussel);
        let divImage = document.querySelector('.oImageGrande');
      
                  divImage.style.animationName = 'animImage';
     


        //utilisé afin de changer l'image et afin de pouvoir rechanger l'image 
        setTimeout(function(){
            divImage.src = imageTarget.src;
            
            setTimeout(function(){
                divImage.style.animationName = '';
                for(let i = 0;i<3;i++){
                    
                    oImageCaroussel[i].style.pointerEvents = '';
                }
            },700)
        },1000);
        
    }
}