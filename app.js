// const API = b3c53fbb4851441452639330248d026e;


document.getElementById('button').addEventListener('click', function () {
    const cityName = document.getElementById("input-value").value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=b3c53fbb4851441452639330248d026e`
    fetch(url)
        .then(res => res.json())
        .then(data => getWeatherData(data))
        .catch(err => alert("Wrong Keyword"))
})

const getWeatherData = city =>{
    const weather = city.main.temp;
    const fToC = (weather-273.15);
    document.getElementById('temparature').innerText = fToC.toFixed(2);
    const name = city.name;
    document.getElementById('name').innerText = name;
    const cloud = city.weather[0].main;
    document.getElementById('cloud').innerText = cloud;
    // let icon = city.weather[0].icon;
    document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`);
    document.getElementById("input-value").value="";
    
}
