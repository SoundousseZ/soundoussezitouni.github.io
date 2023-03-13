


let btn = document.querySelectorAll('button');
let chat = document.getElementById('chat');
let yourName = document.getElementById('yourName');



function scroll() {
  chat.scrollTop += chat.scrollHeight;
}

function Autre(message) {
  let divAutre = document.createElement('div')
  divAutre.id = 'autre';
  divAutre.className = 'd-flex flex-row-reverse animate__animated animate__backInUp';

  let divImage = document.createElement('div');
  divImage.className = ' profil profil-autre rounded-circle text-center ms-4';


  let imgAutre = document.createElement('img');
  imgAutre.src = 'img/cactus.png';

  let textAutre = document.createElement('div')
  textAutre.innerHTML = message;
  textAutre.className = 'autre';

  chat.appendChild(divAutre)
  divAutre.append(divImage, textAutre)
  divImage.appendChild(imgAutre)
  scroll()
}

function soundousse(message) {
  let divAutre = document.createElement('div');
  divAutre.id = 'soundousse';
  divAutre.className = 'd-flex flex-row animate__animated animate__backInUp';

  let divImage = document.createElement('div');
  divImage.className = 'profil profil-moi rounded-circle text-center me-4';


  let imgAutre = document.createElement('img');
  imgAutre.src = 'img/chat.png';

  let textAutre = document.createElement('div')
  textAutre.innerHTML = message;
  textAutre.className = 'soundousse';

  chat.appendChild(divAutre)
  divAutre.append(divImage, textAutre)
  divImage.appendChild(imgAutre)
  scroll()
}


