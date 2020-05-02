let base_url = "https://coronaapp-terrakid.herokuapp.com";

fetch(base_url + "/api/v1/stats").then(result => {
    return result.json();
}).then(json => {
    json.data.stats.forEach(stat => {
        let container = document.createElement("div");
        let country = document.createElement("h6");
        let cases = document.createElement("p");

        container.setAttribute("class", "row");
        country.setAttribute("class", "col");
        cases.setAttribute("class", "col text-right");

        country.innerHTML = stat.country;
        cases.innerHTML = stat.cases;
        container.append(country);
        container.append(cases);
        document.querySelector(".card-body").append(container);
    });
}).catch(error => {
    console.log('Error:', error);
});