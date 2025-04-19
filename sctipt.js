const input = document.querySelector(".cityInput")
const weatherResult = document.querySelector("#weatherIcon")

async function getWeather() {
    const apiKey = "905ab7068aa7441c880112023251402"
    const city = document.getElementById("city").value
    console.log(city)
    if(!city){
        alert("Shaxarni kiriting")
        return
    }

    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
        if(data.error){
            alert(data.error.message)
            return
        } else {
            wrapper.innerHTML = ""
            const div = document.createElement('div')
            let iconUrl = ''
            console.log(data.current.condition.text)
            if(data.current.condition.text === 'Overcast') {
                iconUrl = "https://cdn-icons-png.flaticon.com/512/2242/2242879.png"
            } else if(data.current.condition.text === 'Sunny') {
                iconUrl = "https://cdn-icons-png.flaticon.com/512/2108/2108730.png"
            }
            if(iconUrl){
                div.innerHTML = `<img class="icon" src="${iconUrl}" alt="Weather icon">`
                wrapper.appendChild(div)
            }

            weatherResult.innerHTML = data.current.condition.text;
            console.log(wrapper)
        }
    } catch (error) {
        console.error(error)
    }
}