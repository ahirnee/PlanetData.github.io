$(document).ready(function() {
    $.getJSON("planet.json", function(data) {
        var planets = data.solarSystem.planets;
        planets.forEach(function(planet, index) {
            var listItem = $('<li>').text(planet.planetName).click(function() {
                localStorage.setItem('selectedPlanet', JSON.stringify(planet));
                window.location.href = 'planet.html';
            });
            $('#planet-list').append(listItem);
        });
    });
});
