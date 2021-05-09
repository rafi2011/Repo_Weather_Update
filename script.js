var inputCity = "new york"
var apiUrl = "http://api.openweathermap.org/data/2.5/oncall?appid=d91f911bcf2c0f925fb6535547a5ddc9&q="
var cityInputEL = doc.getElementById("weather-search") 
var formEL = document.getElementById("weather=form")

//Listen to the submit event in form

formEL.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    // read value from input
    console.log(cityInputEL.value)

    // make ajax call to the weather api

    fetch(apiUrl + inputCity)
    .then(processStream)
    .then(logCityWeather)
    .catch(function(error){
        console.log("Thre is an error.", error)
    })

}

function processStream (response) {
    return response.json()
}

function logCityWeather (data) (
    console.log(data)
    console.log("temparature", ((9/5)*(data.main.temp-273)+32).toFixed(2),"calvin", data.main.temp)
    console.log("humidity", data.main.humidity)
    console.log("wind speed", data.wind.speed)
    var temparature = ((9/5)*(data.main.temp-273)+32).toFixed(2)
    var humidity = data.main.humidity
    var windSpeed = data.wind.speed


    
    document.getElementById('weather').textContent = "temparature:" + temparature
    
)