const solarSystem = document.getElementById("solarSystem")
const planets = [
    {
    "name": "Mercury",
    "diameter": 4879,
    "color": "grey",
   
    },
    {
    "name": "Venus",
    "diameter": 12104,
    "color": "yellow",
    
    },
    {
    "name": "Earth",
    "diameter": 12742,
    "color": "green",
  
    },
    {
    "name": "Mars",
    "diameter": 6779,
    "color": "pink",
    
    },
    {
    "name": "Jupiter",
    "diameter": 139822,
    "color": "yellow",
    
    },
    {
    "name": "Saturn",
    "diameter": 116464,
    "color": "orange",
    
    },
    {
    "name": "Uranus",
    "diameter": 50724,
    "color": "grey",
   
    },
    {
    "name": "Neptune",
    "diameter": 49244,
    "color": "blue",
    
    }
]

planets.forEach(render);

function render(planet) {
  let planetsBox = document.getElementById("planets");
  let planetsHTML = '<div class="planet-box" id="'+planet.name+'" style="width: calc('+planet.diameter+'px / 900);"><div class="planet" style="background: '+planet.color+'"></div><div class="planet-info"><h2>'+planet.name+'</h2><span><strong>Diameter: </strong>'+planet.diameter+'</span></div></div>';
  
  planetsBox.innerHTML += planetsHTML;
}