function nom() {
  let name = document.getElementById('name').value;
  return name
}


  btn[1].addEventListener("click", function (e) {
    e.preventDefault();
    Autre('<p> C’est super !  Je veux en savoir plus</p>');
    setTimeout(soundousse, 700, "<p> Génial ! Mais tout d'abord, j'aimerais en connaître plus sur toi. Comment t'appelles-tu ?</p> ");
    btn[1].style.display = "none";
    btn[2].style.display = "none";
    yourName.style.display = "block";
  })


  document.getElementById('send').addEventListener("click", function () {
    Autre("<p> je m'appelle " + nom() + "<p>");
    setTimeout(soundousse, 700, "<p> Enchanté " + nom() + ". <br>Je suis ravi de faire ta connaissance et de discuter avec toi pour te faire découvrir mon parcours (ne t'inquiète pas, ça ne sera pas long 😄) Qu’aimerais-tu apprendre en premier sur moi ?</p>");
    yourName.style.display = "none";
    btn[4].style.display = "inline";
    btn[3].style.display = "inline";
  })


  btn[3].addEventListener("click", function () {
    Autre('<p> Où t’es-tu formée et quel diplôme as-tu?</p> ');
    setTimeout(soundousse, 700, "<p> Avant ma reconversion dans les métiers du numérique, j’étais (et suis toujours) une grande passionnée de littérature. <br> C’est la raison pour laquelle en 2020 j’ai obtenu mon baccalauréat série littéraire et que de 2020 à 2021 j’ai découvert le milieu universitaire en première année de Licence lettre moderne. Après une année à travailler, j'ai finalement décidé de me réorienter vers le développement web (j'y porte un grand intérêt depuis de nombreuses années). Je suis depuis décembre 2O22 jusqu’à octobre 2023 en formation de développeur web et mobile à l’AFPA.</p> ");
    btn[4].style.display = "none";
    btn[3].style.display = "none";
    btn[5].style.display = "inline";
  })

  btn[4].addEventListener("click", function () {
    Autre('<p> Parle moi de tes compétences</p> ');
    setTimeout(soundousse, 700, "<p> J'ai pu développer un bon sens de la communication et apprendre à travailler en toute autonomie grâce à mon expérience en tant que téléconseillère à la CPAM. Je suis également très curieuse ce qui m'a permis d'apprendre l'anglais et la peinture en autodidacte.</p><p>Mes hard skills :<br>(Étant en cours d'apprentissage, certains de ces langages sont en cours d’acquisition.)</p><p>Front end<br>HTML , CSS, SASS, BOOTSTRAP, JAVASCRIPT, WORDPRESS, RESPONSIVE DISIGN </p><p>Back-end<br>PHP , SYMPHONY, SQL</p><p>Outils de versioning :<br> Git</p><p> (Si tu souhaites en découvrir plus sur mes expériences professionnelles je t’invite à <a href=\"pdf/ZITOUNI_CV_Stage.pdf\">télécharger mon cv</a>)</p>");
    btn[4].style.display = "none";
    btn[3].style.display = "none";
    btn[6].style.display = "inline";
  })

  btn[5].addEventListener("click", function () {
    Autre('<p>Intéressant , quels sont les skills que tu as acquis au cours de ton parcours ?</p> ');
    setTimeout(soundousse, 700, "<p> J'ai pu développer un bon sens de la communication et apprendre à travailler en toute autonomie grâce à mon expérience en tant que téléconseillère à la CPAM. Je suis également très curieuse ce qui m'a permis d'apprendre l'anglais et la peinture en autodidacte.</p><p>Mes hard skills :<br>(Étant en cours d'apprentissage, certains de ces langages sont en cours d’acquisition.)</p><p>Front end<br>HTML , CSS, SASS, BOOTSTRAP, JAVASCRIPT, WORDPRESS, RESPONSIVE DISIGN </p><p>Back-end<br>PHP , SYMPHONY, SQL</p><p>Outils de versioning :<br> Git</p><p> (Si tu souhaites en découvrir plus sur mes expériences professionnelles je t’invite à <a href=\"pdf/ZITOUNI_CV_Stage.pdf\">télécharger mon cv</a>)</p>");
    btn[5].style.display = "none";
    btn[7].style.display = "inline";
  })

  btn[6].addEventListener("click", function () {
    Autre('<p> Intéressant, j’aimerais en connaitre plus sur ton parcours de formation</p>');
    setTimeout(soundousse, 700, "<p> Avant ma reconversion dans les métiers du numérique, j’étais (et suis toujours) une grande passionnée de littérature. <br> C’est la raison pour laquelle en 2020 j’ai obtenu mon baccalauréat série littéraire et que de 2020 à 2021 j’ai découvert le milieu universitaire en première année de Licence lettre moderne. Après une année à travailler, j'ai finalement décidé de me réorienter vers le développement web (j'y porte un grand intérêt depuis de nombreuses années). Je suis depuis décembre 2O22 jusqu’à octobre 2023 en formation de développeur web et mobile à l’AFPA.</p> ");
    btn[6].style.display = "none";
    btn[7].style.display = "inline";
  })

  btn[7].addEventListener("click", function () {
    Autre('<p> D’accord,  maintenant je souhaite voir de quoi tu es capable, as-tu un portfolio avec quelques-uns de tes projets?</p> ');
    setTimeout(soundousse, 700, "<p>Avec plaisir 😁 ,<br>Voici quelques-uns de mes préférés :</p><p><a href=\"portfolio/fiasco/index.html\">The Fiasco</a><br>Site de restauration moderne</p><p><a href=\"portfolio/Bootstrap/index.html\">Site CV</a><br>Réaliser entièrement avec bootstrap</p><p><a href=\"portfolio/METEO/index.html\">Météo</a><br>Météo en temps réel</p>");
    btn[7].style.display = "none";
    btn[8].style.display = "inline";
  })

  btn[8].addEventListener("click", function () {
    Autre('<p> Tu peux compter sur moi pour aller consulter tes autres réalisations 😉 </p> ');
    setTimeout(soundousse, 700, "<p>Merci " + nom() + ",<br>Nous sommes arrivés à la fin de ma présentation. N’hésite pas à te balader sur le site pour en découvrir plus sur mon univers.</p><p>Je reste disponible si tu souhaites échanger un peu plus avec moi par <a href=\"mailto:soundousse.Z@outlook.fr?subject=Hello%20👩🏻‍💻\"title=\"Email\">Mail,</a>  <a href=\"tel:0766465461\" title=\"Numéro\">Téléphone</a> ou <a href=\"https://www.linkedin.com/in/soundousse-zitouni-b5272a25b/\">indeed</a>.</p><p>A bientôt 👋 </p>");
    btn[8].style.display = "none";

  })


  btn[2].addEventListener("click", function () {
    Autre("<p> Ça a l'air intéressant, mais je n'ai pas le temps de discuter avec toi.</p> ");
    setTimeout(soundousse, 700, "<p> Dommage ! J’aurais aimé avoir plus de temps pour t’expliquer mon parcours 🙁 . <br> Si tu es pressé tu peux toujours consulter mon portfolio mais aussi en connaitre plus sur mes expériences et mes compétences. J’éspère avoir l’occasion de converser avec toi plus tard.<br> Bye !</p> ");
    btn[1].style.display = "none";
    btn[2].style.display = "none";
  })



