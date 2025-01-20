console.log('Doohly - HTML Creative - Template')

// const url = `https://some-weather-lookup-service.com?postcode=${postcode}`


async function getWeather(postcode) {
    
    console.log('getting weather from', postcode)
    let url = `https://wpm-dist.2dm.digital/weather?zip=${postcode},au`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
     // Assuming data has a property called 'weather'
    document.getElementById('weather-info').innerText = `Weather: ${data.city.name}`
    console.log('updated?Weather:')
}

window.getWeather = getWeather

