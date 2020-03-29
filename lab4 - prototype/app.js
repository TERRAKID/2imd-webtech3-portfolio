class App {
    constructor() {
        if (sessionStorage.holiday == null) {
            this.year;
            this.month;
            this.day;
            this.getDate();
        }
        if (!((sessionStorage.raining === "true") || (sessionStorage.raining === "false"))) {
            this.lat;
            this.lng;
            this.getLocation();
        } else {
            this.setText();
        }
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
        if (sessionStorage.holiday != "false") {
            document.querySelector(".holiday").innerHTML = "Happy, " + sessionStorage.holiday;
        }
        if (sessionStorage.raining === "true") {
            document.querySelector(".slogan-1").innerHTML = "Regent het buiten?";
            document.querySelector(".slogan-2").innerHTML = "Ga naar de zon!";
        } else {
            document.querySelector(".slogan-1").innerHTML = "Te droog buiten?";
            document.querySelector(".slogan-2").innerHTML = "Laat het regenen!";
        }
    }

    getDate() {
        let date =  new Date();
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;
        this.day = date.getDate();
        this.getHoliyday();
    }

    getHoliyday() {
        let url = `https://calendarific.com/api/v2/holidays?&api_key=97a344558a981a04adcea3a53bcc3be00c415a2f&country=BE&year=${this.year}&month=${this.month}&day=${this.day}&language=nl&type=national`;
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            if (data.response.holidays.length > 0) {
                sessionStorage.holiday = data.response.holidays[0].name;
            } else {
                sessionStorage.holiday = false;
            }
            this.setText();
        }).catch(err => {
            console.log(err);
        });
    }
   
    errorLocation(err) {
        console.log(err);
    }
}

let app = new App();