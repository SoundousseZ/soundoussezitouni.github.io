navigator.geolocation.getCurrentPosition(allow, reject);

let lat = null;
let lon = null;

function actualiser() {
    document.getElementById('actualiser').addEventListener('click', function () {
        window.location.reload();
    })
}


function allow(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    let url = " https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon + "&current_weather=true";

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data)
            document.getElementById('temps').innerHTML = '<p class="me-2 fs-2">' + Math.floor(data.current_weather.temperature) + "°C </p>"

            if (data.current_weather.weathercode == 0) {
                document.getElementById('temps').innerHTML += '<i class="fa-solid fa-sun"></i>';
                document.body.style.background = "no-repeat 5px -100px/800px url('img/0.png'), rgb(39, 186, 202)"
            } else if (data.current_weather.weathercode == 1 || 2 || 3) {
                document.getElementById('temps').innerHTML += '<i class="fa-solid fa-cloud-sun"></i>';
                document.body.style.background = "no-repeat 5px -100px/1000px url('img/cloud-sun.png'), rgb(39, 186, 202)"
            } else if (data.current_weather.weathercode == 45 || 48) {
                document.getElementById('temps').innerHTML += '<i class="fa-solid fa-smog"></i>';
                document.getElementById('glass').style.background = " rgba(230, 238, 240,0.4)";
                document.body.style.background = "no-repeat center center/2000px url('img/fog.png'), rgb(89, 115, 122)"
            } else if (data.current_weather.weathercode == 51 || 53 || 55) {
                document.getElementById('temps').innerHTML += '<i class="fa-solid fa-cloud-rain"></i>';
                document.getElementById('glass').style.background = " rgba(181, 197, 199,0.58)";
                document.body.style.background = "repeat-x 0px 0px/900px url('img/drizzle.png'), rgb(162, 178, 179)";
            } else if (data.current_weather.weathercode == 56 || 57) {
                document.getElementById('temps').innerHTML += '<i class="fa-solid fa-icicles"></i>';
                document.getElementById('glass').style.cssText = " background :rgba(195, 206, 224,0.3); border : 1px solid rgb(195, 206, 224) "
                document.getElementById('info').innerHTML += '<p>Risque de Verglas</p>';
                document.body.style.background = "repeat-x 0px -255px/ 900px url('img/freeze2.png'), rgb(227, 229, 232)";
            } else if (data.current_weather.weathercode == 61 || 63 || 65) {
                document.getElementById('temps').innerHTML += '<i class="fa-solid fa-cloud-showers-heavy"></i>';
                document.getElementById('glass').style.background = " rgba(153, 178, 201,0.3)";
                document.body.style.background = " 0px -200px/ 800px url('img/pluie1.gif'), rgb(78, 118, 156)";
            } else if (data.current_weather.weathercode == 66 || 67) {
                document.getElementById('temps').innerHTML += '<p><i class="fa-solid fa-cloud-showers-heavy"></i></p>';
                document.getElementById('info').innerHTML += '<p>Risque de Verglas</p>';
                document.getElementById('glass').style.background = " rgba(184, 205, 207,0.58)";
                document.body.style.background = " 0px 0px/ 555px url('img/pluie1.gif'),rgb(142, 177, 191)";
            } else if (data.current_weather.weathercode == 71 || 73 || 75) {
                document.getElementById('temps').innerHTML += '<i class="fa-solid fa-snowflake"></i>';
                document.getElementById('glass').style.background = " rgba(209, 231, 240,0.58)";
                document.body.style.background = " 0px 0px/ 450px url('img/snow.gif'),rgb(171, 206, 219)";
            } else if (data.current_weather.weathercode == 77) {
                document.getElementById('temps').innerHTML += '<i class="fa-solid fa-cloud-meatball"></i>';
                document.getElementById('glass').style.background = " rgba(209, 231, 240,0.58)";
                document.body.style.background = " 0px 0px/ 700px url('img/snowball.gif'),rgb(171, 206, 219)";
            } else if (data.current_weather.weathercode == 80 || 81 || 82) {
                document.getElementById('temps').innerHTML += '<i class="fa-solid fa-cloud-showers-water"></i>';
                document.getElementById('glass').style.background = " rgba(106, 127, 148,0.58)";
                document.body.style.background = " 0px 0px/ 1100px url('img/shower-rain.gif'),rgb(67, 88, 110)";
            } else if (data.current_weather.weathercode == 85 || 88) {
                document.getElementById('temps').innerHTML += '<i class="fa-solid fa-snowflake"></i>';
                document.getElementById('glass').style.background = " rgba(209, 231, 240,0.58)";
                document.body.style.background = " 0px 0px/ 100% url('img/shower-snow.gif'),rgb(153, 181, 191)";
            } else if (data.current_weather.weathercode == 95) {
                document.getElementById('temps').innerHTML += '<i class="fa-solid fa-cloud-bolt"></i>';
                document.getElementById('glass').style.background = " rgba(30, 46, 87,0.58)";
                document.body.style.background = "no-repeat url('img/thunder.png') center center /900px ,rgba(6,2,43,1)";
            } else {
                document.getElementById('temps').innerHTML += ' <i class="fa-solid fa-meteor"></i>';
                document.getElementById('glass').style.background = " rgba(30, 46, 87,0.58)";
                document.body.style.background = "no-repeat url('img/thunder.png') center center /900px , 0px 0px/ 1600px url('img/shower-rain.gif'),rgba(6,2,43,1)";
            }
        })
    actualiser()

}


function reject(error) {
    let message = "";
    switch (error.code) {
        case 1:
            message = "Permission refusée";
            break;
        case 2:
            message = "Position non disponible";
            break;
        case 3:
            message = "Dépassement de délai";
            break;
        case 4:
            message = "Erreur inconnue";
            break;
    }
    console.log(message);
    alert(message)
}



