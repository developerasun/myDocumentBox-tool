
// Create an account at openweathermap.org and get your own api key
const API_KEY = "c5282751307d8d6fb8c19a5d42752a62";

// success func : JS delivers the first parameter to the function
function onGeoOk(position){
    const latitude = position.coords.latitude; 
    const longitude =  position.coords.longitude;
    console.log(`You live in ${latitude}, ${longitude}`);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
    console.log(url);
    
    // Google Chrome developer tools - Network tap : showing what is happening in wifi
    fetch(url)
        .then((response) => response.json())
        .then((data)=> {
        const weather = document.querySelector("#weather span:nth-child(1)");
        const city = document.querySelector("#weather span:nth-child(2)");
        const feelsLike = document.querySelector("#weather span:nth-child(3)"); 

        weather.innerText = data.weather[0].main; 
        city.innerText = data.name;
        feelsLike.innerText = `windchill temp is : ${data.main.feels_like}`;
    });
}

// error func 
function onGeoErr(){
    alert("Can't find weather info"); 
}

// getCurrentPosition function takes two args : success func, error func
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);