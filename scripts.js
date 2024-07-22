// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    var map = L.map('map').setView([-28.3881, -54.9527], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Lista de municípios com coordenadas e nomes
    var municipios = [
        { name: "Cerro Largo", coords: [-28.146, -54.738] },
        { name: "São Borja", coords: [-28.660, -56.005] },
        { name: "Santo Ângelo", coords: [-28.298, -54.263] },
        { name: "São Luiz Gonzaga", coords: [-28.408, -54.956] },
        { name: "São Miguel das Missões", coords: [-28.553, -54.556] }
        // Adicione os outros municípios aqui
    ];

    municipios.forEach(municipio => {
        var marker = L.marker(municipio.coords).addTo(map)
            .bindPopup(`
                <b>${municipio.name}</b><br>
                <button onclick="showContent('${municipio.name}', 'textos')">Textos Históricos</button><br>
                <button onclick="showContent('${municipio.name}', 'fotos')">Fotos</button><br>
                <button onclick="showContent('${municipio.name}', 'audios')">Áudios</button>
            `);
    });
});

// Função para mostrar conteúdo baseado no tipo e no município
function showContent(municipio, tipo) {
    var content = document.getElementById('content');
    if (tipo === 'textos') {
        content.innerHTML = `<h2>Textos Históricos de ${municipio}</h2><p>Conteúdo de textos históricos...</p>`;
    } else if (tipo === 'fotos') {
        content.innerHTML = `<h2>Fotos de ${municipio}</h2><p>Conteúdo de fotos...</p>`;
    } else if (tipo === 'audios') {
        content.innerHTML = `<h2>Áudios de ${municipio}</h2><p>Conteúdo de áudios...</p>`;
    }
}
