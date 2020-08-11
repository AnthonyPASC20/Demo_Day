function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const button = document.getElementById("selectButton");
let selection;
button.addEventListener("click",optionSelected);
function optionSelected(event){
    var select = document.getElementById('states');
    selection = Number(select.value);
    fetch('https://covidtracking.com/api/states')
    .then(function(response){
        return response.json();
    }).then(function(myJson){
        document.getElementById("cases").innerHTML = "Confirmed Cases: " + myJson[selection].positive.toLocaleString();
        document.getElementById("recovered").innerHTML = "Recovered: " + myJson[selection].recovered.toLocaleString();
        document.getElementById("negative").innerHTML = "Negative Test Results: " + myJson[selection].negative.toLocaleString();
        document.getElementById("state").innerHTML = "State Selected: " + myJson[selection].state;
    });
}