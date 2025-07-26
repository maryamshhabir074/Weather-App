async function getWeather() {
      const city = document.getElementById("cityInput").value;
      const apiKey = "6c2cb8f804c14378989100422252706"; 
      const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);

        document.getElementById("temp").innerHTML = `${Math.round(data.current.temp_c)}°C`;
        document.getElementById("cityName").innerHTML = data.location.name;
        document.getElementById("humidity").innerHTML = data.current.humidity;
        document.getElementById("wind").innerHTML = data.current.wind_kph;

        // icon logic
        const condition = data.current.condition.text.toLowerCase();
        const icon = document.getElementById("weatherIcon");
        const image = document.getElementById("weatherImage");

        if (condition.includes("clear")) {
          icon.innerHTML = '<i class="fa-solid fa-sun"></i>';
          image.innerHTML = "";
        }
        else if (condition.includes("cloud")) {
          icon.innerHTML = '<i class="fa-solid fa-cloud"></i>';
          image.innerHTML = "";
        }
        else if (condition.includes("rain")) {
          icon.innerHTML = '<i class="fa-solid fa-cloud-rain"></i>';
          image.innerHTML = "";
        }
        else if (condition.includes("snow")) {
          icon.innerHTML = '<i class="fa-solid fa-snowflake"></i>';
          image.innerHTML = "";
        }
        else if (condition.includes("thunderstorm")) {
          icon.innerHTML = '<i class="fa-solid fa-bolt"></i>';
          image.innerHTML = "";
        }
        else {
          icon.innerHTML = '<i class="fa-solid fa-cloud"></i>';
          image.innerHTML = "";
        }

        // agar image dalni ho to
        /*
        if (condition.includes("rain")) {
          image.innerHTML = `<img src="rain.png" style="width:50px"/>`;
        }
        else if (condition.includes("clear")) {
          image.innerHTML = `<img src="sun.png" style="width:50px"/>`;
        }
        */
      } catch (error) {
        alert("City not found");
        console.log(error);
      }
    }