document.addEventListener('DOMContentLoaded', () => {
    // Define a posição do mapa, centralizando em Cerro Largo
    var map = L.map('map').setView([-28.4643, -54.9936], 13);

    // Adiciona a camada de tiles do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Adiciona um marcador na cidade de Cerro Largo
    var marker = L.marker([-28.4643, -54.9936]).addTo(map)
        .bindPopup('Cerro Largo, RS, Brasil.<br> Conhecida por sua cultura e tradições.')
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
