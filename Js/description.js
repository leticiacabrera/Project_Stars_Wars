var index = {};
const urlDescription = "https://swapi.dev/api/people/";
var objectStarsWars = {};

function get(){
    var indexPeople = localStorage.getItem("people");
    var listStars = localStorage.getItem("stars");
    var arrayStars = listStars.split(",");


    if (arrayStars[indexPeople] == "true") {
        document.getElementById("star").checked = true;
    } else {
        document.getElementById("star").checked = false;
    }

    index = indexPeople;
};
get();

peopleUrl = urlDescription + ++index + "/";

var getJSONData = function(url) {
    var result = {};
    return fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(function(response) {
            result.status = 'ok';
            result.data = response;
            return result;
        })
        .catch(function(error) {
            result.status = 'error';
            result.data = error;
            return result;
        });
}

document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(peopleUrl).then(function(resultObj) {
        if (resultObj.status === "ok") {
            objectStarsWars = resultObj.data;

            let peopleNameHTML = document.getElementById("peopleName");
            let heightHTML = document.getElementById("height");
            let massHTML = document.getElementById("mass");
            let hair_colorHTML = document.getElementById("hair_color");
            let skin_colorHTML = document.getElementById("skin_color");
            let eye_colorHTML = document.getElementById("eye_color");
            let birth_yearHTML = document.getElementById("birth_year");
            let genderHTML = document.getElementById("gender");
            let filmsHTML = document.getElementById("films");

            peopleNameHTML.innerHTML = objectStarsWars.name;
            heightHTML.innerHTML = objectStarsWars.height;
            massHTML.innerHTML = objectStarsWars.mass;
            hair_colorHTML.innerHTML = objectStarsWars.hair_color;
            skin_colorHTML.innerHTML = objectStarsWars.skin_color;
            eye_colorHTML.innerHTML = objectStarsWars.eye_color;
            birth_yearHTML.innerHTML = objectStarsWars.birth_year;
            genderHTML.innerHTML = objectStarsWars.gender;
            filmsHTML.innerHTML = objectStarsWars.films.length;
        }
    });
});