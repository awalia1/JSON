function knicksStarters(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        var a = document.getElementById("starters");
        
        a.innerHTML = myObj.knicks.startingLineUp;

    }
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/awalia1/JSON/master/knicks.json", true);
xmlhttp.send();
}

function frankBirth(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        var a = document.getElementById("frankBirthday");
        
        a.innerHTML = myObj.knicks.frank.born;

    }
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/awalia1/JSON/master/knicks.json", true);
xmlhttp.send();
}

function knoxBirth(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        var a = document.getElementById("knoxBirthday");
        
        a.innerHTML = myObj.knicks.knox.born;

    }
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/awalia1/JSON/master/knicks.json", true);
xmlhttp.send();
}