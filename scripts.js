document.addEventListener('DOMContentLoaded', () => {
    var map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    var marker = L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
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
