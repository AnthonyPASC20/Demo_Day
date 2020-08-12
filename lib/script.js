let z = document.getElementById("input");
z.addEventListener("click", openWebpage);
let newDiv = document.getElementById("imgDiv");
let state = document.getElementById("inputText");
let link = document.createElement("a");

function openWebpage(event){
    var select = document.getElementById('statesInput');
    selection = Number(select.value);
    fetch('https://covidtracking.com/api/states')
    .then(function(response){
        return response.json();
    }).then(function(myJson){
        let x = myJson[selection].state;
        console.log(x);
        link.setAttribute('href',"https://www.nytimes.com/interactive/2020/us/states-reopen-map-coronavirus.html#g-state-"+x);
        link.innerHTML = "Here is the link to reopenings of " + x;
        window.open("https://www.nytimes.com/interactive/2020/us/states-reopen-map-coronavirus.html#g-state-"+x, "_blank");
        newDiv.appendChild(link);

        event.preventDefault();
        
    });
}