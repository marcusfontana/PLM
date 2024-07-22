document.addEventListener('DOMContentLoaded', () => {
    // Coordenadas aproximadas para a região das Missões no Rio Grande do Sul, Brasil
    var map = L.map('map').setView([-28.01, -54.95], 10); // Ajuste o zoom conforme necessário

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Coordenadas para um ponto de interesse na região das Missões
    var marker = L.marker([-28.01, -54.95]).addTo(map)
        .bindPopup('Região das Missões, RS, Brasil.')
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
