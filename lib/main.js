
let button = document.getElementById("selectButton");
let selection;
button.addEventListener("click",optionSelected);
function optionSelected(event){
    var select = document.getElementById('states');
    selection = Number(select.value);
    fetch('https://covidtracking.com/api/states')
    .then(function(response){
        return response.json();
    }).then(function(myJson){
        console.log(myJson);
        let recovered = myJson[selection].recovered;
        if (recovered > 0) {
            recovered = myJson[selection].recovered.toLocaleString()
        } else {
            recovered = "No Infomation"
        }
        console.log('Hi')
        document.getElementById("cases").innerHTML = "Confirmed Cases: " + myJson[selection].positive.toLocaleString();
        document.getElementById("recovered").innerHTML = "Recovered: " + recovered;
        document.getElementById("negative").innerHTML = "Negative Test Results: " + myJson[selection].negative.toLocaleString();
        document.getElementById("death").innerHTML = "Deaths: " + myJson[selection].death.toLocaleString();
        console.log(myJson[selection].state);
        document.getElementById('trackImg').src = "images\\"+myJson[selection].state+".jpg";        
        
    });
}



