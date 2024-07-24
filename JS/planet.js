$(document).ready(function() {
    var selectedPlanet = JSON.parse(localStorage.getItem('selectedPlanet'));
    if (selectedPlanet) {
        $('#planet-info').html(`<h2><p>Planet Name: ${selectedPlanet.planetName}</h2></p>
            <p>Planet Color: ${selectedPlanet.planetColor}</p>
            <p>Radius (KM): ${selectedPlanet.planetRadiusKM}</p>
            <p>Distance from Sun (Millions of KM): ${selectedPlanet.distInMillionsKM.fromSun}</p>
            <p>Distance from Earth (Millions of KM): ${selectedPlanet.distInMillionsKM.fromEarth}</p>
            <img src="${selectedPlanet.image}" alt="Image of ${selectedPlanet.planetName}">`);
    } else {
        console.error('You have not selected any planet.');
    }
});
