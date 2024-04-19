document.addEventListener("DOMContentLoaded", function() {
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";
    const apiid = "1846c734b37afc0db9c8f998114f7ef0";
    const searchinput = document.getElementById("searchinp");
    const searchbtn = document.getElementById("searchbutton");

    async function getweather() {
        await weather(searchinput.value);
    }

    async function weather(city) {
        try {
            const response = await fetch(`${apiurl}${city}&units=metric&appid=${apiid}`);
            const data = await response.json();
            if (data.main && data.main.temp !== undefined) {
                document.getElementById("city-info").innerHTML = data.name;
                document.getElementById("city-data").innerHTML = Math.round(data.main.temp) + "°C";
            } else {
                console.error("Weather data not available for the specified city");
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    searchbtn.addEventListener("click", getweather);
});