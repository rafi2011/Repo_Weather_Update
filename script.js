var apiK = '9896c6e4c64ea3c6f9dc3b0918572bf0';
var btnElement = document.getElementById('btn');

btnElement.addEventListener('click', function () {
    var searchvalue = btnElement.previousElementSibling.value;
    console.log(searchvalue);

    var apiCall = 'https://api.openweathermap.org/data/2.5/weather?q=' + 
        searchvalue + 
        '&units=imperial' +
        '&appid=' + 
         apiK;
    fetch(apiCall)
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log(data);
            var cityEle = document.getElementById('city-name');
            var dt = data.dt
            //console.log(dt);
            var currentdate = new Date (dt * 1000)
            cityEle.innerHTML = `${data.name}<span>( ${currentdate.getMonth() + 1}/${currentdate.getDate()}/${currentdate.getFullYear()})</span>`
            //cityEle.innerText = data.name;
            var tempEle = document.getElementById('temparature')
            tempEle.innerText = data.main.temp;
            var humidEle = document.getElementById('humidity')
            humidEle.innerText = data.main.humidity;
            var winEle = document.getElementById('wind-speed')
            winEle.innerText = data.wind.speed;
            var uvEle = document.getElementById('uv-index')
            var dt = data.dt
            //console.log(dt);
            var currentdate = new Date (dt * 1000)
            console.log(currentdate.getFullYear());
            console.log(currentdate.getDate());
            console.log(currentdate.getMonth());
            console.log(uvEle);
            

            getUVindex(data.coord.lat, data.coord.lon)
            
            


        });

});

function getUVindex(lat, lon){
    var onecallApi = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely,alerts&units=imperial&appid=${apiK}`

    
}