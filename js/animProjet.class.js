class animProjet{
    constructor(hauteur,largeur,id){
        
        this.hauteur = hauteur;
        this.largeur = largeur;
        this.id = id;
        this.creerRectangle();
    }

    creerRectangle(){
        
        let rectangle1 = document.createElement('div');
        let rectangle2 = document.createElement('div');
        
        rectangle2.classList.add('rectangleProjet2');
        rectangle1.classList.add('rectangleProjet');
        let page = document.querySelector("#page");
        let body = document.querySelector("body");
        body.style.height = "100%";
        body.style.overflowY = "hidden";
        page.appendChild(rectangle2);
        page.appendChild(rectangle1);
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
    

    creerInfo(page){
        console.log('this');
        let rectangle3 = document.createElement('div');
        let oDelete = document.createElement('div');
        let aDelete = document.createElement('a');
        let iDelete = document.createElement('i');
        let pInfo = document.createElement('p');
        iDelete.classList.add("icon-cross");
        pInfo.classList.add("oDivInfo");
        let objet = this;
        aDelete.addEventListener("click", function(){
            objet.clearBody();
        });
        rectangle3.classList.add('rectangleProjet3');
        rectangle3.style.display = "block";
        rectangle3.style.opacity = 1;
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
        let aoImg = ['portfolio-2.jpg','portfolio-3.jpg','portfolio-5.jpg'];
        rectangle3.appendChild(oImageGrande);
        let oArray = [];
        for(let i = 0;i<3;i++){
            oArray[i] = document.createElement('img');
            oArray[i].classList.add('imageCaroussel');
            oArray[i].src = '../images/' + aoImg[i];
            oDivImage.appendChild(oArray[i]);
            oArray[i].addEventListener('click',function(){
                objet.changeImage(oArray[i]);
            });
        }

        oImageGrande.src = '../images/' + aoImg[0];
        console.log(this.id);
        switch(this.id){
            case 'projet1' :
                pInfo.innerHTML = "projet1 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            break;
            case 'projet2':
                pInfo.innerHTML = "projet2 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            break;
            case 'projet3':
                pInfo.innerHTML = "projet3 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            break;
            case 'projet4':
                pInfo.innerHTML = "projet4 : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
            break;
        }
    }

    clearBody(){
        let body = document.querySelector("body"); 
        let page = document.querySelector("#page");
        let rectangle1 = document.querySelector(".rectangleProjet");
        let rectangle2 = document.querySelector(".rectangleProjet2");
        let rectangle3 = document.querySelector(".rectangleProjet3");
        rectangle1.style.opacity = 0;
        rectangle2.style.opacity = 0;
        rectangle3.style.opacity = 0;
        setTimeout(function(){
            rectangle1.parentNode.removeChild(rectangle1);
            rectangle2.parentNode.removeChild(rectangle2);
            rectangle3.parentNode.removeChild(rectangle3);
        },800);
        body.style.height = "";
        body.style.overflowY = "";
    }

    changeImage(imageTarget){
        let oImageCaroussel = [];

        for(let i = 0;i<3;i++){
            oImageCaroussel[i] = document.querySelectorAll('.imageCaroussel')[i];
            oImageCaroussel[i].style.pointerEvents = 'none';
        }
        console.log(oImageCaroussel);
        let divImage = document.querySelector('.oImageGrande');
      
                  divImage.style.animationName = 'animImage';
     


       
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