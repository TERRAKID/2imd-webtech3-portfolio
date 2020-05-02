let base_url = "https://coronaapp-terrakid.herokuapp.com";
container = document.querySelector(".card-body");

document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();
  let country = document.querySelector("#country").value;
  let cases = document.querySelector("#cases").value;
  
  fetch(base_url + "/api/v1/stats/updatestats", {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "country" : country,
      "cases" : cases
    })
  })
  .then(response => response.json())
  .then(result => {
    child = document.querySelector(".alert");
    if (document.contains(child)) {
      container.removeChild(child);
    }
    
    if (result.status === "success") {
      let alert = document.createElement("div");
      alert.setAttribute("class", "alert alert-success");
      alert.innerHTML = "The statistic has been successfully updated";
      container.prepend(alert);
    } else {
      let alert = document.createElement("div");
      alert.setAttribute("class", "alert alert-warning");
      alert.innerHTML = "Ooops something went wrong";
      container.prepend(alert);
    }
  }).catch(error => {
    console.error('Error:', error);
  });
})

fetch(base_url + "/api/v1/stats").then(result => {
    return result.json();
}).then(json => {
    json.data.stats.forEach(stat => {
        let container = document.querySelector("select");
        let country = document.createElement("option");

        country.setAttribute("value", stat.country);

        country.innerHTML = stat.country;
        container.append(country);
    });
}).catch(error => {
    console.log('Error:', error);
});