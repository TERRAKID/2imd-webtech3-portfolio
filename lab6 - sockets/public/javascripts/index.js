let base_url = "https://coronaapp-terrakid.herokuapp.com";

primus = Primus.connect(base_url, {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });

  primus.on('data', (json) => {
    if(json.action === "appendStats"){
        appendStats(json.data.stats);
    }
});

let appendStats = (stat) => {
    let cases = document.querySelector(`#${stat.country}`);
    cases.innerHTML = stat.cases;
}

let showStats = (stat) => {
    let container = document.createElement("div");
    let country = document.createElement("h6");
    let cases = document.createElement("p");

    container.setAttribute("class", "row");
    country.setAttribute("class", "col");
    cases.setAttribute("class", "col text-right");

    cases.setAttribute("id", stat.country);

    country.innerHTML = stat.country;
    cases.innerHTML = stat.cases;
    container.append(country);
    container.append(cases);
    document.querySelector(".card-body").append(container);
}

fetch(base_url + "/api/v1/stats").then(result => {
    return result.json();
}).then(json => {
    json.data.stats.forEach(stat => {
        showStats(stat);
    });
}).catch(error => {
    console.log('Error:', error);
});