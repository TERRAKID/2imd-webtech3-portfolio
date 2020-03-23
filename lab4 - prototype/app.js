class App {
    constructor() {
        this.getLocation();
        this.lat;
        this.lng;
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(
            this.gotLocation.bind(this),
            this.errorLocation.bind(this)
        );
    }

    gotLocation(result) {
        this.lat = result.coords.latitude;
        this.lng = result.coords.longitude;
        this.getWeather();
    }

    getWeather() {
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/88e2dc8f07f9ca72acbdeec64399381c/${this.lat},${this.lng}?units=si`
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            let precipType = data.currently.precipType;
            let precipIntensity = data.currently.precipIntensity;
            sessionStorage.raining = this.isRaining(precipType, precipIntensity);
            this.setText();
        }).catch(err => {
            console.log(err);
        });
    }

    isRaining(precipType, precipIntensity) {
        if (precipType === 'rain' && precipIntensity >  2.5) {
            return true;
        } else {
            return false;
        }
    }

    setText() {
        if (sessionStorage.raining === "true") {
            document.querySelector(".slogan-1").innerHTML = "Regent het buiten?";
            document.querySelector(".slogan-2").innerHTML = "Ga naar de zon!";
        } else {
            document.querySelector(".slogan-1").innerHTML = "Te droog buiten?";
            document.querySelector(".slogan-2").innerHTML = "Laat het regenen!";
        }
    }

    errorLocation(err) {
        console.log(err);
    }
}

let app = new App();