document.addEventListener('DOMContentLoaded', () => {
    var map = L.map('map').setView([-28.3881, -54.9527], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Lista de municípios com coordenadas (exemplo com alguns municípios)
    var municipios = [
        { name: "Cerro Largo", coords: [-28.1481, -54.7464] },
        { name: "Santo Ângelo", coords: [-28.3001, -54.2668] },
        { name: "São Borja", coords: [-28.6600, -56.0035] },
        // Adicione os outros municípios aqui
    ];

    municipios.forEach(municipio => {
        var marker = L.marker(municipio.coords).addTo(map)
            .bindPopup(`<b>${municipio.name}</b><br><button onclick="showMenu('${municipio.name}')">Explore</button>`);
    });
});

function showMenu(municipioName)
