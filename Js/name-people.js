var objectStarsWars = {};
var index = 10;

function showListName(array) {
    let htmlContentToAppend = "";
    

    for (let i = 0; i < array.length; i++) {
        let peopleName = array[i];
        
        htmlContentToAppend += `
            <a type="button" id="`+ i +`a" href="description.html" onclick="stars(`+ i +`)">
                <div class="container">
                  <div class="card-container">
                      <p id="favoritos">
                        <input id="`+ i +`" type="checkbox">
                        <label for="`+ i +`">★</label>
                      </p>
                    <h6>
                        ` + peopleName.name + ` </br>
                        Gender: ` + peopleName.gender + ` </br> 
                        Brith day:  `+ peopleName.birth_year +`
                    </h6>
                  </div>
                </div>
            </a>
        `
        document.getElementById("namePeople").innerHTML = htmlContentToAppend;
    }
}

document.addEventListener("DOMContentLoaded", function(e) {
    getJSONData(PEOPLE_URL).then(function(resultObj) {
        if (resultObj.status === "ok") {
            objectStarsWars = resultObj.data;
            showListName(objectStarsWars.results);
            
        }
    });
});

function filter(){
    var isChecked = {};
    var count = 0;

    document.getElementById("hiddenButton").hidden = false;

    for (let i = 0; i < index; i++){
        isChecked = document.getElementById(i).checked;
        if(!isChecked){
            document.getElementById(i+'a').style.display = 'none';
        } else {
            ++count;
        }
    }
    var columns = document.getElementById('columns');
    columns.style.columnCount = count;
    
    switch (count){
        case 6:
            columns.style.columnCount = 3;
        break;
        case 7:
            columns.style.columnCount = 7;
        break;
        case 8:
            columns.style.columnCount = 4;
        break;
        case 9:
            columns.style.columnCount = 9;
            columns.style.width = "1200px";

        break;
        case 10:
            columns.style.columnCount = 5;
        break;
    }
}

function withoutFavorite(){
    var isChecked = {};

    document.getElementById("hiddenButton").hidden = true;

    for (let i = 0; i < index; i++){
        isChecked = document.getElementById(i).checked;
        if(!isChecked){
            document.getElementById(i+'a').style.display = "initial";
        }
    }
    var columns = document.getElementById('columns');
    columns.style.columnCount = 5;
    columns.style.width = "auto";

}

function stars(varIndex){
    var isChecked = {};
    var listStars = [];

    for (let i = 0; i < index; i++){
        isChecked = document.getElementById(i).checked;
        listStars.push(isChecked);
    }

    set(varIndex, listStars);
}
