document.addEventListener('DOMContentLoaded', () => {
    var map = L.map('map').setView([-28.3881, -54.9527], 8);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Lista de municípios com coordenadas e nomes
    var municipios = [
        { name: "Cerro Largo", coords: [-28.146, -54.738] },
        { name: "Santo Ângelo", coords: [-28.298, -54.263] },
        { name: "São Luiz Gonzaga", coords: [-28.408, -54.956] },
        { name: "São Miguel das Missões", coords: [-28.553, -54.556] },
        { name: "Bossoroca", coords: [-28.7303, -54.9032] },
        { name: "Caibaté", coords: [-28.2916, -54.6454] },
        { name: "Dezesseis de Novembro", coords: [-28.2195, -55.1936] },
        { name: "Entre-Ijuís", coords: [-28.3687, -54.2666] },
        { name: "Eugênio de Castro", coords: [-28.5338, -54.1505] },
        { name: "Garruchos", coords: [-28.1926, -55.6387] },
        { name: "Giruá", coords: [-28.0293, -54.3511] },
        { name: "Guarani das Missões", coords: [-28.1429, -54.5632] },
        { name: "Mato Queimado", coords: [-28.2524, -54.6152] },
        { name: "Pirapó", coords: [-28.0431, -55.2010] },
        { name: "Porto Xavier", coords: [-27.9081, -55.1388] },
        { name: "Rolador", coords: [-28.2561, -54.8146] },
        { name: "Roque Gonzales", coords: [-28.1271, -55.0274] },
        { name: "Salvador das Missões", coords: [-28.1237, -54.8376] },
        { name: "Santo Antônio das Missões", coords: [-28.5125, -55.2267] },
        { name: "São Nicolau", coords: [-28.1830, -55.2673] },
        { name: "São Paulo das Missões", coords: [-28.0176, -54.9465] },
        { name: "São Pedro do Butiá", coords: [-28.1291, -54.8924] },
        { name: "Sete de Setembro", coords: [-28.1404, -54.4631] },
        { name: "Ubiretama", coords: [-28.0407, -54.6863] },
        { name: "Vitória das Missões", coords: [-28.3516, -54.4995] }
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
