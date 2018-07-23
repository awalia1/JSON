var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("demo").innerHTML = myObj.knicks.startingLineUp + " " + myObj.knicks.frank.born;
    }
};
xmlhttp.open("GET", "https://raw.githubusercontent.com/awalia1/JSON/master/knicks.json", true);
xmlhttp.send();