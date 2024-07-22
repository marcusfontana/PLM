document.addEventListener('DOMContentLoaded', () => {
    var map = L.map('map').setView([-28.3881, -54.9527], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Coordenadas dos vértices do polígono que delimita a região das Missões
    var missoesCoords = [
        [-28.3500, -55.0000],
        [-28.3500, -54.9000],
        [-28.4000, -54.9000],
        [-28.4000, -55.0000]
    ];

    // Adiciona o polígono ao mapa
    var missoesPolygon = L.polygon(missoesCoords, {
        color: 'red',
        fillColor: 'rgba(255, 0, 0, 0.3)',
        fillOpacity: 0.5,
        weight: 2
    }).addTo(map);

    // Adiciona um marcador nas coordenadas da região das Missões
    var marker = L.marker([-28.3881, -54.9527]).addTo(map)
        .bindPopup('Região das Missões, Brasil.<br> Conhecida por sua rica história e cultura.')
        .openPopup();
});

marker.on('click', function() {
    document.getElementById('content').innerHTML = `
        <h2>Localização 1</h2>
        <p>Descrição do local.</p>
        <img src="path/to/image.jpg" alt="Imagem do Local" />
        <audio controls>
            <source src="path/to/audio.mp3" type="audio/mpeg">
            Seu navegador não suporta o elemento de áudio.
        </audio>
    `;
});
