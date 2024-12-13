// script.js
/*document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '73ccb9ffe8b28a8f278818830ac2a44d'; // Remplacez par votre clé API OpenWeatherMap
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');
  
    async function fetchWeather() {
      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`);
        if (!response.ok) {
          throw new Error(`Erreur réseau : ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        locationElement.textContent = `Localisation : ${data.name}`;
        temperatureElement.textContent = `Température : ${data.main.temp} °C`;
        descriptionElement.textContent = `Description : ${data.weather[0].description}`;
      } catch (error) {
        console.error('Erreur de récupération des données météo :', error);
        // Affichez un message d'erreur à l'utilisateur
        locationElement.textContent = 'Erreur lors de la récupération des données météo. Veuillez réessayer plus tard.';
        temperatureElement.textContent = '';
        descriptionElement.textContent = '';
      }
    }
  
    fetchWeather();
  });*/
  document.getElementById('search-button').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const apiKey = '73ccb9ffe8b28a8f278818830ac2a44d'; // Remplacez par votre clé API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ville non trouvée');
            }
            return response.json();
        })
        .then(data => {
            const location = data.name;
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            document.getElementById('location').innerText = location;
            document.getElementById('temperature').innerText = `Température: ${temperature} °C`;
            document.getElementById('description').innerText = `Description: ${description}`;
        })
        .catch(error => {
            alert(error.message);
        });
});